// ==========================================
// СЛОВНИК (ТІЛЬКИ УКРАЇНСЬКА)
// ==========================================
let currentLang = 'uk'; 

const translations = {
    'uk': {
        btn_login: "ВХІД",
        err_access_denied: "❌ ДОСТУП ЗАБОРОНЕНО",
        title_qr_scan: "ОПТИЧНИЙ ДАНИЙ КОД",
        btn_close: "ЗАКРИТИ",
        menu_day_night: "☀️ ДЕНЬ / 🔴 НІЧ",
        menu_map: "📍 МАРШРУТ / МАПА",
        menu_compass: "🧭 КОМПАС / ПОВОДИР",
        menu_astro: "🌌 АСТРО / БЕЗ GPS",
        menu_optics: "👁 ОПТИКА / ШІ",
        menu_radio: "💬 ТЕКСТ / QR-РАЦІЯ",
        menu_shield: "🛡 ОХОРОНА / ЩИТ",
        menu_manual: "📖 ІНСТРУКЦІЯ",
        menu_power_off: "🛑 ВИМКНУТИ ДОДАТОК",
        menu_destroy: "💥 ЗНИЩИТИ ДАНІ",
        hud_gps_search: "GPS: ПОШУК...",
        hud_alt: "ВИС: --- м",
        hud_level_analysis: "РІВЕНЬ: АНАЛІЗ",
        hud_speed: "ШВИД: 0.0 км/г",
        hud_target: "ЦІЛЬ: --- м",
        btn_map_manual: "📍 Я ТУТ (БЕЗ GPS)",
        btn_map_transport: "🚙 ТРАНСПОРТ",
        btn_map_share: "📤 ПЕРЕДАТИ QR",
        btn_map_follow: "🎯 СЛІДКУВАТИ",
        btn_map_del_last: "✖ ОСТАННЯ ТОЧКА",
        btn_map_clear: "🗑 ОЧИСТИТИ МАРШРУТ",
        btn_map_layer: "🗺 ШАР",
        btn_map_cache: "💾 КЕШ 2х2 км",
        comp_acc: "ТОЧН: --",
        comp_alt: "ВИСОТА: --- м",
        btn_pedo_off: "👣 РЕЖИМ КРОКОМІРА: ВИМК",
        btn_pedo_on: "👣 РЕЖИМ КРОКОМІРА: УВІМК",
        btn_cal_walk: "КАЛІБРУВАТИ ПРОХОДОМ (15м)",
        comp_target_none: "ЦІЛЬ: НЕМАЄ",
        btn_voice_off: "ГОЛОС: ВИМК",
        btn_voice_on: "ГОЛОС: УВІМК",
        btn_vibro_off: "ПОВОДИР (ВІБРО): ВИМК",
        btn_vibro_on: "ПОВОДИР (ВІБРО): УВІМК",
        lbl_voice_int: "ІНТЕРВАЛ ПІДКАЗОК:",
        lbl_sec: "сек",
        btn_eco: "🌑 ЕКО-БЛЕКАУТ",
        astro_locked: "ЦІЛЬ ЗАХОПЛЕНО",
        astro_polar: "ПОЛЯРНА ЗІРКА",
        astro_hint: "НАВЕДІТЬ ПРИЦІЛ НА ВІРТУАЛЬНУ ЗІРКУ",
        btn_astro_cal: "⚖ КАЛІБРУВАТИ ГОРИЗОНТ (0°)",
        btn_astro_sun: "☀ СОНЦЕ",
        btn_astro_star: "⭐ ЗІРКА (ФІКСАЦІЯ)",
        ai_off: "ШІ НЕ АКТИВНИЙ",
        lbl_cam_zoom: "ЗУМ КАМЕРИ",
        lbl_ai_sens: "ЧУТЛИВІСТЬ ШІ (%)",
        lbl_ai_focal: "ДАЛЬНІСТЬ ШІ (ФОКУС)",
        lbl_ir_sens: "ЧУТЛИВІСТЬ ІЧ / РУХУ",
        btn_scan_cam: "🔴 СКАНУВАТИ З КАМЕРИ",
        btn_scan_photo: "🖼 ПРОЧИТАТИ З ФОТО",
        btn_cam_off: "🔴 КАМЕРА",
        btn_ai_scan: "🤖 ШІ SCAN",
        btn_ir: "🔭 ІЧ-ФІЛЬТР",
        btn_motion: "📉 ДЕТЕКТОР РУХУ",
        chat_title: "ОФЛАЙН РАЦІЯ",
        chat_desc: "Введіть текст та створіть зашифрований QR-код для передачі напарнику.",
        btn_chat_cam: "📷 УВІМКНУТИ КАМЕРУ ДЛЯ ЧИТАННЯ",
        chat_left: "Залишилось: 200 символів",
        btn_chat_gen: "СТВОРИТИ ЗАШИФРОВАНИЙ QR",
        btn_chat_clear: "ОЧИСТИТИ ТЕКСТ",
        
        shield_title: "ОХОРОНА / ЩИТ",
        sos_callsign: "ПОЗИВНИЙ / ID:",
        sos_timer: "АВТО-ЗНИЩЕННЯ (ГОДИН):",
        sos_status_idle: "РЕЖИМ ТИШІ",
        sos_status_active: "🚨 МАЯК АКТИВНИЙ 🚨",
        sos_btn: "SOS МАЯК (ЗАТИСНУТИ 3 СЕК)",
        sos_instruct: "СКОПІЙОВАНО! Зайдіть у налаштування телефону -> Точка доступу Wi-Fi -> Вставте цю назву:",
        btn_shield_off: "АКТИВУВАТИ ПАСИВНИЙ ЗАХИСТ",
        btn_shield_on: "ПАСИВНИЙ ЗАХИСТ АКТИВНИЙ",
        btn_shield_snd_off: "ЗВУК СИРЕНИ: ВИМК",
        btn_shield_snd_on: "ЗВУК СИРЕНИ: УВІМК",
        
        man_title: "БОЙОВИЙ ПОСІБНИК",
        man_intro: "RA_MOBILE Tactical — це повністю автономний інструмент виживання. Він працює в умовах жорсткого РЕБ (без GPS).",
        man_h1: "⚠️ 0. БАЗОВІ РЕЖИМИ ТА БЕЗПЕКА",
        man_p1: "РІВЕНЬ 1: GPS+Net. РІВЕНЬ 2: Стелс (Тільки GPS). РІВЕНЬ 3: Автономний (Без GPS).<br>Кнопка ☀️/🔴 перемикає тактичний червоний режим для ночі.",
        man_h2: "📍 1. МАРШРУТ ТА МАПА",
        man_p2: "- Подвійний тап по мапі ставить ціль.<br>- Якщо GPS заглушено, натисніть 'Я ТУТ (БЕЗ GPS)' і вкажіть місце вручну.<br>- Режим 🚙 Транспорт вимикає магнітний компас, щоб метал кузова не заважав стрілці.",
        man_h3: "🧭 2. КОМПАС, КРОКОМІР ТА БЛЕКАУТ",
        man_p3: "- Крокомір рухає вас на мапі без GPS по вібрації тіла.<br>- ЕКО-БЛЕКАУТ гасить екран. Тап по чорному екрану озвучує відстань до цілі.",
        man_h4: "🌌 3. АСТРО-НАВІГАЦІЯ (AR-ТРЕНАЖЕР)",
        man_p4: "Програма знає де зорі (+7° для України).<br>1. Калібруйте горизонт.<br>2. Підніміть телефон, знайдіть віртуальну Полярну зірку на екрані.<br>3. Гляньте в небо — реальна зірка буде рівно там. Тисніть ФІКСАЦІЯ.",
        man_h5: "👁 4. ОПТИКА ТА ШІ",
        man_p5: "ІЧ-фільтр підсвічує тепло. Детектор руху вібрує при активності в кадрі. ШІ розпізнає людей і техніку.",
        man_h6: "💬 5. ЩИТ ТА РАЦІЯ (SOS)",
        man_p6: "<strong>Auto-Wipe:</strong> Якщо телефон не рухати вибраний час, він завібрує, а через 5 хв - тихо видалить маршрути.<br><strong>SOS Маяк:</strong> Затисніть червону кнопку на 3 сек. Телефон скопіює ваші координати в назву Wi-Fi. Увімкніть Точку Доступу.",

        eco_touch: "ТОРКНІТЬСЯ ЕКРАНА<br>(ДЛЯ ОЗВУЧКИ)",
        btn_eco_exit: "ВИЙТИ З БЛЕКАУТУ",
        wiz_title: "ОФЛАЙН РЕЖИМ",
        wiz_text: "Текст підказки",
        btn_wiz_cancel: "СКАСУВАТИ",
        btn_wiz_next: "ДАЛІ ➡",
        
        lvl3: "РІВЕНЬ 3: АВТОНОМНИЙ",
        lvl2: "РІВЕНЬ 2: СТЕЛС (GPS)",
        lvl1: "РІВЕНЬ 1: МАКС (РАДІОСЛІД)",
        gps_delay: "⚠️ GPS ЗАТРИМКА",
        gps_manual: "📍 РУЧНИЙ РЕЖИМ",
        gps_lost: "❌ GPS ЗГЛУШЕНО (>200м)",
        gps_ok: "GPS: OK",
        gps_offline: "❌ GPS ВТРАЧЕНО (OFFLINE)",
        voice_dist: "Відстань",
        voice_meters: "метрів",
        voice_turn: "Розверніться! Ви віддаляєтесь.",
        voice_right: "Правіше.",
        voice_left: "Лівіше.",
        alert_no_start: "Увага: Немає початкової точки. Встановіть її на мапі кнопкою 'Я ТУТ (БЕЗ GPS)'.",
        alert_pedo_on: "✅ АВТОНОМНА НАВІГАЦІЯ УВІМКНЕНА!",
        alert_pedo_off: "Офлайн трекінг зупинено.",
        alert_man_pos: "📍 РУЧНИЙ РЕЖИМ:\nТапніть по мапі в тому місці, де ви зараз знаходитесь.",
        astro_sun_fix: "☀️ Сонце зафіксовано. Компас відкалібровано!",
        astro_star_fix: "⭐ Зірка зафіксована. Компас відкалібровано на Північ!",
        astro_hor_fix: "⚖️ Горизонт зафіксовано",
        astro_hor_next: "Тепер підніміть телефон вгору (на висоту ~48°) для пошуку зірок.",
        lbl_meters_short: "м",
        cal_done: "КАЛІБР: ГОТОВО",
        alert_no_gps_cal: "Немає сигналу GPS!"
    }
};

