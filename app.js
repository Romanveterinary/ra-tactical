// ==========================================
// 0. СИСТЕМА БЕЗПЕКИ ТА АВТОРИЗАЦІЯ
// ==========================================
const SECRET_PIN = "4567"; 
let pinAttempts = 0;

async function checkPin() {
    let input = document.getElementById('pin-input').value;
    if (input === SECRET_PIN) {
        document.getElementById('pin-screen').style.display = 'none';
        
        await initSensors();
        if(navigator.vibrate) navigator.vibrate(50); 
        playNavTone(1000, 100);

        if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
            try {
                const permissionState = await DeviceOrientationEvent.requestPermission();
                if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', handleOrientation);
                }
            } catch (e) { console.log(e); }
        } else {
            window.addEventListener('deviceorientationabsolute', handleOrientation);
            window.addEventListener('deviceorientation', handleOrientation);
        }

        initSystem(); 
    } else {
        pinAttempts++;
        document.getElementById('pin-error').style.display = 'block';
        if(navigator.vibrate) navigator.vibrate([100, 100, 100]);
        if (pinAttempts >= 3) document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:40vh; font-family:monospace;'>404 NOT FOUND</h1>";
    }
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(e => console.error(e)); });
}

// ==========================================
// 1. ГЛОБАЛЬНІ ЗМІННІ ТА ШИФРУВАННЯ
// ==========================================
const CRYPTO_KEY = "RA_STORM_2026"; // Наш секретний військовий ключ

let audioCtx = null, osc = null, gain = null;
let lastGoodGPS = null, watchId = null;
let hardwareHeading = 0, compassOffset = 0, currentBearing = null; 

let currentDisplayAngle = 0;
let isFirstCompassUpdate = true;
let hasAbsoluteOrientation = false; 

let isScanning = false, isShielded = false, shieldSound = false, irMode = false;
let aiModel = null, isAiLive = false, isScanningQR = false;
let currentVideoTrack = null; 

let map = null, userMarker = null;
let routePoints = [], routeMarkers = [], routeLine = null;
let isWalkCalibrating = false, walkStartPoint = null;
let topoLayer = null, darkLayer = null, currentLayer = 'topo';

let isMapFollowing = true;
let tracePoints = [];
let traceLineLayer = null;

let guideMode = false, guideType = 'search', navAudioEnabled = false;
let lastVibroTime = 0, lastWarnTime = 0, lastGpsPing = 0;
let isSignalLost = true, firstFix = true;
let lastGpsProcessTime = Date.now(); 

let isEcoMode = false, ecoPeekTimer = null, isEcoPeeking = false;

let wakeLock = null;
let isTransportMode = false;
let lastGpsCoordsForTransport = null;

const REAL_HEIGHTS = { 'person': 1.7, 'car': 1.5, 'truck': 3.0, 'bus': 3.0, 'motorcycle': 1.2 };

// ==========================================
// 2. ІНІЦІАЛІЗАЦІЯ, ЗВУК ТА ЕКРАН
// ==========================================
function initSystem() {
    checkStealthMode(); 
    try{initMap();}catch(e){} 
    try{initGPS();}catch(e){} 
    try{processCamera();}catch(e){}
    setInterval(traceVanishing, 3000);
    
    setInterval(() => {
        if (!isEcoMode && Date.now() - lastGpsProcessTime > 4000) {
            let stat = document.getElementById('gps-status');
            if (stat && stat.innerText === "GPS: OK") {
                stat.innerText = "⚠️ GPS ЗАТРИМКА"; stat.style.color = "#f1c40f";
            }
        }
    }, 1000);
}

async function requestWakeLock() {
    if ('wakeLock' in navigator) {
        try { wakeLock = await navigator.wakeLock.request('screen'); }
        catch (err) { console.log(err); }
    }
}
function releaseWakeLock() {
    if (wakeLock !== null) { wakeLock.release().then(() => wakeLock = null); }
}
document.addEventListener('visibilitychange', () => {
    if (document.hidden) turnOffCamera();
    if (!document.hidden && wakeLock !== null && document.getElementById('mod-map').classList.contains('active')) {
        requestWakeLock();
    }
});

function checkStealthMode() {
    const statusEl = document.getElementById('stealth-status');
    if(!statusEl) return;
    if (navigator.onLine) { statusEl.innerText = "⚠️ РАДІОСЛІД"; statusEl.className = "stealth-danger"; } 
    else { statusEl.innerText = "[ СТЕЛС АКТИВНО ]"; statusEl.className = "stealth-safe"; }
}
setInterval(checkStealthMode, 1000); 

function vibrateError() { if (navigator.vibrate) navigator.vibrate([300, 100, 300]); }

async function initSensors() {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            osc = audioCtx.createOscillator(); gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);
            gain.gain.value = 0; osc.start();
        } else if (audioCtx.state === 'suspended') { await audioCtx.resume(); }
    } catch (e) {}
}

function playNavTone(freq, duration) {
    if (!audioCtx || !navAudioEnabled) return; 
    try {
        let o = audioCtx.createOscillator(); let g = audioCtx.createGain();
        o.connect(g); g.connect(audioCtx.destination); o.type = 'sine'; o.frequency.value = freq; g.gain.value = 0.5;
        o.start(); g.gain.setTargetAtTime(0, audioCtx.currentTime + duration/1000, 0.05); setTimeout(() => o.stop(), duration + 100);
    } catch(e) {}
}
function playSystemTone(freq, duration) {
    if (!audioCtx) return; 
    try {
        let o = audioCtx.createOscillator(); let g = audioCtx.createGain();
        o.connect(g); g.connect(audioCtx.destination); o.type = 'sine'; o.frequency.value = freq; g.gain.value = 0.5;
        o.start(); g.gain.setTargetAtTime(0, audioCtx.currentTime + duration/1000, 0.05); setTimeout(() => o.stop(), duration + 100);
    } catch(e) {}
}

