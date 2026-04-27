// ==========================================
// 0. PWA ОФЛАЙН РЕЖИМ
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => { 
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('[SW] Service Worker OK v8.9', reg.scope))
            .catch(e => console.error('[SW] ПОМИЛКА:', e)); 
    });
}

// ==========================================
// 1. ГЛОБАЛЬНІ ЗМІННІ
// ==========================================
let audioCtx = null, osc = null, gain = null;
let currentPoint = null, lastGoodGPS = null;
let hardwareHeading = 0, compassOffset = 0, currentBearing = null; 

let isScanning = false, isShielded = false, shieldSound = false, irMode = false;
let isMetalActive = false, magSensor = null, baseField = null;
let aiModel = null, isAiLive = false;

let map = null, userMarker = null;
let routePoints = [], routeMarkers = [], routeLine = null;
let isWalkCalibrating = false, walkStartPoint = null;
let topoLayer = null, darkLayer = null, currentLayer = 'topo';

let guideMode = false, guideType = 'search', navAudioEnabled = false;
let lastVibroTime = 0, lastWarnTime = 0, lastGpsPing = 0;
let isSignalLost = true, firstFix = true;

// Змінні ЕКО-режиму
let isEcoMode = false;
let ecoPeekTimer = null;
let isEcoPeeking = false;

const REAL_HEIGHTS = { 'person': 1.7, 'car': 1.5, 'truck': 3.0, 'bus': 3.0, 'motorcycle': 1.2 };

// ==========================================
// 2. СТЕЛС-МОНІТОР ТА ПРОТОКОЛ ЗНИЩЕННЯ
// ==========================================
function checkStealthMode() {
    const statusEl = document.getElementById('stealth-status');
    if(!statusEl) return;
    if (navigator.onLine) {
        statusEl.innerText = "⚠️ РАДІОСЛІД"; statusEl.className = "stealth-danger";
    } else {
        statusEl.innerText = "[ СТЕЛС АКТИВНО ]"; statusEl.className = "stealth-safe";
    }
}
setInterval(checkStealthMode, 1000); 

document.addEventListener("visibilitychange", () => {
    if (document.hidden) turnOffCamera();
});

function vibrateError() {
    if (navigator.vibrate) navigator.vibrate([300, 100, 300]);
}

// НОВЕ: ПРОТОКОЛ ЗНИЩЕННЯ ДАНИХ
function triggerDestroyProtocol() {
    if (confirm("УВАГА! ЗНИЩИТИ ВЕСЬ МАРШРУТ ТА ДАНІ ПРОГРАМИ?")) {
        // 1. Зачистка масивів
        routePoints = []; 
        // 2. Оновлення мапи
        updateRoute();
        // 3. Зачистка кешу браузера
        localStorage.removeItem('savedRoute');
        // 4. Очищення змінних
        currentBearing = null;
        document.getElementById('tc-dist').innerText = "--- м";
        document.getElementById('eco-dist').innerText = "--- м";
        document.getElementById('tc-arrow').style.display = 'none';
        
        // 5. Візуальне і тактильне підтвердження
        closeNav();
        if(navigator.vibrate) navigator.vibrate([500, 100, 500, 100, 1000]); // Довга вібрація знищення
        alert("ДАНІ УСПІШНО ЗНИЩЕНО.");
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
    if (id !== 'mod-eye') turnOffCamera();
    if (id === 'mod-map' && map) setTimeout(() => map.invalidateSize(), 200);
}

function turnOffCamera() {
    try {
        const v = document.getElementById('v-stream');
        if (v && v.srcObject) { v.srcObject.getTracks().forEach(t => t.stop()); v.srcObject = null; }
    } catch(e) {}
    isAiLive = false; isScanning = false;
    let btnCam = document.getElementById('btn-cam'); if(btnCam) btnCam.innerText = "🔴 КАМЕРА";
    let btnAiCam = document.getElementById('btn-ai-cam'); if(btnAiCam) { btnAiCam.innerText = "🤖 ШІ SCAN"; btnAiCam.style.color = "#fff"; }
    let btnScan = document.getElementById('btn-scan'); if(btnScan) { btnScan.innerText = "📉 СЕЙСМІКА"; btnScan.style.color = "#fff"; }
    let aiStats = document.getElementById('ai-stats'); if(aiStats) aiStats.innerText = "ШІ НЕ АКТИВНИЙ";
    const canvas = document.getElementById('ui-canvas');
    if(canvas) canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height);
}

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
    if (!audioCtx || (!navAudioEnabled && !shieldSound)) return;
    try {
        let o = audioCtx.createOscillator(); let g = audioCtx.createGain();
        o.connect(g); g.connect(audioCtx.destination);
        o.type = 'sine'; o.frequency.value = freq; g.gain.value = 0.5;
        o.start(); g.gain.setTargetAtTime(0, audioCtx.currentTime + duration/1000, 0.05);
        setTimeout(() => o.stop(), duration + 100);
    } catch(e) {}
}