function getT(key) { return translations[currentLang][key] || key; }

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        let key = el.getAttribute('data-i18n');
        if (translations[lang][key]) { el.innerHTML = translations[lang][key]; }
    });
    updatePositioningLevel();
    if(isOfflineTracking) { document.getElementById('btn-pedometer').innerText = getT('btn_pedo_on'); } 
    else { document.getElementById('btn-pedometer').innerText = getT('btn_pedo_off'); }
    document.getElementById('btn-guide-voice').innerText = isVoiceEnabled ? getT('btn_voice_on') : getT('btn_voice_off');
    document.getElementById('btn-guide').innerText = guideMode ? getT('btn_vibro_on') : getT('btn_vibro_off');
    document.getElementById('btn-shield').innerText = isShielded ? getT('btn_shield_on') : getT('btn_shield_off');
}

// НІЧНИЙ РЕЖИМ
let isNightMode = false;
function toggleNightMode() {
    isNightMode = !isNightMode;
    if (isNightMode) { document.body.classList.add('tactical-night'); } 
    else { document.body.classList.remove('tactical-night'); }
}

let sosTimerInput = document.getElementById('sos-timer-input');
if(sosTimerInput) {
    sosTimerInput.oninput = (e) => {
        let valEl = document.getElementById('sos-timer-val');
        if (valEl) valEl.innerText = e.target.value;
    };
}

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
                if (permissionState === 'granted') { window.addEventListener('deviceorientation', handleOrientation); }
            } catch (e) {}
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

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(e => console.error(e)); });
}