function triggerDestroyProtocol() {
    if (confirm("УВАГА! ЗНИЩИТИ ВЕСЬ МАРШРУТ ТА ДАНІ ПРОГРАМИ?")) {
        routePoints = []; tracePoints = []; updateRoute();
        if(traceLineLayer && map) map.removeLayer(traceLineLayer);
        localStorage.removeItem('savedRoute'); currentBearing = null;
        document.getElementById('tc-dist').innerText = "--- м";
        document.getElementById('eco-dist').innerText = "--- м";
        let hudDistEl = document.getElementById('hud-dist'); if(hudDistEl) hudDistEl.innerText = "ЦІЛЬ: --- м";
        closeNav();
        if(navigator.vibrate) navigator.vibrate([500, 100, 500, 100, 1000]); 
        alert("ДАНІ УСПІШНО ЗНИЩЕНО.");
    }
}

function killApp() {
    if (confirm("ВИМКНУТИ ДОДАТОК?")) {
        if(watchId) navigator.geolocation.clearWatch(watchId);
        turnOffCamera();
        document.body.innerHTML = "<div style='color:#555; text-align:center; margin-top:40vh; font-family:monospace; font-size:1.5rem;'>СИСТЕМА ЗУПИНЕНА</div>";
    }
}

// ==========================================
// 3. МЕНЮ ТА КЕРУВАННЯ МОДУЛЯМИ
// ==========================================
function openNav() { document.getElementById("side-menu").style.width = "280px"; }
function closeNav() { document.getElementById("side-menu").style.width = "0"; }

function showModule(id) {
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    if (id === 'mod-map') {
        requestWakeLock();
        if (map) { setTimeout(() => { map.invalidateSize(); if (lastGoodGPS) map.setView([lastGoodGPS.lat, lastGoodGPS.lon], 18); }, 200); }
    } else { releaseWakeLock(); }
    
    if (id !== 'mod-eye' && id !== 'mod-chat') turnOffCamera();
}

function turnOffCamera() {
    try {
        const v = document.getElementById('v-stream');
        if (v && v.srcObject) { v.srcObject.getTracks().forEach(t => t.stop()); v.srcObject = null; currentVideoTrack = null; }
        
        const vChat = document.getElementById('v-chat-stream');
        if (vChat && vChat.srcObject) { 
            vChat.srcObject.getTracks().forEach(t => t.stop()); 
            vChat.srcObject = null; 
            vChat.style.display = 'none';
            let btnChatCam = document.getElementById('btn-chat-cam');
            if(btnChatCam) btnChatCam.innerText = "📷 УВІМКНУТИ КАМЕРУ ДЛЯ ЧИТАННЯ";
        }
    } catch(e) {}
    isAiLive = false; isScanning = false; isScanningQR = false;
    let btnCam = document.getElementById('btn-cam'); if(btnCam) btnCam.innerText = "🔴 КАМЕРА";
    let btnAiCam = document.getElementById('btn-ai-cam'); if(btnAiCam) { btnAiCam.innerText = "🤖 ШІ SCAN"; btnAiCam.style.color = "#fff"; }
    let btnScanQR = document.getElementById('btn-scan-qr'); if(btnScanQR) btnScanQR.style.color = "#0cf";
    let btnScan = document.getElementById('btn-scan'); if(btnScan) { btnScan.innerText = "📉 ДЕТЕКТОР РУХУ"; btnScan.style.color = "#fff"; }
    let aiStats = document.getElementById('ai-stats'); if(aiStats) aiStats.innerText = "ШІ НЕ АКТИВНИЙ";
    const canvas = document.getElementById('ui-canvas');
    if(canvas) canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height);
}

// ==========================================
// 4. МАПА, QR-МАРШРУТИ ТА ЗАШИФРОВАНА РАЦІЯ
// ==========================================
function toggleMapMenu() {
    const m = document.getElementById('map-controls-panel'); const btn = document.getElementById('btn-map-menu');
    if (m.style.display === 'none') { m.style.display = 'flex'; btn.style.color = '#0cf'; btn.style.borderColor = '#0cf'; } 
    else { m.style.display = 'none'; btn.style.color = '#fff'; btn.style.borderColor = '#333'; }
}

function initMap() {
    if (typeof L === 'undefined') return;
    try {
        topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { maxZoom: 17 });
        darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 });
        map = L.map('map-container', { zoomControl: false, doubleClickZoom: false }).setView([49.0, 31.0], 6);
        topoLayer.addTo(map);

        let pressTimer;
        map.on('mousedown contextmenu', (e) => {
            pressTimer = setTimeout(() => {
                if(routePoints.length >= 10) return alert("Максимум 10 точок!");
                if(navigator.vibrate) navigator.vibrate(50);
                playNavTone(800, 100);
                routePoints.push(e.latlng); updateRoute();
            }, 700); 
        });
        
        map.on('mouseup mousemove dragstart', () => { clearTimeout(pressTimer); });

        map.on('dblclick', (e) => {
            if(routePoints.length >= 10) return alert("Максимум 10 точок!");
            if(navigator.vibrate) navigator.vibrate(50);
            routePoints.push(e.latlng); updateRoute();
        });
        
        map.on('dragstart', () => { isMapFollowing = false; document.getElementById('btn-follow').style.color = '#fff'; });

        const saved = localStorage.getItem('savedRoute');
        if(saved) { routePoints = JSON.parse(saved); updateRoute(); }
    } catch(e) {}
}

function updateRoute() {
    if(!map) return;
    routeMarkers.forEach(m => map.removeLayer(m)); routeMarkers = [];
    if(routeLine) map.removeLayer(routeLine);
    
    if (routePoints.length === 0) {
        document.getElementById('route-info').innerText = "ЦІЛЬ: НЕМАЄ";
        document.getElementById('tc-dist').innerText = "--- м";
        document.getElementById('eco-dist').innerText = "--- м";
        let hudDistEl = document.getElementById('hud-dist'); if(hudDistEl) hudDistEl.innerText = "ЦІЛЬ: --- м";
        currentBearing = null; localStorage.removeItem('savedRoute'); return;
    }

    routePoints.forEach((p, i) => { let m = L.circleMarker(p, { color: i === 0 ? '#0f0' : '#f0f', radius: 8, fillOpacity: 1 }).addTo(map); routeMarkers.push(m); });
    if(routePoints.length > 1) { routeLine = L.polyline(routePoints, { color: '#f0f', weight: 3, dashArray: '5, 10' }).addTo(map); }
    document.getElementById('route-info').innerText = `ЦІЛЬ: ТОЧКА 1 З ${routePoints.length}`;
    localStorage.setItem('savedRoute', JSON.stringify(routePoints));
}