// ==========================================
// 4. МАПА ТА КЕРУВАННЯ МАРШРУТОМ
// ==========================================
function initMap() {
    if (typeof L === 'undefined') return;
    try {
        topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { maxZoom: 17 });
        darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 });
        map = L.map('map-container', { zoomControl: false, doubleClickZoom: false }).setView([49.0, 31.0], 6);
        topoLayer.addTo(map);

        map.on('dblclick', (e) => {
            if(routePoints.length >= 10) return alert("Максимум 10 точок!");
            if(confirm("Додати точку маршруту?")) { routePoints.push(e.latlng); updateRoute(); }
        });
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
        document.getElementById('tc-arrow').style.display = 'none';
        currentBearing = null;
        localStorage.removeItem('savedRoute');
        return;
    }

    routePoints.forEach((p, i) => {
        let m = L.circleMarker(p, { color: i === 0 ? '#0f0' : '#f0f', radius: 8, fillOpacity: 1 }).addTo(map);
        routeMarkers.push(m);
    });

    if(routePoints.length > 1) { routeLine = L.polyline(routePoints, { color: '#f0f', weight: 3, dashArray: '5, 10' }).addTo(map); }
    document.getElementById('route-info').innerText = `ЦІЛЬ: ТОЧКА 1 З ${routePoints.length}`;
    localStorage.setItem('savedRoute', JSON.stringify(routePoints));
}

document.getElementById('btn-layer-toggle').onclick = () => {
    if(!map || !topoLayer || !darkLayer) return;
    if(currentLayer === 'topo') { map.removeLayer(topoLayer); darkLayer.addTo(map); currentLayer = 'dark'; }
    else { map.removeLayer(darkLayer); topoLayer.addTo(map); currentLayer = 'topo'; }
};

document.getElementById('btn-del-last').onclick = () => { if (routePoints.length > 0) { routePoints.pop(); updateRoute(); } };
document.getElementById('btn-clear-map').onclick = () => { if (confirm("Видалити весь маршрут?")) { routePoints = []; updateRoute(); } };

document.getElementById('btn-cache-map').onclick = async () => {
    if (!map) return;
    if (!lastGoodGPS) return alert("Немає GPS!");
    let btn = document.getElementById('btn-cache-map');
    btn.innerText = "ЗАВАНТАЖЕННЯ..."; btn.style.color = "#f33";

    try {
        const c = [lastGoodGPS.lat, lastGoodGPS.lon];
        const offset = 0.012; 
        const pts = [ [c[0]+offset, c[1]+offset], [c[0]-offset, c[1]-offset], [c[0]+offset, c[1]-offset], [c[0]-offset, c[1]+offset] ];
        let origZoom = map.getZoom(); let origCenter = map.getCenter();

        for (let p of pts) {
            map.setView(p, 15, {animate: false});
            await new Promise(r => setTimeout(r, 1500)); 
        }
        map.setView(origCenter, origZoom, {animate: false}); 
        
        btn.innerText = "КВАДРАТ ЗАВАНТАЖЕНО"; btn.style.color = "#4ade80";
        if(navigator.vibrate) navigator.vibrate(200);
        setTimeout(() => { btn.innerText = "💾 КЕШ 2х2 км"; btn.style.color = "#fff"; }, 4000);
    } catch(e) { btn.innerText = "ПОМИЛКА КЕШУ"; btn.style.color = "#f33"; vibrateError(); }
};