// ==========================================
// 1. ГЛОБАЛЬНІ ЗМІННІ
// ==========================================
const CRYPTO_KEY = "RA_STORM_2026"; 

let audioCtx = null, osc = null, gain = null;
let lastGoodGPS = null, watchId = null;

// ЧИТ-КОД УКРАЇНА
let hardwareHeading = 0, compassOffset = 7, currentBearing = null; 

let currentPitch = 0, currentRoll = 0; 
let displayPitch = 0, displayRoll = 0;  
let horizonBeta = 90;
let currentSpeedKmh = 0, currentDistanceToTarget = null;
let currentDisplayAngle = 0, targetDisplayAngle = 0;
let isFirstCompassUpdate = true, hasAbsoluteOrientation = false, isCompassAnimating = false;

let isScanning = false, isShielded = false, shieldSound = false, irMode = false;
let aiModel = null, isAiLive = false, isScanningQR = false;
let currentVideoTrack = null, currentAstroTrack = null;

let map = null, userMarker = null;
let routePoints = [], routeMarkers = [], routeLine = null;
let isWalkCalibrating = false, walkStartPoint = null;
let topoLayer = null, darkLayer = null, currentLayer = 'topo';

let isMapFollowing = true, tracePoints = [], traceLineLayer = null;
let guideMode = false, isVoiceEnabled = false;
let lastVibroTime = 0, lastVoiceTime = 0, lastGpsPing = 0;
let isSignalLost = true, firstFix = true, lastGpsProcessTime = Date.now(), gpsLostTimer = null; 