function traceVanishing() {
    if (tracePoints.length > 0 && (Date.now() - lastGpsProcessTime > 5000)) {
        tracePoints.shift();
        if(traceLineLayer && map) {
            map.removeLayer(traceLineLayer);
            if(tracePoints.length > 0) traceLineLayer = L.polyline(tracePoints, { color: '#0cf', weight: 4, className: 'map-trace' }).addTo(map);
        }
    }
}

document.getElementById('btn-share-qr').onclick = () => {
    if (routePoints.length === 0) return alert("Немає точок для передачі!");
    let data = JSON.stringify(routePoints.map(p => [p.lat, p.lng]));
    document.getElementById('qrcode-box').innerHTML = '';
    if(typeof QRCode !== 'undefined') {
        new QRCode(document.getElementById('qrcode-box'), { text: data, width: 220, height: 220, colorDark : "#000000", colorLight : "#ffffff" });
        document.getElementById('qr-modal').style.display = 'flex'; toggleMapMenu();
    } else { alert("Помилка генератора QR."); }
};

// --- ФУНКЦІЇ ШИФРУВАННЯ ТА ЛІЧИЛЬНИКА ---
function updateCharCount() {
    let el = document.getElementById('chat-input');
    let counter = document.getElementById('char-counter');
    if(el && counter) {
        let left = 200 - el.value.length;
        counter.innerText = `Залишилось: ${left} символів`;
    }
}

function encryptData(text) {
    let encrypted = "";
    let safeText = encodeURIComponent(text); 
    for (let i = 0; i < safeText.length; i++) {
        encrypted += String.fromCharCode(safeText.charCodeAt(i) ^ CRYPTO_KEY.charCodeAt(i % CRYPTO_KEY.length));
    }
    return btoa(encrypted); 
}

function decryptData(encodedText) {
    let decrypted = "";
    let decodedStr = atob(encodedText); 
    for (let i = 0; i < decodedStr.length; i++) {
        decrypted += String.fromCharCode(decodedStr.charCodeAt(i) ^ CRYPTO_KEY.charCodeAt(i % CRYPTO_KEY.length));
    }
    return decodeURIComponent(decrypted);
}

function generateChatQR() {
    let text = document.getElementById('chat-input').value.trim();
    if (!text) return alert("Спочатку введіть текст повідомлення!");
    
    document.getElementById('qrcode-box').innerHTML = '';
    if(typeof QRCode !== 'undefined') {
        let safeText = "SEC:" + encryptData(text);
        new QRCode(document.getElementById('qrcode-box'), { text: safeText, width: 220, height: 220, colorDark : "#000000", colorLight : "#ffffff" });
        document.getElementById('qr-modal').style.display = 'flex';
    } else { alert("Помилка генератора QR."); }
}

function clearChat() { 
    document.getElementById('chat-input').value = ''; 
    updateCharCount();
}

function closeQR() { document.getElementById('qr-modal').style.display = 'none'; }


// ==========================================
// БЛОК СКАНУВАННЯ (ОПТИКА, ФОТО ТА НОВИЙ ЧАТ)
// ==========================================

// 1. ЗАПУСК КАМЕРИ НА ВКЛАДЦІ ЧАТУ (НОВЕ)
document.getElementById('btn-chat-cam').onclick = async () => {
    const video = document.getElementById('v-chat-stream');
    let btn = document.getElementById('btn-chat-cam');
    
    if (video.srcObject) { 
        video.srcObject.getTracks().forEach(t => t.stop()); 
        video.srcObject = null;
        video.style.display = 'none';
        btn.innerText = "📷 УВІМКНУТИ КАМЕРУ ДЛЯ ЧИТАННЯ";
        isScanningQR = false;
    } else {
        btn.innerText = "ЗАПУСК...";
        try {
            const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}});
            video.srcObject = stream;
            video.play();
            video.style.display = 'block';
            btn.innerText = "⏹ ВИМКНУТИ КАМЕРУ";
            isScanningQR = true;
            scanQRChatFrame(); 
        } catch(e) { 
            btn.innerText = "❌ КАМЕРА БЛОКОВАНА"; 
            setTimeout(() => { btn.innerText = "📷 УВІМКНУТИ КАМЕРУ ДЛЯ ЧИТАННЯ"; }, 3000); 
        }
    }
};

function scanQRChatFrame() {
    if (!isScanningQR) return;
    const video = document.getElementById('v-chat-stream');
    if (video.readyState === video.HAVE_ENOUGH_DATA && video.srcObject) {
        const canvas = document.createElement("canvas"); canvas.width = video.videoWidth; canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d"); ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" });
        
        if (code) {
            isScanningQR = false; 
            document.getElementById('btn-chat-cam').innerText = "📷 УВІМКНУТИ КАМЕРУ ДЛЯ ЧИТАННЯ";
            video.srcObject.getTracks().forEach(t => t.stop()); 
            video.srcObject = null;
            video.style.display = 'none';
            processDecodedQR(code.data);
            return;
        }
    }
    requestAnimationFrame(scanQRChatFrame);
}


// 2. ЗАПУСК ЖИВОЇ КАМЕРИ НА ВКЛАДЦІ ОПТИКИ
document.getElementById('btn-scan-qr').onclick = () => {
    const video = document.getElementById('v-stream');
    if (!video.srcObject) return alert("Спочатку увімкніть КАМЕРУ!");
    if (typeof jsQR === 'undefined') return alert("Бібліотека сканера відсутня.");
    
    isScanningQR = !isScanningQR;
    document.getElementById('btn-scan-qr').style.color = isScanningQR ? "#4ade80" : "#0cf";
    if (isScanningQR) scanQROpticsFrame();
};

function scanQROpticsFrame() {
    if (!isScanningQR) return;
    const video = document.getElementById('v-stream');
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        const canvas = document.createElement("canvas"); canvas.width = video.videoWidth; canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d"); ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" });
        
        if (code) {
            isScanningQR = false; 
            document.getElementById('btn-scan-qr').style.color = "#0cf";
            processDecodedQR(code.data);
            return;
        }
    }
    requestAnimationFrame(scanQROpticsFrame);
}