// ==========================================
// 5. GPS ТА ПОВОДИР
// ==========================================
function initGPS() {
    if ('geolocation' in navigator) {
        navigator.geolocation.watchPosition(pos => {
            const { latitude: lat, longitude: lon, altitude: alt, accuracy: acc } = pos.coords;
            lastGoodGPS = { lat, lon };
            
            let coordsEl = document.getElementById('tc-coords-small');
            if(coordsEl) coordsEl.innerHTML = `LAT: ${lat.toFixed(5)}<br>LON: ${lon.toFixed(5)}`;
            let accEl = document.getElementById('tc-acc');
            if(accEl) accEl.innerText = `ТОЧН: ${Math.round(acc)}м`;

            let stat = document.getElementById('gps-status');
            if(acc > 150) {
                if(stat) { stat.innerText = "❌ GPS ЗГЛУШЕНО (>150м)"; stat.style.color = "#f33"; }
                if(!isSignalLost) {
                     if(navigator.vibrate) navigator.vibrate([500, 200, 500, 200, 1000]); 
                     isSignalLost = true;
                }
            } else {
                if(stat) { stat.innerText = "GPS: OK"; stat.style.color = "#4ade80"; }
                isSignalLost = false;
                if (guideMode && Date.now() - lastGpsPing > 3000 && !isEcoMode) { // Вимкнув пінг в ЕКО, щоб не заважав
                    if(navigator.vibrate) navigator.vibrate(30);
                    lastGpsPing = Date.now();
                }
            }

            if (firstFix && map) { map.setView([lat, lon], 18); firstFix = false; }

            if(!userMarker && map && typeof L !== 'undefined') {
                userMarker = L.marker([lat, lon], {
                    zIndexOffset: 1000,
                    icon: L.divIcon({ className: 'u-icon', html: `<div id="user-tri"></div>`, iconSize: [16, 35], iconAnchor: [8, 35] })
                }).addTo(map);
            } else if(userMarker) { userMarker.setLatLng([lat, lon]); }

            if(routePoints.length > 0 && map) {
                let target = routePoints[0];
                let d = map.distance([lat, lon], target);
                
                let distEl = document.getElementById('tc-dist');
                if(distEl) distEl.innerText = Math.round(d) + " м";
                
                // Оновлюємо дистанцію для ЕКО режиму
                let ecoDistEl = document.getElementById('eco-dist');
                if(ecoDistEl) ecoDistEl.innerText = Math.round(d) + " м";
                
                if(d <= 20) { 
                    routePoints.shift(); updateRoute(); 
                    if(navigator.vibrate) navigator.vibrate([500,200,500]); 
                } else {
                    currentBearing = calcBearing(lat, lon, target.lat, target.lng);
                }
            }

            if(isWalkCalibrating && walkStartPoint && map) {
                let d = map.distance([walkStartPoint.lat, walkStartPoint.lon], [lat, lon]);
                let calBtn = document.getElementById('btn-cal-walk');
                if(calBtn) calBtn.innerText = `ПРОЙДЕНО: ${Math.round(d)} / 15м`;
                
                if(d >= 15) {
                    compassOffset = (calcBearing(walkStartPoint.lat, walkStartPoint.lon, lat, lon) - (360 - hardwareHeading)) % 360;
                    if(compassOffset < 0) compassOffset += 360;
                    isWalkCalibrating = false;
                    if(calBtn) { calBtn.innerText = "КАЛІБР: ГОТОВО"; calBtn.style.color = "#4ade80"; }
                    let offsetInfo = document.getElementById('cal-offset-info');
                    if(offsetInfo) offsetInfo.innerText = `GPS Корекція збережена`;
                    if(navigator.vibrate) navigator.vibrate([200, 100, 200]);
                    setTimeout(() => { if(calBtn) { calBtn.innerText = "КАЛІБРУВАТИ ПРОХОДОМ (15м)"; calBtn.style.color = "#fff"; } }, 5000);
                }
            }
        }, err => {
            let stat = document.getElementById('gps-status');
            if(stat) { stat.innerText = "❌ GPS БЛОКОВАНО"; stat.style.color = "#f33"; }
        }, { enableHighAccuracy: true });
    }
}