let isEcoMode = false, ecoPeekTimer = null, isEcoPeeking = false, isManualPosMode = false;
let wakeLock = null, isTransportMode = false, lastGpsCoordsForTransport = null;

let shieldLastMotionTime = Date.now(), shieldWarningTriggered = false;
let sosHoldInterval = null, sosHoldProgress = 0, isSosActive = false, sosBeepInterval = null;

const REAL_HEIGHTS = { 'person': 1.7, 'car': 1.5, 'truck': 3.0, 'bus': 3.0, 'motorcycle': 1.2 };

// ==========================================
// 2. ІНІЦІАЛІЗАЦІЯ
// ==========================================
function initSystem() {
    setLanguage('uk'); 
    updatePositioningLevel();
    try{initMap();}catch(e){} 
    try{initGPS();}catch(e){} 
    try{processCamera();}catch(e){}
    setInterval(traceVanishing, 3000);
    
    setInterval(() => {
        if (!isEcoMode && Date.now() - lastGpsProcessTime > 4000 && !isManualPosMode) {
            let stat = document.getElementById('gps-status');
            if (stat && stat.innerText === getT('gps_ok')) {
                stat.innerText = getT('gps_delay'); stat.style.color = "#f1c40f";
            }
        }
    }, 1000);

    // Моніторинг Auto-Wipe (Знищення даних при нерухомості)
    setInterval(() => {
        if (isShielded) {
            let hours = parseInt(document.getElementById('sos-timer-input') ? document.getElementById('sos-timer-input').value : 1) || 1;
            let msLimit = hours * 3600 * 1000;
            let timeSinceMove = Date.now() - shieldLastMotionTime;
            if (timeSinceMove > msLimit && !shieldWarningTriggered) {
                shieldWarningTriggered = true;
                if(navigator.vibrate) navigator.vibrate([1000, 500, 1000, 500, 1000]); 
            }
            if (shieldWarningTriggered && timeSinceMove > msLimit + 300000) {
                silentDestroyProtocol();
                shieldWarningTriggered = false; 
            }
        } else {
            shieldWarningTriggered = false;
            shieldLastMotionTime = Date.now();
        }
    }, 60000);
}

