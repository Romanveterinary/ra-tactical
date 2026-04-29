// ==========================================
// 0. СИСТЕМА БЕЗПЕКИ ТА АВТОРИЗАЦІЯ
// ==========================================
const SECRET_PIN = "4567"; 
let pinAttempts = 0;

async function checkPin() {
    let input = document.getElementById('pin-input').value;
    if (input === SECRET_PIN) {
        document.getElementById('pin-screen').style.display = 'none';
        
        // КРИТИЧНО ДЛЯ IPHONE: Активація Аудіо та спроба розблокувати Вібро
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
        if (pinAttempts >= 3) document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:40vh;'>404 NOT FOUND</h1>";
    }
}

// ==========================================
// 1. ГЛОБАЛЬНІ ЗМІННІ
// ==========================================
let audioCtx = null, osc = null, gain = null;
let lastGoodGPS = null, watchId = null;
let hardwareHeading = 0, compassOffset = 0, currentBearing = null; 
let previousTrueH = null, currentDisplayAngle = 0;
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
let lastGpsProcessTime = 0; 
let isEcoMode = false, ecoPeekTimer = null, isEcoPeeking = false;

const REAL_HEIGHTS = { 'person': 1.7, 'car': 1.5, 'truck': 3.0, 'bus': 3.0, 'motorcycle': 1.2 };

// ==========================================
// 2. ІНІЦІАЛІЗАЦІЯ ТА ЗВУК
// ==========================================
function initSystem() {
    checkStealthMode(); 
    try{initMap();}catch(e){} 
    try{initGPS();}catch(e){} 
    try{processCamera();}catch(e){}
    setInterval(traceVanishing, 3000);
}

function checkStealthMode() {
    const statusEl = document.getElementById('stealth-status');
    if(!statusEl) return;
    if (navigator.onLine) { statusEl.innerText = "⚠️ РАДІОСЛІД"; statusEl.className = "stealth-danger"; } 
    else { statusEl.innerText = "[ СТЕЛС АКТИВНО ]"; statusEl.className = "stealth-safe"; }
}
setInterval(checkStealthMode, 1000); 

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
    if (!audioCtx) return;
    try {
        let o = audioCtx.createOscillator(); let g = audioCtx.createGain();
        o.connect(g); g.connect(audioCtx.destination); o.type = 'sine'; o.frequency.value = freq; g.gain.value = 0.5;
        o.start(); g.gain.setTargetAtTime(0, audioCtx.currentTime + duration/1000, 0.05); setTimeout(() => o.stop(), duration + 100);
    } catch(e) {}
}

function vibrateDevice(pattern) {
    if (navigator.vibrate) {
        navigator.vibrate(pattern);
    }
    // Для Айфона завжди дублюємо звуком, бо вібро може бути вимкнене системою
    if (pattern === 50) playNavTone(800, 50);
    else playNavTone(1000, 200);
}