document.getElementById('btn-guide-type').onclick = () => {
    guideType = guideType === 'corridor' ? 'search' : 'corridor';
    let btn = document.getElementById('btn-guide-type');
    btn.innerText = guideType === 'corridor' ? "РЕЖИМ: КОРИДОР" : "РЕЖИМ: ПОШУК";
    btn.style.color = guideType === 'search' ? "#f1c40f" : "#ccc";
};

document.getElementById('btn-guide-audio').onclick = async () => {
    await initSensors(); navAudioEnabled = !navAudioEnabled;
    let btn = document.getElementById('btn-guide-audio');
    btn.innerText = navAudioEnabled ? "ЗВУК: УВІМК" : "ЗВУК: ВИМК"; btn.style.color = navAudioEnabled ? "#4ade80" : "#ccc";
};

document.getElementById('btn-guide').onclick = async () => { 
    await initSensors(); guideMode = !guideMode; 
    let btn = document.getElementById('btn-guide');
    btn.innerText = guideMode ? "ПОВОДИР: УВІМК" : "ПОВОДИР: ВИМК"; btn.style.color = guideMode ? "#4ade80" : "#558";
};

// ==========================================
// 6. КОМПАС, ВІБРАЦІЯ ТА ЕКО-БЛЕКАУТ
// ==========================================

function toggleEcoMode(state) {
    isEcoMode = state;
    const overlay = document.getElementById('eco-overlay');
    if (state) {
        overlay.style.display = 'block';
        if(navigator.vibrate) navigator.vibrate(100);
    } else {
        overlay.style.display = 'none';
        isEcoPeeking = false;
    }
}

function peekEco() {
    if (!isEcoMode || isEcoPeeking) return;
    isEcoPeeking = true;
    
    // Показуємо контент
    document.getElementById('eco-content').style.opacity = '1';
    document.getElementById('eco-touch-area').style.color = '#000'; // Ховаємо текст
    if(navigator.vibrate) navigator.vibrate(50);
    
    // Ховаємо через 3 секунди
    clearTimeout(ecoPeekTimer);
    ecoPeekTimer = setTimeout(() => {
        document.getElementById('eco-content').style.opacity = '0';
        document.querySelectorAll('.eco-edge').forEach(el => el.style.opacity = '0');
        document.getElementById('eco-touch-area').style.color = '#222';
        isEcoPeeking = false;
    }, 3000);
}