// 3. ЗАПУСК З ФОТОГРАФІЇ
document.getElementById('btn-scan-photo').onclick = () => {
    document.getElementById('qr-file-input').click();
};

document.getElementById('qr-file-input').addEventListener('change', function(e) {
    let file = e.target.files[0];
    if (!file) return;

    e.target.value = '';

    let reader = new FileReader();
    reader.onload = function(event) {
        let img = new Image();
        img.onload = function() {
            let canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            let ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);
            let imageData = ctx.getImageData(0, 0, img.width, img.height);
            
            const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" });

            if (code) {
                processDecodedQR(code.data);
            } else {
                alert("❌ QR-код не знайдено на фото. Спробуйте збільшити код або обрати інше фото.");
            }
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

// 4. ЗАГАЛЬНА ФУНКЦІЯ РОЗШИФРОВКИ (ЗВУК ПРИБРАНО)
function processDecodedQR(data) {
    // ЗАЛИШИЛАСЯ ТІЛЬКИ ВІБРАЦІЯ (Абсолютна тиша)
    if(navigator.vibrate) navigator.vibrate([500, 200, 500]); 

    if (data.startsWith("SEC:")) {
        try {
            let msg = decryptData(data.substring(4)); 
            alert("📥 СЕКРЕТНЕ ПОВІДОМЛЕННЯ:\n\n" + msg);
        } catch (err) {
            alert("❌ Помилка: Неможливо розшифрувати. Код пошкоджено або ключ невірний.");
        }
        return;
    }
    if (data.startsWith("CHAT:")) {
        try { let msg = decodeURIComponent(data.substring(5)); alert("📥 ПОВІДОМЛЕННЯ (Без шифру):\n\n" + msg); } catch (err) {} return;
    }
    if (data.startsWith("MSG:")) {
        alert("📥 ПОВІДОМЛЕННЯ (Без шифру):\n\n" + data.substring(4)); return;
    }
    
    try {
        let pts = JSON.parse(data);
        if (Array.isArray(pts)) {
            routePoints = pts.map(p => L.latLng(p[0], p[1])); updateRoute();
            alert("МАРШРУТ УСПІШНО ОТРИМАНО!"); showModule('mod-map'); 
            return;
        }
    } catch(e) {}

    alert("⚠️ ПРОЧИТАНО НЕВІДОМИЙ КОД:\n" + data);
}

// ==========================================

document.getElementById('btn-follow').onclick = () => {
    isMapFollowing = true; document.getElementById('btn-follow').style.color = '#4ade80';
    if (lastGoodGPS && map) map.setView([lastGoodGPS.lat, lastGoodGPS.lon], 18); toggleMapMenu();
};

document.getElementById('btn-layer-toggle').onclick = () => {
    if(!map || !topoLayer || !darkLayer) return;
    if(currentLayer === 'topo') { map.removeLayer(topoLayer); darkLayer.addTo(map); currentLayer = 'dark'; }
    else { map.removeLayer(darkLayer); topoLayer.addTo(map); currentLayer = 'topo'; }
    toggleMapMenu();
};

document.getElementById('btn-del-last').onclick = () => { if (routePoints.length > 0) { routePoints.pop(); updateRoute(); } toggleMapMenu(); };
document.getElementById('btn-clear-map').onclick = () => { if (confirm("Видалити весь маршрут?")) { routePoints = []; updateRoute(); } toggleMapMenu(); };

document.getElementById('btn-cache-map').onclick = async () => {
    if (!map || !lastGoodGPS) return alert("Немає GPS!");
    let btn = document.getElementById('btn-cache-map'); btn.innerText = "ЗАВАНТАЖЕННЯ..."; btn.style.color = "#f33";
    try {
        const c = [lastGoodGPS.lat, lastGoodGPS.lon]; const offset = 0.012; 
        const pts = [ [c[0]+offset, c[1]+offset], [c[0]-offset, c[1]-offset], [c[0]+offset, c[1]-offset], [c[0]-offset, c[1]+offset] ];
        let origZoom = map.getZoom(); let origCenter = map.getCenter();
        for (let p of pts) { map.setView(p, 15, {animate: false}); await new Promise(r => setTimeout(r, 1500)); }
        map.setView(origCenter, origZoom, {animate: false}); 
        btn.innerText = "КВАДРАТ ЗБЕРЕЖЕНО"; btn.style.color = "#4ade80"; if(navigator.vibrate) navigator.vibrate(200); playSystemTone(800, 100);
        setTimeout(() => { btn.innerText = "💾 КЕШ 2х2 км"; btn.style.color = "var(--glow)"; toggleMapMenu(); }, 4000);
    } catch(e) { btn.innerText = "ПОМИЛКА"; btn.style.color = "#f33"; vibrateError(); }
};

let btnTransport = document.getElementById('btn-transport');
if(btnTransport) {
    btnTransport.onclick = () => {
        isTransportMode = !isTransportMode;
        if (isTransportMode) {
            btnTransport.style.color = '#4ade80'; btnTransport.style.borderColor = '#4ade80';
            compassOffset = 0; 
            alert("🚗 ТРАНСПОРТ УВІМКНЕНО\nМагнітний компас вимкнено (щоб кузов авто не заважав). Стрілка покаже напрямок, як тільки ви почнете рух.");
        } else {
            btnTransport.style.color = '#fff'; btnTransport.style.borderColor = '#333';
        }
        toggleMapMenu();
    };
}

// ==========================================
// 5. РОЗУМНИЙ GPS, АЛЬТИМЕТР ТА ПОВОДИР
// ==========================================
function updateSunPosition(lat, lon) {
    let sunAz = getSunAzimuth(lat, lon, new Date());
    let sunMark = document.getElementById('sun-mark');
    if(sunMark) { sunMark.style.display = 'block'; sunMark.style.transform = `translate(-50%, -50%) rotate(${sunAz}deg) translateY(-135px) rotate(-${sunAz}deg)`; }
}

document.getElementById('btn-cal-walk').onclick = () => {
    if (!lastGoodGPS) return alert("Немає сигналу GPS!");
    isWalkCalibrating = true;
    walkStartPoint = { lat: lastGoodGPS.lat, lon: lastGoodGPS.lon };
    let calBtn = document.getElementById('btn-cal-walk');
    if(calBtn) { calBtn.innerText = "ЙДІТЬ ПРЯМО (0 / 15м)"; calBtn.style.color = "#f1c40f"; }
    if(navigator.vibrate) navigator.vibrate([100, 100]); playSystemTone(500, 100);
};

function initGPS() {
    if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(pos => {
            const now = Date.now();
            const { latitude: lat, longitude: lon, speed: spd, accuracy: acc, altitude: alt } = pos.coords;
            
            lastGpsProcessTime = now; 

            let altText = (alt !== null && alt !== undefined) ? Math.round(alt) + " м" : "--- м";
            let tcAltEl = document.getElementById('tc-alt');
            let hudAltEl = document.getElementById('alt-val');
            if (tcAltEl) tcAltEl.innerText = `ВИСОТА: ${altText}`;
            if (hudAltEl) hudAltEl.innerText = `ВИС: ${altText}`;

            let stat = document.getElementById('gps-status');
            if(acc > 200) {
                if(stat) { stat.innerText = "❌ GPS ЗГЛУШЕНО (>200м)"; stat.style.color = "#f33"; }
                if(!isSignalLost) { 
                    if(navigator.vibrate) navigator.vibrate([500, 200, 500, 200, 1000]); 
                    playSystemTone(300, 500); 
                    isSignalLost = true; 
                }
            } else {
                if(stat) { stat.innerText = "GPS: OK"; stat.style.color = "#4ade80"; }
                if(isSignalLost) { 
                    if(navigator.vibrate) navigator.vibrate([100, 100, 100]); 
                    playSystemTone(1200, 200); 
                    isSignalLost = false; 
                } 
                if (guideMode && !isEcoMode && now - lastGpsPing > 3000) { if(navigator.vibrate) navigator.vibrate(30); lastGpsPing = now; }
            }

            if(routePoints.length > 0 && map) {
                let target = routePoints[0]; let d = map.distance([lat, lon], target);
                
                let distEl = document.getElementById('tc-dist'); if(distEl) distEl.innerText = Math.round(d) + " м";
                let ecoDistEl = document.getElementById('eco-dist'); if(ecoDistEl) ecoDistEl.innerText = Math.round(d) + " м";
                let hudDistEl = document.getElementById('hud-dist'); if(hudDistEl) hudDistEl.innerText = `ЦІЛЬ: ${Math.round(d)} м`;
                
                if(d <= 15) { 
                    routePoints.shift(); updateRoute(); 
                    if(navigator.vibrate) navigator.vibrate([500,200,500]); playSystemTone(1200, 300); 
                } 
                else { currentBearing = calcBearing(lat, lon, target.lat, target.lng); }
            }

            if (isEcoMode && (now - lastGpsProcessTime < 3000)) return; 

            if (isTransportMode && lastGpsCoordsForTransport) {
                let speedMs = spd || 0;
                if (speedMs > 1.1) { 
                    let gpsH = pos.coords.heading;
                    if (gpsH === null || isNaN(gpsH)) {
                        gpsH = calcBearing(lastGpsCoordsForTransport.lat, lastGpsCoordsForTransport.lon, lat, lon);
                    }
                    let fakeAlpha = (360 - gpsH) % 360;
                    handleOrientation({ alpha: fakeAlpha, beta: 0, isGpsSimulated: true });
                }
            }
            lastGpsCoordsForTransport = { lat, lon };

            lastGoodGPS = { lat, lon };
            
            let speedKmH = spd ? (spd * 3.6).toFixed(1) : "0.0";
            let speedEl = document.getElementById('speed-val'); if(speedEl) speedEl.innerText = `ШВИД: ${speedKmH} км/г`;
            
            let coordsEl = document.getElementById('tc-coords-small'); if(coordsEl) coordsEl.innerHTML = `LAT: ${lat.toFixed(5)}<br>LON: ${lon.toFixed(5)}`;
            let accEl = document.getElementById('tc-acc'); if(accEl) accEl.innerText = `ТОЧН: ${Math.round(acc)}м`;

            tracePoints.push([lat, lon]);
            if(tracePoints.length > 200) tracePoints.shift(); 
            if(map) {
                if(traceLineLayer) map.removeLayer(traceLineLayer);
                traceLineLayer = L.polyline(tracePoints, { color: '#0cf', weight: 4, className: 'map-trace' }).addTo(map);
            }
            
            updateSunPosition(lat, lon);

            if (firstFix && map) { map.setView([lat, lon], 18); firstFix = false; }
            if (isMapFollowing && !firstFix && map) map.panTo([lat, lon]);

            if(!userMarker && map && typeof L !== 'undefined') {
                userMarker = L.marker([lat, lon], { zIndexOffset: 1000, icon: L.divIcon({ className: 'u-icon', html: `<div id="user-tri"></div>`, iconSize: [16, 35], iconAnchor: [8, 35] }) }).addTo(map);
            } else if(userMarker) { userMarker.setLatLng([lat, lon]); }

            if(isWalkCalibrating && walkStartPoint && map) {
                let d = map.distance([walkStartPoint.lat, walkStartPoint.lon], [lat, lon]);
                let calBtn = document.getElementById('btn-cal-walk'); if(calBtn) calBtn.innerText = `ПРОЙДЕНО: ${Math.round(d)} / 15м`;
                if(d >= 15) {
                    compassOffset = (calcBearing(walkStartPoint.lat, walkStartPoint.lon, lat, lon) - hardwareHeading + 360) % 360;
                    isWalkCalibrating = false;
                    if(calBtn) { calBtn.innerText = "КАЛІБР: ГОТОВО"; calBtn.style.color = "#4ade80"; }
                    if(navigator.vibrate) navigator.vibrate([200, 100, 200]); playSystemTone(800, 200);
                    setTimeout(() => { if(calBtn) { calBtn.innerText = "КАЛІБРУВАТИ ПРОХОДОМ (15м)"; calBtn.style.color = "#fff"; } }, 5000);
                }
            }
        }, err => {
            let stat = document.getElementById('gps-status');
            if(stat) { stat.innerText = "❌ GPS ВТРАЧЕНО (OFFLINE)"; stat.style.color = "#f33"; }
            if(!isSignalLost) { 
                if(navigator.vibrate) navigator.vibrate([500, 200, 500, 200, 1000]); 
                playSystemTone(300, 500); 
                isSignalLost = true; 
            }
        }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }); 
    }
}

function handleOrientation(e) {
    if (isTransportMode && !e.isGpsSimulated) return;

    let hw = null;

    if (e.webkitCompassHeading !== undefined) {
        hw = e.webkitCompassHeading;
    } else {
        if (e.type === 'deviceorientationabsolute' || e.absolute === true) {
            hasAbsoluteOrientation = true;
        }
        if (e.type === 'deviceorientation' && hasAbsoluteOrientation) {
            return;
        }
        if (e.alpha !== null) {
            hw = 360 - e.alpha; 
        } else {
            return;
        }
    }
    
    hardwareHeading = hw;
    let trueH = (hardwareHeading + compassOffset) % 360;
    if (trueH < 0) trueH += 360;
    
    if (isFirstCompassUpdate) {
        currentDisplayAngle = trueH;
        isFirstCompassUpdate = false;
    } else {
        let currentMod = ((currentDisplayAngle % 360) + 360) % 360;
        let delta = trueH - currentMod;
        
        if (delta > 180) delta -= 360;
        else if (delta < -180) delta += 360;
        
        currentDisplayAngle += delta * 0.08; 
    }
    
    let displayDeg = Math.round(((currentDisplayAngle % 360) + 360) % 360);
    
    if (!isEcoMode) {
        let ring = document.getElementById('tc-ring'); let deg = document.getElementById('tc-deg');
        if(ring) ring.style.transform = `rotate(${-currentDisplayAngle}deg)`;
        if(deg) deg.innerText = displayDeg + "°"; 
        
        let tri = document.getElementById('user-tri'); if(tri) tri.style.transform = `rotate(${currentDisplayAngle}deg)`;

        let pitch = e.beta || 0; let clinoBar = document.getElementById('clino-bar');
        if(clinoBar) { let boundedPitch = Math.max(-90, Math.min(90, pitch)); clinoBar.style.bottom = (100 - (((boundedPitch + 90) / 180) * 100)) + '%'; }
    }

    if (currentBearing !== null) {
        let relAngle = currentBearing - currentDisplayAngle;
        let relMod = (((currentBearing - displayDeg) % 360) + 360) % 360;

        if (!isEcoMode) {
            let arr = document.getElementById('tc-arrow');
            if (arr) { arr.style.display = 'block'; arr.style.transform = `rotate(${relAngle}deg)`; }
        }

        if (isEcoMode && isEcoPeeking) {
            document.querySelectorAll('.eco-edge').forEach(el => el.style.opacity = '0');
            if (relMod >= 315 || relMod < 45) document.getElementById('eco-top').style.opacity = '1';
            else if (relMod >= 45 && relMod < 135) document.getElementById('eco-right').style.opacity = '1';
            else if (relMod >= 135 && relMod < 225) document.getElementById('eco-bottom').style.opacity = '1';
            else if (relMod >= 225 && relMod < 315) document.getElementById('eco-left').style.opacity = '1';
        }

        if (guideMode && !isSignalLost) {
            const timeNow = Date.now();
            let absDiff = Math.abs((((currentBearing - displayDeg) % 360) + 360) % 360);
            if (absDiff > 180) absDiff = 360 - absDiff;

            if (guideType === 'corridor') {
                if (absDiff <= 15) { if (timeNow - lastVibroTime > 30000) { if (navigator.vibrate) navigator.vibrate([40, 100, 40]); if(navAudioEnabled) playNavTone(800, 150); lastVibroTime = timeNow; } } 
                else { if (timeNow - lastWarnTime > 5000) { if (navigator.vibrate) navigator.vibrate([150, 50, 150]); if(navAudioEnabled) playNavTone(300, 300); lastWarnTime = timeNow; } }
            } else {
                if (absDiff <= 7) { if (timeNow - lastVibroTime > 200) { if (navigator.vibrate) navigator.vibrate(100); if(navAudioEnabled) playNavTone(1200, 50); lastVibroTime = timeNow; } } 
                else if (absDiff <= 20) { if (timeNow - lastVibroTime > 600) { if (navigator.vibrate) navigator.vibrate(50); if(navAudioEnabled) playNavTone(800, 50); lastVibroTime = timeNow; } } 
                else if (absDiff <= 45) { if (timeNow - lastVibroTime > 1500) { if (navigator.vibrate) navigator.vibrate(30); if(navAudioEnabled) playNavTone(400, 50); lastVibroTime = timeNow; } }
            }
        }
    } else {
        if (!isEcoMode) {
            let relAngle = 0 - currentDisplayAngle;
            let arr = document.getElementById('tc-arrow');
            if (arr) { arr.style.display = 'block'; arr.style.transform = `rotate(${relAngle}deg)`; }
        }
        if (isEcoMode) document.querySelectorAll('.eco-edge').forEach(el => el.style.opacity = '0');
    }
}

document.getElementById('btn-guide-type').onclick = () => { guideType = guideType === 'corridor' ? 'search' : 'corridor'; let btn = document.getElementById('btn-guide-type'); btn.innerText = guideType === 'corridor' ? "РЕЖИМ: КОРИДОР" : "РЕЖИМ: ПОШУК"; btn.style.color = guideType === 'search' ? "#f1c40f" : "#ccc"; };
document.getElementById('btn-guide-audio').onclick = async () => { await initSensors(); navAudioEnabled = !navAudioEnabled; let btn = document.getElementById('btn-guide-audio'); btn.innerText = navAudioEnabled ? "ЗВУК: УВІМК" : "ЗВУК: ВИМК"; btn.style.color = navAudioEnabled ? "#4ade80" : "#ccc"; };
document.getElementById('btn-guide').onclick = async () => { await initSensors(); guideMode = !guideMode; let btn = document.getElementById('btn-guide'); btn.innerText = guideMode ? "ПОВОДИР: УВІМК" : "ПОВОДИР: ВИМК"; btn.style.color = guideMode ? "#4ade80" : "#558"; };

function toggleEcoMode(state) { isEcoMode = state; const overlay = document.getElementById('eco-overlay'); if (state) { overlay.style.display = 'block'; if(navigator.vibrate) navigator.vibrate(100); playSystemTone(500, 100); } else { overlay.style.display = 'none'; isEcoPeeking = false; } }
function peekEco() { if (!isEcoMode || isEcoPeeking) return; isEcoPeeking = true; document.getElementById('eco-content').style.opacity = '1'; document.getElementById('eco-touch-area').style.color = '#000'; if(navigator.vibrate) navigator.vibrate(50); playSystemTone(800, 50); clearTimeout(ecoPeekTimer); ecoPeekTimer = setTimeout(() => { document.getElementById('eco-content').style.opacity = '0'; document.querySelectorAll('.eco-edge').forEach(el => el.style.opacity = '0'); document.getElementById('eco-touch-area').style.color = '#222'; isEcoPeeking = false; }, 3000); }

// ==========================================
// 7. ОПТИКА, ЗУМ ТА ШІ
// ==========================================
let prevFrame = null;
function processCamera() {
    const video = document.getElementById('v-stream'); const uiCanvas = document.getElementById('ui-canvas');
    if(!video || !uiCanvas) return; const uiCtx = uiCanvas.getContext('2d');
    if (video.srcObject && !isScanningQR) {
        try {
            const procCanvas = document.getElementById('proc-canvas'); const ctx = procCanvas.getContext('2d', {willReadFrequently:true});
            procCanvas.width = 128; procCanvas.height = 96; ctx.drawImage(video, 0, 0, 128, 96);
            let currFrame = ctx.getImageData(0,0,128,96).data;

            if (isScanning && prevFrame) {
                let diff = 0; for (let i=0; i<currFrame.length; i+=4) diff += Math.abs(currFrame[i]-prevFrame[i]);
                let lvl = (diff / 3133440) * 1000;
                if (lvl > 20) {
                    if(navigator.vibrate) navigator.vibrate(50);
                    playSystemTone(900, 100);
                    let scanBtn = document.getElementById('btn-scan');
                    if(scanBtn) { scanBtn.style.backgroundColor = "#f00"; setTimeout(()=>{ scanBtn.style.backgroundColor = "#111"; }, 150); }
                }
            }
            prevFrame = currFrame;

            if (!isAiLive && !irMode) {
                uiCtx.clearRect(0, 0, uiCanvas.width, uiCanvas.height);
                let cx = uiCanvas.width / 2; let cy = uiCanvas.height / 2;
                uiCtx.strokeStyle = "rgba(0, 255, 0, 0.7)"; uiCtx.lineWidth = 1;
                uiCtx.beginPath(); uiCtx.moveTo(cx - 20, cy); uiCtx.lineTo(cx + 20, cy); uiCtx.moveTo(cx, cy - 20); uiCtx.lineTo(cx, cy + 20); uiCtx.stroke();
                uiCtx.beginPath(); uiCtx.arc(cx, cy, 5, 0, 2 * Math.PI); uiCtx.stroke();
            }

            if (irMode && !isAiLive) { 
                uiCtx.clearRect(0, 0, uiCanvas.width, uiCanvas.height); 
                let threshold = parseInt(document.getElementById('ir-sens') ? document.getElementById('ir-sens').value : 200);
                for (let i = 0; i < currFrame.length; i += 8) {
                    if (currFrame[i] > threshold && currFrame[i+2] > threshold) {
                        uiCtx.strokeStyle = "red"; uiCtx.lineWidth = 2; uiCtx.strokeRect((i/4 % 128) * (uiCanvas.width/128), (i/4 / 128) * (uiCanvas.height/96), 10, 10);
                    }
                }
            }
        } catch(e) {}
    }
    requestAnimationFrame(processCamera);
}

function getSunAzimuth(lat, lon, date) {
    let rad = Math.PI / 180; let start = new Date(date.getFullYear(), 0, 0);
    let diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
    let dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    let b = (360 / 365) * (dayOfYear - 81) * rad;
    let eot = 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);
    let lst = date.getUTCHours() + (date.getUTCMinutes() / 60) + (lon / 15) + (eot / 60);
    let ha = (lst - 12) * 15 * rad; let dec = 23.45 * Math.sin((360 / 365) * (dayOfYear - 81) * rad) * rad; 
    let latRad = lat * rad;
    let sinAlt = Math.sin(dec) * Math.sin(latRad) + Math.cos(dec) * Math.cos(latRad) * Math.cos(ha);
    let alt = Math.asin(sinAlt);
    let cosAz = (Math.sin(dec) - Math.sin(latRad) * sinAlt) / (Math.cos(latRad) * Math.cos(alt));
    let az = Math.acos(Math.max(-1, Math.min(1, cosAz))) / rad;
    if (ha > 0) az = 360 - az;
    return az;
}