// ... (requestWakeLock, releaseWakeLock, updatePositioningLevel - залишені без змін)

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
    let o = audioCtx.createOscillator(); let g = audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination); o.type = 'sine'; o.frequency.value = freq; g.gain.value = 0.5;
    o.start(); g.gain.setTargetAtTime(0, audioCtx.currentTime + duration/1000, 0.05); setTimeout(() => o.stop(), duration + 100);
}

function playSystemTone(freq, duration) {
    if (!audioCtx) return; 
    let o = audioCtx.createOscillator(); let g = audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination); o.type = 'sine'; o.frequency.value = freq; g.gain.value = 0.5;
    o.start(); g.gain.setTargetAtTime(0, audioCtx.currentTime + duration/1000, 0.05); setTimeout(() => o.stop(), duration + 100);
}

function speakText(text) {
    if (!isVoiceEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'uk-UA'; utterance.rate = 1.1; 
    window.speechSynthesis.speak(utterance);
}

function triggerDestroyProtocol() {
    if (confirm("УВАГА! ЗНИЩИТИ ВЕСЬ МАРШРУТ ТА ДАНІ ПРОГРАМИ?")) {
        silentDestroyProtocol();
        if(navigator.vibrate) navigator.vibrate([500, 100, 500, 100, 1000]); 
    }
}

function silentDestroyProtocol() {
    routePoints = []; tracePoints = []; 
    updateRoute();
    if(traceLineLayer && map) map.removeLayer(traceLineLayer);
    localStorage.removeItem('savedRoute');
    currentBearing = null; currentDistanceToTarget = null;
    document.getElementById('tc-dist').innerText = "--- м";
    document.getElementById('eco-dist').innerText = "--- м";
    let hudDistEl = document.getElementById('hud-dist'); if(hudDistEl) hudDistEl.innerText = getT('hud_target');
    closeNav();
    isShielded = false;
    let btn = document.getElementById('btn-shield');
    if(btn) { btn.style.backgroundColor = "#111"; btn.style.color = "#f44"; btn.innerText = getT('btn_shield_off'); }
}

function killApp() {
    if (confirm("ВИМКНУТИ ДОДАТОК?")) {
        if(watchId) navigator.geolocation.clearWatch(watchId);
        turnOffCamera();
        document.body.innerHTML = "<div style='color:#555; text-align:center; margin-top:40vh; font-size:1.5rem;'>СИСТЕМА ЗУПИНЕНА</div>";
    }
}

// ==========================================
// 3. МЕНЮ ТА МОДУЛІ
// ==========================================
function openNav() { document.getElementById("side-menu").style.width = "280px"; }
function closeNav() { document.getElementById("side-menu").style.width = "0"; }

async function showModule(id) {
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (id === 'mod-map') { 
        if (map) { setTimeout(() => { map.invalidateSize(); if (lastGoodGPS) map.setView([lastGoodGPS.lat, lastGoodGPS.lon], 18); }, 200); }
    }
    if (id !== 'mod-eye' && id !== 'mod-chat' && id !== 'mod-astro') turnOffCamera();
    
    let line = document.getElementById('astro-horizon-line');
    if (id === 'mod-astro') {
        if(line) line.style.display = 'block';
        const video = document.getElementById('v-astro-stream');
        if (!video.srcObject) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}});
                video.srcObject = stream;
                currentAstroTrack = stream.getVideoTracks()[0];
            } catch(e) {}
        }
    } else {
        if(line) line.style.display = 'none';
        const videoAstro = document.getElementById('v-astro-stream');
        if (videoAstro && videoAstro.srcObject) { videoAstro.srcObject.getTracks().forEach(t => t.stop()); videoAstro.srcObject = null; currentAstroTrack = null; }
    }
}