window.addEventListener('deviceorientationabsolute', e => {
    hardwareHeading = e.alpha || e.webkitCompassHeading || 0;
    let trueH = (360 - hardwareHeading + compassOffset) % 360;
    
    let ring = document.getElementById('tc-ring'); let deg = document.getElementById('tc-deg');
    if(ring) ring.style.transform = `rotate(${-trueH}deg)`;
    if(deg) deg.innerText = Math.round(trueH) + "°";
    
    let tri = document.getElementById('user-tri');
    if(tri) tri.style.transform = `rotate(${trueH}deg)`;

    if (currentBearing !== null) {
        let relAngle = (currentBearing - trueH + 360) % 360;
        let arr = document.getElementById('tc-arrow');
        if (arr) { arr.style.display = 'block'; arr.style.transform = `rotate(${relAngle}deg)`; }

        // --- ЛОГІКА ЕКО-БЛЕКАУТУ (Рамка-компас) ---
        if (isEcoMode && isEcoPeeking) {
            document.querySelectorAll('.eco-edge').forEach(el => el.style.opacity = '0'); // Скидаємо всі
            
            // Визначаємо куди світити (Толерантність 45 градусів на кожну сторону)
            if (relAngle >= 315 || relAngle < 45) {
                document.getElementById('eco-top').style.opacity = '1';
            } else if (relAngle >= 45 && relAngle < 135) {
                document.getElementById('eco-right').style.opacity = '1';
            } else if (relAngle >= 135 && relAngle < 225) {
                document.getElementById('eco-bottom').style.opacity = '1';
            } else if (relAngle >= 225 && relAngle < 315) {
                document.getElementById('eco-left').style.opacity = '1';
            }
        }

        // --- ЛОГІКА ВІБРО-ПОВОДИРЯ (Працює завжди, навіть в ЕКО) ---
        if (guideMode && !isSignalLost) {
            const timeNow = Date.now();
            let absDiff = Math.abs((relAngle + 540) % 360 - 180); 

            if (guideType === 'corridor') {
                if (absDiff <= 15) {
                    if (timeNow - lastVibroTime > 30000) { 
                        if (navigator.vibrate) navigator.vibrate([40, 100, 40]);
                        playNavTone(800, 150); setTimeout(() => playNavTone(800, 150), 200); lastVibroTime = timeNow;
                    }
                } else {
                    if (timeNow - lastWarnTime > 5000) { 
                        if (navigator.vibrate) navigator.vibrate([150, 50, 150]);
                        playNavTone(300, 300); lastWarnTime = timeNow;
                    }
                }
            } else {
                if (absDiff <= 7) { 
                    if (timeNow - lastVibroTime > 200) { if (navigator.vibrate) navigator.vibrate(100); playNavTone(1200, 50); lastVibroTime = timeNow; }
                } else if (absDiff <= 20) {
                    if (timeNow - lastVibroTime > 600) { if (navigator.vibrate) navigator.vibrate(50); playNavTone(800, 50); lastVibroTime = timeNow; }
                } else if (absDiff <= 45) {
                    if (timeNow - lastVibroTime > 1500) { if (navigator.vibrate) navigator.vibrate(30); playNavTone(400, 50); lastVibroTime = timeNow; }
                }
            }
        }
    } else {
        let arr = document.getElementById('tc-arrow'); if (arr) arr.style.display = 'none';
        if (isEcoMode) document.querySelectorAll('.eco-edge').forEach(el => el.style.opacity = '0');
    }
});

document.getElementById('btn-cal-walk').onclick = () => {
    if(!lastGoodGPS) return alert("Немає GPS!");
    isWalkCalibrating = true; walkStartPoint = {...lastGoodGPS};
    document.getElementById('btn-cal-walk').style.color = "#f33"; document.getElementById('btn-cal-walk').innerText = "ЙДІТЬ ПРЯМО...";
};