document.getElementById('btn-cal-sun').onclick = () => {
    if(!lastGoodGPS) return alert("Потрібні координати GPS!");
    let az = getSunAzimuth(lastGoodGPS.lat, lastGoodGPS.lon, new Date());
    compassOffset = (az - hardwareHeading + 360) % 360; if(navigator.vibrate) navigator.vibrate([200, 100, 200]); playSystemTone(800, 100);
};

document.getElementById('btn-cal-star').onclick = () => {
    compassOffset = (0 - hardwareHeading + 360) % 360; if(navigator.vibrate) navigator.vibrate([200, 100, 200]); playSystemTone(800, 100);
};

document.getElementById('btn-cam').onclick = async () => {
    await initSensors(); let btn = document.getElementById('btn-cam'); const video = document.getElementById('v-stream'); const uiCanvas = document.getElementById('ui-canvas');
    if (video.srcObject) { turnOffCamera(); } else { 
        btn.innerText = "ЗАПУСК...";
        try {
            const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}});
            video.srcObject = stream;
            currentVideoTrack = stream.getVideoTracks()[0];
            setTimeout(() => {
                const capabilities = currentVideoTrack.getCapabilities();
                if (capabilities.zoom) {
                    const zoomSlider = document.getElementById('cam-zoom');
                    if(zoomSlider) {
                        zoomSlider.min = capabilities.zoom.min; zoomSlider.max = capabilities.zoom.max;
                        zoomSlider.step = capabilities.zoom.step; zoomSlider.value = currentVideoTrack.getSettings().zoom || 1;
                        zoomSlider.oninput = (e) => { currentVideoTrack.applyConstraints({advanced: [{zoom: e.target.value}]}); };
                    }
                }
            }, 500);
            video.onloadedmetadata = () => { if(uiCanvas) { uiCanvas.width = video.clientWidth; uiCanvas.height = video.clientHeight; } };
            btn.innerText = "⏹ ВИМКНУТИ КАМЕРУ"; btn.style.color = "#f33";
        } catch(e) { btn.innerText = "❌ КАМЕРА БЛОКОВАНА"; vibrateError(); setTimeout(() => { btn.innerText = "🔴 КАМЕРА"; }, 3000); }
    }
};