// ==========================================
// 3. УПРАВЛІННЯ (МАПА, GPS, КОМПАС) - БЕЗ ЗМІН ЛОГІКИ
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

        map.on('contextmenu dblclick', (e) => {
            if(routePoints.length >= 10) return alert("Максимум 10 точок!");
            vibrateDevice(50);
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
        document.getElementById('tc-arrow').style.display = 'none';
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

// GPS ТА КОМПАС
function initGPS() {
    if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(pos => {
            const now = Date.now();
            if (isEcoMode && (now - lastGpsProcessTime < 3000)) return;
            lastGpsProcessTime = now;
            const { latitude: lat, longitude: lon, speed: spd, accuracy: acc } = pos.coords;
            lastGoodGPS = { lat, lon };
            let speedKmH = spd ? (spd * 3.6).toFixed(1) : "0.0";
            document.getElementById('speed-val').innerText = `ШВИД: ${speedKmH} км/г`;
            document.getElementById('tc-coords-small').innerHTML = `LAT: ${lat.toFixed(5)}<br>LON: ${lon.toFixed(5)}`;
            document.getElementById('tc-acc').innerText = `ТОЧН: ${Math.round(acc)}м`;

            tracePoints.push([lat, lon]);
            if(tracePoints.length > 50) tracePoints.shift();
            if(map) {
                if(traceLineLayer) map.removeLayer(traceLineLayer);
                traceLineLayer = L.polyline(tracePoints, { color: '#0cf', weight: 4, className: 'map-trace' }).addTo(map);
            }
            if (firstFix && map) { map.setView([lat, lon], 18); firstFix = false; }
            if (isMapFollowing && !firstFix && map) map.panTo([lat, lon]);
            if(!userMarker && map) userMarker = L.marker([lat, lon], { zIndexOffset: 1000, icon: L.divIcon({ className: 'u-icon', html: `<div id="user-tri"></div>`, iconSize: [16, 35], iconAnchor: [8, 35] }) }).addTo(map);
            else if(userMarker) userMarker.setLatLng([lat, lon]);

            if(routePoints.length > 0 && map) {
                let target = routePoints[0]; let d = map.distance([lat, lon], target);
                document.getElementById('tc-dist').innerText = Math.round(d) + " м";
                if(d <= 20) { routePoints.shift(); updateRoute(); vibrateDevice([500,200,500]); } 
                else { currentBearing = calcBearing(lat, lon, target.lat, target.lng); }
            }
        }, null, { enableHighAccuracy: true });
    }
}

function handleOrientation(e) {
    let hw = e.webkitCompassHeading || (360 - e.alpha);
    if (!hw) return;
    hardwareHeading = hw;
    let trueH = (hardwareHeading + compassOffset) % 360;
    if (trueH < 0) trueH += 360;
    if (previousTrueH === null) currentDisplayAngle = trueH; 
    else {
        let delta = trueH - previousTrueH;
        if (delta > 180) delta -= 360; else if (delta < -180) delta += 360;
        currentDisplayAngle += delta;
    }
    previousTrueH = trueH;
    document.getElementById('tc-ring').style.transform = `rotate(${-currentDisplayAngle}deg)`;
    document.getElementById('tc-deg').innerText = Math.round(trueH) + "°"; 
    document.getElementById('user-tri').style.transform = `rotate(${currentDisplayAngle}deg)`;
    if (currentBearing !== null) {
        let relAngle = (currentBearing - trueH + 360) % 360;
        document.getElementById('tc-arrow').style.display = 'block';
        document.getElementById('tc-arrow').style.transform = `rotate(${relAngle}deg)`;
    }
}

// ==========================================
// 4. ОПТИКА ТА ШІ - БЕЗ ЗМІН
// ==========================================
document.getElementById('btn-cam').onclick = async () => {
    await initSensors(); let btn = document.getElementById('btn-cam'); const video = document.getElementById('v-stream');
    if (video.srcObject) { turnOffCamera(); } else { 
        try {
            const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}});
            video.srcObject = stream;
            currentVideoTrack = stream.getVideoTracks()[0];
            btn.innerText = "⏹ ВИМКНУТИ КАМЕРУ"; btn.style.color = "#f33";
        } catch(e) { alert("Камера заблокована"); }
    }
};

document.getElementById('btn-ai-cam').onclick = async () => {
    if (!aiModel) { 
        document.getElementById('ai-stats').innerText = "ЗАВАНТАЖЕННЯ...";
        aiModel = await cocoSsd.load();
    }
    isAiLive = !isAiLive;
    if(isAiLive) detectAI();
};

async function detectAI() {
    const video = document.getElementById('v-stream'); const uiCanvas = document.getElementById('ui-canvas');
    if(!isAiLive || !aiModel || !video.srcObject) return;
    const predictions = await aiModel.detect(video);
    const uiCtx = uiCanvas.getContext('2d'); uiCtx.clearRect(0, 0, uiCanvas.width, uiCanvas.height);
    let threshold = document.getElementById('ai-sens').value / 100;
    predictions.forEach(p => {
        if(p.score < threshold) return;
        const [x,y,w,h] = p.bbox;
        uiCtx.strokeStyle = "#0f0"; uiCtx.strokeRect(x, y, w, h);
    });
    requestAnimationFrame(detectAI);
}

document.getElementById('btn-scan').onclick = async () => { await initSensors(); isScanning = !isScanning; };

// ДЕТЕКТОР РУХУ
let prevFrame = null;
function processCamera() {
    const video = document.getElementById('v-stream');
    if (video.srcObject && isScanning) {
        const procCanvas = document.getElementById('proc-canvas'); const ctx = procCanvas.getContext('2d');
        ctx.drawImage(video, 0, 0, 128, 96);
        let currFrame = ctx.getImageData(0,0,128,96).data;
        if (prevFrame) {
            let diff = 0; for (let i=0; i<currFrame.length; i+=4) diff += Math.abs(currFrame[i]-prevFrame[i]);
            if ((diff / 3000000) * 1000 > 20) {
                vibrateDevice(100); // Вібро + Звук
                document.getElementById('btn-scan').style.backgroundColor = "#f00";
                setTimeout(()=>{ document.getElementById('btn-scan').style.backgroundColor = "#111"; }, 150);
            }
        }
        prevFrame = currFrame;
    }
    requestAnimationFrame(processCamera);
}

function calcBearing(lat1, lon1, lat2, lon2) {
    const dL = (lon2 - lon1) * Math.PI / 180; const l1 = lat1 * Math.PI / 180; const l2 = lat2 * Math.PI / 180;
    const y = Math.sin(dL) * Math.cos(l2); const x = Math.cos(l1) * Math.sin(l2) - Math.sin(l1) * Math.cos(l2) * Math.cos(dL);
    return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}