function turnOffCamera() {
    try {
        const v = document.getElementById('v-stream');
        if (v && v.srcObject) { v.srcObject.getTracks().forEach(t => t.stop()); v.srcObject = null; currentVideoTrack = null; }
        const vChat = document.getElementById('v-chat-stream');
        if (vChat && vChat.srcObject) { vChat.srcObject.getTracks().forEach(t => t.stop()); vChat.srcObject = null; vChat.style.display = 'none'; }
    } catch(e) {}
    isAiLive = false; isScanning = false; isScanningQR = false;
    let btnAiCam = document.getElementById('btn-ai-cam'); if(btnAiCam) { btnAiCam.style.color = "#fff"; }
    let aiStats = document.getElementById('ai-stats'); if(aiStats) aiStats.innerText = getT('ai_off');
}

// ==========================================
// 4. МАПА (Leaflet Logic)
// ==========================================
function toggleMapMenu() {
    const m = document.getElementById('map-controls-panel'); const btn = document.getElementById('btn-map-menu');
    if (m.style.display === 'none') { m.style.display = 'flex'; btn.style.color = '#0cf'; btn.style.borderColor = '#0cf'; } 
    else { m.style.display = 'none'; btn.style.color = '#fff'; btn.style.borderColor = '#333'; }
}

function initMap() {
    if (typeof L === 'undefined') return;
    try {
        // ТУТ ВАЖЛИВИЙ ФІКС: HTTPS:// ДЛЯ МАПИ
        topoLayer = L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', { maxZoom: 20 });
        darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 });
        map = L.map('map-container', { zoomControl: false, doubleClickZoom: false }).setView([49.0, 31.0], 6);
        topoLayer.addTo(map);

        let pressTimer;
        map.on('mousedown contextmenu', (e) => {
            if (isManualPosMode) {
                lastGoodGPS = { lat: e.latlng.lat, lon: e.latlng.lng };
                if(!userMarker) { userMarker = L.marker([lastGoodGPS.lat, lastGoodGPS.lon], { zIndexOffset: 1000, icon: L.divIcon({ className: 'u-icon', html: `<div id="user-tri" style="border-bottom-color: #f97316 !important;"></div>`, iconSize: [16, 35], iconAnchor: [8, 35] }) }).addTo(map); }
                else { userMarker.setLatLng([lastGoodGPS.lat, lastGoodGPS.lon]); }
                isManualPosMode = false; isSignalLost = true; 
                if(routePoints.length > 0) { currentBearing = calcBearing(lastGoodGPS.lat, lastGoodGPS.lon, routePoints[0].lat, routePoints[0].lng); }
                updateTargetDistance(lastGoodGPS.lat, lastGoodGPS.lon);
                return;
            }
            pressTimer = setTimeout(() => { if(routePoints.length < 10) { routePoints.push(e.latlng); updateRoute(); } }, 700); 
        });
        map.on('mouseup mousemove dragstart', () => { clearTimeout(pressTimer); });
        map.on('dblclick', (e) => { if (!isManualPosMode && routePoints.length < 10) { routePoints.push(e.latlng); updateRoute(); } });
        map.on('dragstart', () => { isMapFollowing = false; document.getElementById('btn-follow').style.color = '#fff'; });
        const saved = localStorage.getItem('savedRoute'); if(saved) { routePoints = JSON.parse(saved); updateRoute(); }
    } catch(e) {}
}

// ... (updateRoute, traceVanishing, QR-рація - залишені без змін з твого файлу)