document.getElementById('btn-ir').onclick = () => { irMode = !irMode; let btn = document.getElementById('btn-ir'); const video = document.getElementById('v-stream'); btn.innerText = irMode ? "ІЧ-ФІЛЬТР: УВІМК" : "ІЧ-ФІЛЬТР: ВИМК"; btn.style.color = irMode ? "#f33" : "#fff"; if(video) video.style.filter = irMode ? "contrast(3) brightness(0.4) grayscale(1)" : "none"; };
document.getElementById('btn-scan').onclick = async () => { await initSensors(); isScanning = !isScanning; let btn = document.getElementById('btn-scan'); btn.innerText = isScanning ? "ДЕТЕКТОР РУХУ: УВІМК" : "ДЕТЕКТОР РУХУ: ВИМК"; btn.style.color = isScanning ? "#f33" : "#fff"; };

document.getElementById('btn-ai-cam').onclick = async () => {
    const video = document.getElementById('v-stream'); const uiCanvas = document.getElementById('ui-canvas');
    if (!video || !video.srcObject) { vibrateError(); return alert("Спочатку увімкніть камеру!"); }
    let btn = document.getElementById('btn-ai-cam'); let stats = document.getElementById('ai-stats');
    if (!aiModel) { 
        stats.innerText = "ЗАВАНТАЖЕННЯ ШІ...";
        try { aiModel = await cocoSsd.load(); } catch (e) { stats.innerText = "❌ ПОМИЛКА"; vibrateError(); return; }
    }
    isAiLive = !isAiLive; btn.style.color = isAiLive ? "#4ade80" : "#fff";
    if(isAiLive) { detectAI(); } else { stats.innerText = "ШІ ВИМКНЕНО"; if(uiCanvas) uiCanvas.getContext('2d').clearRect(0, 0, uiCanvas.width, uiCanvas.height); }
};