// ==========================================
// 7. ОПТИКА, АСТРО-НАВІГАЦІЯ ТА ШІ
// ==========================================
let prevFrame = null;
function processCamera() {
    const video = document.getElementById('v-stream');
    const uiCanvas = document.getElementById('ui-canvas');
    if(!video || !uiCanvas) return;
    const uiCtx = uiCanvas.getContext('2d');

    if (video.srcObject) {
        try {
            const procCanvas = document.getElementById('proc-canvas');
            const ctx = procCanvas.getContext('2d', {willReadFrequently:true});
            procCanvas.width = 128; procCanvas.height = 96; 
            ctx.drawImage(video, 0, 0, 128, 96);
            let currFrame = ctx.getImageData(0,0,128,96).data;

            if (isScanning && prevFrame) {
                let diff = 0;
                for (let i=0; i<currFrame.length; i+=4) diff += Math.abs(currFrame[i]-prevFrame[i]);
                let lvl = (diff / 3133440) * 1000;
                if (lvl > 20 && navigator.vibrate) navigator.vibrate(50);
            }
            prevFrame = currFrame;

            if (!isAiLive && !irMode) {
                uiCtx.clearRect(0, 0, uiCanvas.width, uiCanvas.height);
                let cx = uiCanvas.width / 2; let cy = uiCanvas.height / 2;
                uiCtx.strokeStyle = "rgba(0, 255, 0, 0.7)"; uiCtx.lineWidth = 1;
                uiCtx.beginPath();
                uiCtx.moveTo(cx - 20, cy); uiCtx.lineTo(cx + 20, cy);
                uiCtx.moveTo(cx, cy - 20); uiCtx.lineTo(cx, cy + 20);
                uiCtx.stroke();
                uiCtx.beginPath(); uiCtx.arc(cx, cy, 5, 0, 2 * Math.PI); uiCtx.stroke();
            }

            if (irMode && !isAiLive) { 
                uiCtx.clearRect(0, 0, uiCanvas.width, uiCanvas.height);
                let threshold = parseInt(document.getElementById('ir-sens').value);
                for (let i = 0; i < currFrame.length; i += 8) {
                    if (currFrame[i] > threshold && currFrame[i+2] > threshold) {
                        uiCtx.strokeStyle = "red"; uiCtx.lineWidth = 2;
                        uiCtx.strokeRect((i/4 % 128) * (uiCanvas.width/128), (i/4 / 128) * (uiCanvas.height/96), 10, 10);
                    }
                }
            }
        } catch(e) {}
    }
    requestAnimationFrame(processCamera);
}

function getSunAzimuth(lat, lon, date) {
    let rad = Math.PI / 180;
    let start = new Date(date.getFullYear(), 0, 0);
    let diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
    let dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    let b = (360 / 365) * (dayOfYear - 81) * rad;
    let eot = 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);
    let lst = date.getUTCHours() + (date.getUTCMinutes() / 60) + (lon / 15) + (eot / 60);
    let ha = (lst - 12) * 15 * rad; 
    let dec = 23.45 * Math.sin((360 / 365) * (dayOfYear - 81) * rad) * rad; 
    
    let latRad = lat * rad;
    let sinAlt = Math.sin(dec) * Math.sin(latRad) + Math.cos(dec) * Math.cos(latRad) * Math.cos(ha);
    let alt = Math.asin(sinAlt);
    
    let cosAz = (Math.sin(dec) - Math.sin(latRad) * sinAlt) / (Math.cos(latRad) * Math.cos(alt));
    let az = Math.acos(Math.max(-1, Math.min(1, cosAz))) / rad;
    
    if (ha > 0) az = 360 - az;
    return az;
}

document.getElementById('btn-cal-sun').onclick = () => {
    if(!lastGoodGPS) return alert("Потрібні останні координати GPS!");
    const video = document.getElementById('v-stream');
    if(!video.srcObject) return alert("Спочатку увімкніть камеру та наведіть на Сонце!");
    let az = getSunAzimuth(lastGoodGPS.lat, lastGoodGPS.lon, new Date());
    compassOffset = (az - (360 - hardwareHeading)) % 360;
    if(compassOffset < 0) compassOffset += 360;
    let offsetInfo = document.getElementById('cal-offset-info');
    if(offsetInfo) offsetInfo.innerText = `Астро-корекція: Сонце (${Math.round(az)}°)`;
    if(navigator.vibrate) navigator.vibrate([200, 100, 200]);
};

document.getElementById('btn-cal-star').onclick = () => {
    const video = document.getElementById('v-stream');
    if(!video.srcObject) return alert("Спочатку увімкніть камеру та наведіть на Полярну зірку!");
    compassOffset = (0 - (360 - hardwareHeading)) % 360;
    if(compassOffset < 0) compassOffset += 360;
    let offsetInfo = document.getElementById('cal-offset-info');
    if(offsetInfo) offsetInfo.innerText = `Астро-корекція: Полярна (0°)`;
    if(navigator.vibrate) navigator.vibrate([200, 100, 200]);
};