// ==========================================
// 5. GPS ТА ПОВОДИР
// ==========================================
function updateTargetDistance(lat, lon) {
    if (routePoints.length > 0 && map) {
        let d = map.distance([lat, lon], routePoints[0]); currentDistanceToTarget = d;
        document.getElementById('tc-dist').innerText = Math.round(d) + " m";
        document.getElementById('eco-dist').innerText = Math.round(d) + " m";
        document.getElementById('hud-dist').innerText = `ЦІЛЬ: ${Math.round(d)} m`;
        if(d <= 15) { routePoints.shift(); updateRoute(); playSystemTone(1200, 300); } 
        else { currentBearing = calcBearing(lat, lon, routePoints[0].lat, routePoints[0].lng); }
    }
}

function initGPS() {
    if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(pos => {
            const now = Date.now();
            const { latitude: lat, longitude: lon, speed: spd, accuracy: acc, altitude: alt } = pos.coords;
            currentSpeedKmh = spd ? (spd * 3.6) : 0;
            lastGpsProcessTime = now;
            updateTargetDistance(lat, lon);
            lastGoodGPS = { lat, lon };
            if (firstFix && map) { map.setView([lat, lon], 18); firstFix = false; }
            if (isMapFollowing && map) map.panTo([lat, lon]);
            if(userMarker) userMarker.setLatLng([lat, lon]);
        }, err => {
            isSignalLost = true; OfflineWizard.start();
        }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }); 
    }
}

// ==========================================
// 6. КОМПАС (ЗГЛАДЖЕНИЙ) ТА АСТРО
// ==========================================
function handleOrientation(e) {
    let hw = e.webkitCompassHeading || (360 - (e.alpha || 0));
    hardwareHeading = hw;
    let trueH = (hardwareHeading + compassOffset) % 360;
    currentPitch = e.beta || 0; currentRoll = e.gamma || 0;
    
    if (isFirstCompassUpdate) {
        currentDisplayAngle = trueH; displayPitch = currentPitch; displayRoll = currentRoll;
        isFirstCompassUpdate = false; updateCompassUI(); 
    } else {
        targetDisplayAngle = trueH;
        if (!isCompassAnimating) { isCompassAnimating = true; requestAnimationFrame(animateCompass); }
    }
}

function animateCompass() {
    let delta = targetDisplayAngle - currentDisplayAngle;
    delta = ((delta % 360) + 540) % 360 - 180; 
    let smoothing = 0.15; // КІНЕМАТОГРАФІЧНЕ ЗГЛАДЖУВАННЯ
    currentDisplayAngle += delta * smoothing; 
    displayPitch += (currentPitch - displayPitch) * smoothing;
    displayRoll += (currentRoll - displayRoll) * smoothing;
    updateCompassUI();
    if (Math.abs(delta) < 0.1) { isCompassAnimating = false; } 
    else { requestAnimationFrame(animateCompass); }
}

function updateCompassUI() {
    let displayDeg = Math.round(((currentDisplayAngle % 360) + 360) % 360);
    if (!isEcoMode) {
        let ring = document.getElementById('tc-ring'); let deg = document.getElementById('tc-deg');
        if(ring) ring.style.transform = `rotate(${-currentDisplayAngle}deg)`;
        if(deg) deg.innerText = displayDeg + "°"; 
    }

    // AR Астро-підказка
    let astroMod = document.getElementById('mod-astro');
    if (astroMod && astroMod.classList.contains('active')) {
        let elevation = displayPitch - horizonBeta;
        let astroStencil = document.getElementById('astro-stencil');
        let horizonLine = document.getElementById('astro-horizon-line');
        if (astroStencil) {
            let diffAz = (((0 - displayDeg) % 360) + 540) % 360 - 180; 
            let diffPitch = 48 - elevation; 
            let pDeg = window.innerWidth / 50; 
            astroStencil.style.transform = `translate(${diffAz * pDeg}px, ${-diffPitch * pDeg}px)`;
            if (horizonLine) { horizonLine.style.transform = `translateY(${elevation * pDeg}px) rotate(${-displayRoll}deg)`; }
        }
    }
}