async function detectAI() {
    const video = document.getElementById('v-stream'); const uiCanvas = document.getElementById('ui-canvas');
    if(!isAiLive || !aiModel || !video || !video.srcObject) return; const uiCtx = uiCanvas.getContext('2d');
    try {
        const predictions = await aiModel.detect(video);
        if(uiCtx) uiCtx.clearRect(0, 0, uiCanvas.width, uiCanvas.height);
        let threshold = (document.getElementById('ai-sens') ? document.getElementById('ai-sens').value : 50) / 100;
        let focal = (document.getElementById('ai-focal') ? document.getElementById('ai-focal').value : 1.0);
        let pCount = 0, vCount = 0;
        predictions.forEach(p => {
            if(p.score < threshold) return;
            if(p.class === 'person') pCount++;
            if(['car','truck','bus', 'motorcycle'].includes(p.class)) vCount++;
            if(p.class === 'person' || ['car','truck','bus', 'motorcycle'].includes(p.class)) {
                const [x,y,w,h] = p.bbox; let realH = REAL_HEIGHTS[p.class] || 1.7; let dist = (realH * (video.videoHeight * focal)) / h;
                let scaleX = uiCanvas.width / video.videoWidth; let scaleY = uiCanvas.height / video.videoHeight;
                if(uiCtx) {
                    uiCtx.strokeStyle = p.class === 'person' ? "#0f0" : "#f33"; uiCtx.lineWidth = 3;
                    uiCtx.strokeRect(x * scaleX, y * scaleY, w * scaleX, h * scaleY);
                    uiCtx.fillStyle = p.class === 'person' ? "#0f0" : "#f33"; uiCtx.font = "bold 16px monospace";
                    uiCtx.fillText(`${p.class} ~${Math.round(dist)}м`, x * scaleX, (y * scaleY) - 8);
                }
            }
        });
        document.getElementById('ai-stats').innerHTML = `ЛЮДИ: ${pCount} | ТЕХНІКА: ${vCount}`;
    } catch(e) {}
    if(isAiLive) requestAnimationFrame(detectAI);
}