document.getElementById('btn-cam').onclick = async () => {
    await initSensors();
    let btn = document.getElementById('btn-cam');
    const video = document.getElementById('v-stream');
    const uiCanvas = document.getElementById('ui-canvas');
    if (video.srcObject) { turnOffCamera(); } else { 
        btn.innerText = "ЗАПУСК...";
        try {
            video.srcObject = await navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}});
            video.onloadedmetadata = () => { if(uiCanvas) { uiCanvas.width = video.clientWidth; uiCanvas.height = video.clientHeight; } };
            btn.innerText = "⏹ ВИМКНУТИ КАМЕРУ"; btn.style.color = "#f33";
        } catch(e) { btn.innerText = "❌ КАМЕРА БЛОКОВАНА"; vibrateError(); setTimeout(() => { btn.innerText = "🔴 КАМЕРА"; }, 3000); }
    }
};

document.getElementById('btn-ir').onclick = () => {
    irMode = !irMode; let btn = document.getElementById('btn-ir'); const video = document.getElementById('v-stream');
    btn.innerText = irMode ? "ІЧ-ФІЛЬТР: УВІМК" : "ІЧ-ФІЛЬТР: ВИМК"; btn.style.color = irMode ? "#f33" : "#fff";
    if(video) video.style.filter = irMode ? "contrast(3) brightness(0.4) grayscale(1)" : "none";
};

document.getElementById('btn-scan').onclick = () => { 
    isScanning = !isScanning; let btn = document.getElementById('btn-scan');
    btn.innerText = isScanning ? "СЕЙСМІКА: УВІМК" : "СЕЙСМІКА: ВИМК"; btn.style.color = isScanning ? "#f33" : "#fff";
};

document.getElementById('btn-ai-cam').onclick = async () => {
    const video = document.getElementById('v-stream'); const uiCanvas = document.getElementById('ui-canvas');
    if (!video || !video.srcObject) { vibrateError(); return alert("Спочатку увімкніть камеру!"); }
    let btn = document.getElementById('btn-ai-cam'); let stats = document.getElementById('ai-stats');
    if (!aiModel) { 
        stats.innerText = "ЗАВАНТАЖЕННЯ ШІ...";
        try { if(typeof cocoSsd === 'undefined') throw new Error("Бібліотека ШІ не знайдена"); aiModel = await cocoSsd.load(); } 
        catch (e) { stats.innerText = "❌ ШІ НЕ ЗАВАНТАЖЕНО"; vibrateError(); return; }
    }
    isAiLive = !isAiLive; btn.style.color = isAiLive ? "#4ade80" : "#fff";
    if(isAiLive) { detectAI(); } else { stats.innerText = "ШІ ВИМКНЕНО"; if(uiCanvas) uiCanvas.getContext('2d').clearRect(0, 0, uiCanvas.width, uiCanvas.height); }
};