// ... (initSensors, SOS-маяк та інша логіка з попередньої відповіді збережені)

// Функції для SOS Маяка
function startSosHold() {
    if(isSosActive) { stopSosFlare(); return; }
    sosHoldProgress = 0;
    sosHoldInterval = setInterval(() => {
        sosHoldProgress += 100;
        let pct = (sosHoldProgress / 3000) * 100;
        document.getElementById('sos-progress').style.width = pct + '%';
        if(navigator.vibrate) navigator.vibrate(20);
        if (sosHoldProgress >= 3000) { clearInterval(sosHoldInterval); activateSosFlare(); }
    }, 100);
}

function stopSosHold() {
    if(sosHoldInterval) { clearInterval(sosHoldInterval); sosHoldInterval = null; }
    if(!isSosActive) { sosHoldProgress = 0; document.getElementById('sos-progress').style.width = '0%'; }
}

async function activateSosFlare() {
    isSosActive = true;
    document.getElementById('sos-status').innerText = getT('sos_status_active');
    let callsign = document.getElementById('sos-callsign').value.toUpperCase() || "UNK";
    let lat = lastGoodGPS ? lastGoodGPS.lat.toFixed(4) : "00.00";
    let lon = lastGoodGPS ? lastGoodGPS.lon.toFixed(4) : "00.00";
    let ssid = `SOS_${callsign}_${lat}_${lon}`;
    try { await navigator.clipboard.writeText(ssid); alert(`${getT('sos_instruct')}\n\n${ssid}`); } catch(e) {}
    sosBeepInterval = setInterval(() => { playSystemTone(3000, 200); }, 30000); 
    document.getElementById('sos-flasher').style.display = 'block';
}

function stopSosFlare() {
    isSosActive = false; document.getElementById('sos-status').innerText = getT('sos_status_idle');
    document.getElementById('sos-progress').style.width = '0%'; clearInterval(sosBeepInterval);
    document.getElementById('sos-flasher').style.display = 'none';
}

// Крокомір
let lastAccel = 0, stepLength = 0.75, isOfflineTracking = false;
window.addEventListener('devicemotion', e => {
    let accel = e.acceleration || e.accelerationIncludingGravity;
    if (!accel) return;
    let currentAccel = Math.sqrt(accel.x**2 + accel.y**2 + accel.z**2);
    if (Math.abs(currentAccel - lastAccel) > 1.5) { 
        shieldLastMotionTime = Date.now(); shieldWarningTriggered = false; 
        if (isOfflineTracking && lastGoodGPS) {
            const R = 6378137, bRad = currentDisplayAngle * Math.PI / 180;
            let nLat = lastGoodGPS.lat + (stepLength * Math.cos(bRad) / R) * 180 / Math.PI;
            let nLon = lastGoodGPS.lon + (stepLength * Math.sin(bRad) / (R * Math.cos(lastGoodGPS.lat * Math.PI / 180))) * 180 / Math.PI;
            lastGoodGPS = { lat: nLat, lon: nLon };
            if (userMarker) userMarker.setLatLng([nLat, nLon]);
            updateTargetDistance(nLat, nLon); updateRoute();
        }
    }
    lastAccel = currentAccel;
});

function calcBearing(lat1, lon1, lat2, lon2) {
    const dL = (lon2 - lon1) * Math.PI / 180, l1 = lat1 * Math.PI / 180, l2 = lat2 * Math.PI / 180;
    return (Math.atan2(Math.sin(dL) * Math.cos(l2), Math.cos(l1) * Math.sin(l2) - Math.sin(l1) * Math.cos(l2) * Math.cos(dL)) * 180 / Math.PI + 360) % 360;
}