// ==========================================
// 8. ЩИТ ТА МАТЕМАТИКА
// ==========================================
document.getElementById('btn-shield').onclick = async () => { 
    await initSensors(); isShielded = !isShielded; 
    let btn = document.getElementById('btn-shield');
    btn.style.backgroundColor = isShielded ? "#500" : "#111"; btn.style.color = isShielded ? "#fff" : "#f44"; 
    btn.innerText = isShielded ? "ОХОРОНА АКТИВНА" : "АКТИВУВАТИ ЗАХИСТ";
};

document.getElementById('btn-shield-sound').onclick = async () => { await initSensors(); shieldSound = !shieldSound; let btn = document.getElementById('btn-shield-sound'); btn.innerText = shieldSound ? "ЗВУК СИРЕНИ: УВІМК" : "ЗВУК СИРЕНИ: ВИМК"; btn.style.color = shieldSound ? "#4ade80" : "#fff"; };

window.addEventListener('devicemotion', e => {
    if (isShielded && e.accelerationIncludingGravity) {
        let a = e.accelerationIncludingGravity; let f = Math.sqrt(a.x**2 + a.y**2 + a.z**2);
        if (Math.abs(f - 9.8) > 3) { if(navigator.vibrate) navigator.vibrate([500, 200, 500]); if(shieldSound) playSystemTone(1000, 1000); }
    }
});

function calcBearing(lat1, lon1, lat2, lon2) {
    const dL = (lon2 - lon1) * Math.PI / 180; const l1 = lat1 * Math.PI / 180; const l2 = lat2 * Math.PI / 180;
    const y = Math.sin(dL) * Math.cos(l2); const x = Math.cos(l1) * Math.sin(l2) - Math.sin(l1) * Math.cos(l2) * Math.cos(dL);
    return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}