async function detectAI() {
    const video = document.getElementById('v-stream'); const uiCanvas = document.getElementById('ui-canvas');
    if(!isAiLive || !aiModel || !video || !video.srcObject) return;
    const uiCtx = uiCanvas.getContext('2d');

    try {
        const predictions = await aiModel.detect(video);
        if(uiCtx) uiCtx.clearRect(0, 0, uiCanvas.width, uiCanvas.height);
        let threshold = document.getElementById('ai-sens').value / 100;
        let focal = document.getElementById('ai-focal').value;
        let pCount = 0, vCount = 0;

        predictions.forEach(p => {
            if(p.score < threshold) return;
            if(p.class === 'person') pCount++;
            if(['car','truck','bus', 'motorcycle'].includes(p.class)) vCount++;
            
            if(p.class === 'person' || ['car','truck','bus', 'motorcycle'].includes(p.class)) {
                const [x,y,w,h] = p.bbox;
                let realH = REAL_HEIGHTS[p.class] || 1.7;
                let dist = (realH * (video.videoHeight * focal)) / h;
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
// 8. МЕТАЛОШУКАЧ
// ==========================================
document.getElementById('btn-metal-toggle').onclick = async () => {
    await initSensors(); isMetalActive = !isMetalActive;
    let btn = document.getElementById('btn-metal-toggle');
    btn.innerText = isMetalActive ? "МЕТАЛОШУКАЧ: УВІМК" : "МЕТАЛОШУКАЧ: ВИМК";
    btn.style.color = isMetalActive ? "#4ade80" : "#f33"; btn.style.borderColor = isMetalActive ? "#050" : "#511";

    if (isMetalActive) { baseField = null; startMag(); } 
    else if (magSensor) { magSensor.stop(); magSensor = null; document.getElementById('mag-bar').style.width = "0%"; document.getElementById('mag-num').innerText = "0 µT"; if(gain) gain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.1); }
};

function startMag() {
    if (!('Magnetometer' in window)) { vibrateError(); return document.getElementById('mag-num').innerText = "❌ БЛОКОВАНО HTTP/НЕМАЄ ДАТЧИКА"; }
    try {
        magSensor = new Magnetometer({frequency: 20});
        magSensor.addEventListener('reading', () => {
            let field = Math.sqrt(magSensor.x**2 + magSensor.y**2 + magSensor.z**2);
            if (baseField === null) baseField = field;
            let diff = Math.abs(field - baseField);
            let threshold = parseInt(document.getElementById('sens-range').value);
            
            document.getElementById('mag-num').innerText = Math.round(diff) + " µT";
            document.getElementById('mag-bar').style.width = Math.min((diff/threshold)*100, 100) + "%";
            
            if (diff > threshold && gain) {
                gain.gain.setTargetAtTime(0.3, audioCtx.currentTime, 0.05);
                osc.frequency.setTargetAtTime(400 + (diff * 5), audioCtx.currentTime, 0.05);
                if(navigator.vibrate) navigator.vibrate(20);
            } else if(gain) { gain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.1); }
        });
        magSensor.addEventListener('error', e => { document.getElementById('mag-num').innerText = "❌ ПОМИЛКА ДАТЧИКА"; vibrateError(); });
        magSensor.start();
    } catch(e) { document.getElementById('mag-num').innerText = "❌ ДОСТУП ЗАБОРОНЕНО"; vibrateError(); }
}

document.getElementById('btn-calibrate').onclick = () => { baseField = null; };

// ==========================================
// 9. ЩИТ ТА МАТЕМАТИКА
// ==========================================
document.getElementById('btn-shield').onclick = async () => { 
    await initSensors(); isShielded = !isShielded; 
    let btn = document.getElementById('btn-shield');
    btn.style.backgroundColor = isShielded ? "#500" : "#111"; btn.style.color = isShielded ? "#fff" : "#f44"; 
    btn.innerText = isShielded ? "ОХОРОНА АКТИВНА" : "АКТИВУВАТИ ЗАХИСТ";
};

document.getElementById('btn-shield-sound').onclick = async () => {
    await initSensors(); shieldSound = !shieldSound; 
    let btn = document.getElementById('btn-shield-sound');
    btn.innerText = shieldSound ? "ЗВУК СИРЕНИ: УВІМК" : "ЗВУК СИРЕНИ: ВИМК"; btn.style.color = shieldSound ? "#4ade80" : "#fff";
};

window.addEventListener('devicemotion', e => {
    if (isShielded && e.accelerationIncludingGravity) {
        let a = e.accelerationIncludingGravity;
        let f = Math.sqrt(a.x**2 + a.y**2 + a.z**2);
        if (Math.abs(f - 9.8) > 3) { if(navigator.vibrate) navigator.vibrate([500, 200, 500]); if(shieldSound) playNavTone(1000, 1000); }
    }
});

function calcBearing(lat1, lon1, lat2, lon2) {
    const dL = (lon2 - lon1) * Math.PI / 180;
    const l1 = lat1 * Math.PI / 180; const l2 = lat2 * Math.PI / 180;
    const y = Math.sin(dL) * Math.cos(l2);
    const x = Math.cos(l1) * Math.sin(l2) - Math.sin(l1) * Math.cos(l2) * Math.cos(dL);
    return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

window.onload = () => { checkStealthMode(); try{initMap();}catch(e){} try{initGPS();}catch(e){} try{processCamera();}catch(e){} };