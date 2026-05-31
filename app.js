// ==========================================
// СЛОВНИК (МУЛЬТИМОВНІСТЬ)
// ==========================================
let currentLang = 'uk'; 

const translations = {
    'uk': {
        btn_login: "ВХІД", err_access_denied: "❌ ДОСТУП ЗАБОРОНЕНО", title_qr_scan: "ОПТИЧНИЙ ДАНИЙ КОД", btn_close: "ЗАКРИТИ", menu_day_night: "☀️ ДЕНЬ / 🔴 НІЧ", menu_map: "📍 МАРШРУТ / МАПА", menu_compass: "🧭 КОМПАС / ПОВОДИР", menu_astro: "🌌 АСТРО / БЕЗ GPS", menu_optics: "👁 ОПТИКА / ШІ", menu_radio: "💬 ТЕКСТ / QR-РАЦІЯ", menu_shield: "🛡 ОХОРОНА / ЩИТ", menu_manual: "📖 ІНСТРУКЦІЯ", menu_power_off: "🛑 ВИМКНУТИ ДОДАТОК", menu_destroy: "💥 ЗНИЩИТИ ДАНІ", menu_sos: "🆘 SOS / МАЯК",
        hud_gps_search: "GPS: ПОШУК...", hud_alt: "ВИС: --- м", hud_level_analysis: "РІВЕНЬ: АНАЛІЗ", hud_speed: "ШВИД: 0.0 км/г", hud_target: "ЦІЛЬ: --- м",
        btn_map_manual: "📍 Я ТУТ (БЕЗ GPS)", btn_map_transport: "🚙 ТРАНСПОРТ", btn_map_share: "📤 ПЕРЕДАТИ QR", btn_map_follow: "🎯 СЛІДКУВАТИ", btn_map_del_last: "✖ ОСТАННЯ ТОЧКА", btn_map_clear: "🗑 ОЧИСТИТИ МАРШРУТ", btn_map_layer: "🗺 ШАР", btn_map_cache: "💾 КЕШ 2х2 км",
        comp_acc: "ТОЧН: --", comp_alt: "ВИСОТА: --- м", btn_pedo_off: "👣 РЕЖИМ КРОКОМІРА: ВИМК", btn_pedo_on: "👣 РЕЖИМ КРОКОМІРА: УВІМК", btn_cal_walk: "КАЛІБРУВАТИ ПРОХОДОМ (15м)", comp_target_none: "ЦІЛЬ: НЕМАЄ",
        btn_voice_off: "ГОЛОС: ВИМК", btn_voice_on: "ГОЛОС: УВІМК", btn_vibro_off: "ПОВОДИР (ВІБРО): ВИМК", btn_vibro_on: "ПОВОДИР (ВІБРО): УВІМК", lbl_voice_int: "ІНТЕРВАЛ ПІДКАЗОК:", lbl_sec: "сек", btn_eco: "🌑 ЕКО-БЛЕКАУТ (ЕКРАН-КОМПАС)",
        astro_locked: "ЦІЛЬ ЗАХОПЛЕНО", astro_polar: "ПОЛЯРНА ЗІРКА", astro_hint: "ШУКАЙТЕ ПІВНІЧ", btn_astro_cal: "⚖ КАЛІБРУВАТИ ГОРИЗОНТ (0°)", btn_astro_sun: "☀ СОНЦЕ (ЗАФІКСУВАТИ)", btn_astro_star: "⭐ ЗІРКА (ЗАФІКСУВАТИ)",
        ai_off: "ШІ НЕ АКТИВНИЙ", lbl_cam_zoom: "ЗУМ КАМЕРИ", lbl_ai_sens: "ЧУТЛИВІСТЬ ШІ (%)", lbl_ai_focal: "ДАЛЬНІСТЬ ШІ (ФОКУС)", lbl_ir_sens: "ЧУТЛИВІСТЬ ІЧ / РУХУ",
        btn_scan_cam: "🔴 СКАНУВАТИ З КАМЕРИ", btn_scan_photo: "🖼 ПРОЧИТАТИ З ФОТО", btn_cam_off: "🔴 КАМЕРА", btn_ai_scan: "🤖 ШІ SCAN", btn_ir: "🔭 ІЧ-ФІЛЬТР", btn_motion: "📉 ДЕТЕКТОР РУХУ",
        chat_title: "ОФЛАЙН РАЦІЯ", chat_desc: "Введіть текст та створіть зашифрований QR-код для передачі напарнику.", btn_chat_cam: "📷 УВІМКНУТИ КАМЕРУ ДЛЯ ЧИТАННЯ", chat_left: "Залишилось: 200 символів", btn_chat_gen: "СТВОРИТИ ЗАШИФРОВАНИЙ QR", btn_chat_clear: "ОЧИСТИТИ ТЕКСТ",
        shield_title: "ОХОРОНА / ЩИТ", btn_shield_off: "АКТИВУВАТИ ЗАХИСТ", btn_shield_on: "ОХОРОНА АКТИВНА", btn_shield_snd_off: "ЗВУК СИРЕНИ: ВИМК", btn_shield_snd_on: "ЗВУК СИРЕНИ: УВІМК",
        sos_title: "МАЯК ВИЖИВАННЯ", sos_coords: "КООРДИНАТИ:", sos_battery: "БАТАРЕЯ:", btn_sos_on: "АЛАРМ (УВІМКНУТИ)", btn_sos_off: "ВИМКНУТИ SOS", sos_no_gps: "ОЧІКУВАННЯ GPS",
        man_title: "БОЙОВИЙ ПОСІБНИК", man_h1: "🔐 1. ВХІД У СИСТЕМУ", man_p1: "Введи цифри (PIN-код) і натисни 'ВХІД'. Це захист, щоб ворог не міг скористатися навігатором, якщо телефон потрапить до нього.", man_h2: "📍 2. МАРШРУТ / МАПА", man_p2: "<strong>Як поставити ціль:</strong> Двічі швидко тапни по карті.<br><strong>Я ТУТ (БЕЗ GPS):</strong> Використовуй під РЕБом. Натисни і ткни пальцем у карту туди, де ти зараз.<br><strong>15м:</strong> Натисни і пройди 15 метров для точного калібрування.", man_h3: "🧭 3. КОМПАС / ПОВОДИР", man_p3: "<strong>Крокомір:</strong> Якщо немає GPS, увімкни його і він сам рахуватиме кроки.<br><strong>Поводир (Вібро):</strong> Телефон вібрує, коли дивишся точно на ціль.<br><strong>ЕКО-Блекаут:</strong> Поклади палець на чорний екран на 3 сек, щоб дізнатися відстань.", man_h4: "🌌 4. АСТРО / БЕЗ GPS", man_p4: "Коли компас збився: Тримаєш телефон рівно -> 'КАЛІБРУВАТИ ГОРИЗОНТ' -> піднімаєш у небо. Наведись на Полярну зірку або Сонце в приціл і натисни кнопку.", man_h5: "👁 5. ОПТИКА / ШІ", man_p5: "<strong>ІЧ-ФІЛЬТР:</strong> Робить картинку контрастною для сутінків.<br><strong>ШІ SCAN:</strong> Камера сама шукає людей або техніку.", man_h6: "💬 6. ТЕКСТ / QR-РАЦІЯ", man_p6: "Пишеш текст -> 'Створити QR'. Напарник відкриває програму і сканує. Розшифровано без зв'язку.", man_h7: "🛡 7. ОХОРОНА / ЩИТ", man_p7: "Натискаєш 'АКТИВУВАТИ ЗАХИСТ' і кладеш телефон. Якщо земля завібрує — спрацює тривога.", man_h8: "🆘 8. SOS / МАЯК ВИЖИВАННЯ", man_p8: "Якщо тебя присипало: Натискаєш ВЕЛИКУ кнопку SOS. Екран яскраво блимає, лунає звук, показуються координати.",
        eco_touch: "ТОРКНІТЬСЯ ЕКРАНА<br>(3 сек)", btn_eco_exit: "ВИЙТИ З БЛЕКАУТУ", wizard_title: "MODO OFFLINE", wizard_text: "Texto", btn_wiz_cancel: "CANCELAR", btn_wiz_next: "PRÓXIMO ➡",
        lvl3: "РІВЕНЬ 3: АВТОНОМНИЙ", lvl2: "РІВЕНЬ 2: СТЕЛС (GPS)", lvl1: "РІВЕНЬ 1: МАКС (РАДІОСЛІД)", gps_delay: "⚠️ GPS ЗАТРИМКА", gps_manual: "📍 МАРШРУТ ВРУЧНУ", gps_lost: "❌ GPS ЗГЛУШЕНО (>200м)", gps_ok: "GPS: OK", gps_offline: "❌ GPS ВТРАЧЕНО (OFFLINE)",
        voice_dist: "Відстань", voice_meters: "метрів", voice_turn: "Розверніться! Ви віддаляєтесь.", voice_right: "Правіше.", voice_left: "Лівіше.", alert_no_start: "Увага: Немає початкової точки. Встановіть її кнопкою Я ТУТ (БЕЗ GPS).", alert_pedo_on: "✅ АВТОНОМНА НАВІГАЦІЯ УВІМКНЕНА!", alert_pedo_off: "Офлайн трекінг зупинено.", alert_man_pos: "📍 РУЧНИЙ РЕЖИМ:\nТапніть по мапі в тому місці, де ви зараз знаходитесь.", astro_sun_fix: "☀️ Сонце зафіксовано. Компас відкалібровано!", astro_star_fix: "⭐ Зірка зафіксована. Компас відкалібровано на Північ!", astro_hor_fix: "⚖️ Горизонт зафіксовано", astro_hor_next: "Тепер підніміть телефон вертикально перед собою для пошуку зірок.", lbl_meters_short: "м", cal_done: "КАЛІБР: ГОТОВО", alert_no_gps_cal: "Немає сигналу GPS!"
    },
    'en': {
        btn_login: "LOGIN", err_access_denied: "❌ ACCESS DENIED", title_qr_scan: "OPTICAL DATA CODE", btn_close: "CLOSE", menu_day_night: "☀️ DAY / 🔴 NIGHT", menu_map: "📍 ROUTE / MAP", menu_compass: "🧭 COMPASS / GUIDE", menu_astro: "🌌 ASTRO / NO GPS", menu_optics: "👁 OPTICS / AI", menu_radio: "💬 TEXT / QR RADIO", menu_shield: "🛡 SECURITY / SHIELD", menu_manual: "📖 INSTRUCTIONS", menu_power_off: "🛑 SHUTDOWN APP", menu_destroy: "💥 DESTROY DATA", menu_sos: "🆘 SOS / BEACON",
        hud_gps_search: "GPS: SEARCHING...", hud_alt: "ALT: --- m", hud_level_analysis: "LEVEL: ANALYSIS", hud_speed: "SPD: 0.0 km/h", hud_target: "TGT: --- m",
        btn_map_manual: "📍 I AM HERE (NO GPS)", btn_map_transport: "🚙 TRANSPORT", btn_map_share: "📤 SHARE QR", btn_map_follow: "🎯 FOLLOW", btn_map_del_last: "✖ DELETE LAST", btn_map_clear: "🗑 CLEAR ROUTE", btn_map_layer: "🗺 LAYER", btn_map_cache: "💾 CACHE 2x2 km",
        comp_acc: "ACC: --", comp_alt: "ALT: --- m", btn_pedo_off: "👣 PEDOMETER: OFF", btn_pedo_on: "👣 PEDOMETER: ON", btn_cal_walk: "CALIBRATE WALKING (15m)", comp_target_none: "TARGET: NONE",
        btn_voice_off: "VOICE: OFF", btn_voice_on: "VOICE: ON", btn_vibro_off: "GUIDE (VIBRO): OFF", btn_vibro_on: "GUIDE (VIBRO): ON", lbl_voice_int: "HINT INTERVAL:", lbl_sec: "sec", btn_eco: "🌑 ECO BLACKOUT",
        astro_locked: "TARGET LOCKED", astro_polar: "POLARIS", astro_hint: "LOOK FOR NORTH", btn_astro_cal: "⚖ CALIBRATE HORIZON (0°)", btn_astro_sun: "☀ SUN (LOCK)", btn_astro_star: "⭐ STAR (LOCK)",
        ai_off: "AI INACTIVE", lbl_cam_zoom: "CAMERA ZOOM", lbl_ai_sens: "AI SENSITIVITY (%)", lbl_ai_focal: "AI RANGE (FOCUS)", lbl_ir_sens: "IR / MOTION SENSITIVITY",
        btn_scan_cam: "🔴 SCAN FROM CAMERA", btn_scan_photo: "🖼 READ FROM PHOTO", btn_cam_off: "🔴 CAMERA", btn_ai_scan: "🤖 AI SCAN", btn_ir: "🔭 IR FILTER", btn_motion: "📉 MOTION DETECTOR",
        chat_title: "OFFLINE RADIO", chat_desc: "Enter text and generate an encrypted QR code.", btn_chat_cam: "📷 TURN ON CAMERA TO READ", chat_left: "Remaining: 200 chars", btn_chat_gen: "GENERATE ENCRYPTED QR", btn_chat_clear: "CLEAR TEXT",
        shield_title: "SECURITY / SHIELD", btn_shield_off: "ACTIVATE SHIELD", btn_shield_on: "SHIELD ACTIVE", btn_shield_snd_off: "SIREN SOUND: OFF", btn_shield_snd_on: "SIREN SOUND: ON",
        sos_title: "SURVIVAL BEACON", sos_coords: "COORDINATES:", sos_battery: "BATTERY:", btn_sos_on: "ALARM (TURN ON)", btn_sos_off: "TURN OFF SOS", sos_no_gps: "WAITING FOR GPS",
        man_title: "COMBAT MANUAL", man_h1: "🔐 1. SYSTEM LOGIN", man_p1: "Enter your PIN code.", man_h2: "📍 2. ROUTE / MAP", man_p2: "Double tap to set target. Use 'I AM HERE' to manually set location.", man_h3: "🧭 3. COMPASS / GUIDE", man_p3: "Use pedometer for offline tracking. Vibro-guide will point you to the target.", man_h4: "🌌 4. ASTRO / NO GPS", man_p4: "Calibrate horizon, then look up to lock Polaris or the Sun in crosshair to fix compass.", man_h5: "👁 5. OPTICS / AI", man_p5: "Use IR filter in low light. AI Scan detects vehicles and personnel.", man_h6: "💬 6. TEXT / QR-RADIO", man_p6: "Share encrypted messages via QR codes.", man_h7: "🛡 7. SECURITY / SHIELD", man_p7: "Put phone on bag. Any vibration triggers the alarm.", man_h8: "🆘 8. SOS / BEACON", man_p8: "Activate SOS to flash screen and emit a 3-second beacon tone.",
        eco_touch: "TOUCH SCREEN<br>(3 sec)", btn_eco_exit: "EXIT BLACKOUT", wizard_title: "OFFLINE MODE", wizard_text: "Hint text", btn_wiz_cancel: "CANCEL", btn_wiz_next: "NEXT ➡",
        lvl3: "LEVEL 3: AUTONOMOUS", lvl2: "LEVEL 2: STEALTH (GPS)", lvl1: "LEVEL 1: MAX (RADIO TRACE)", gps_delay: "⚠️ GPS DELAY", gps_manual: "📍 MANUAL MODE", gps_lost: "❌ GPS JAMMED (>200m)", gps_ok: "GPS: OK", gps_offline: "❌ GPS LOST (OFFLINE)",
        voice_dist: "Distance", voice_meters: "meters", voice_turn: "Turn around!", voice_right: "More to the right.", voice_left: "More to the left.", alert_no_start: "Warning: No start point set.", alert_pedo_on: "✅ AUTONOMOUS NAVIGATION ON!", alert_pedo_off: "Offline tracking stopped.", alert_man_pos: "📍 MANUAL MODE:\nTap the map where you are.", astro_sun_fix: "☀️ Sun locked!", astro_star_fix: "⭐ Star locked!", astro_hor_fix: "⚖️ Horizon locked", astro_hor_next: "Now lift the phone up to search for stars.", lbl_meters_short: "m", cal_done: "CAL: DONE", alert_no_gps_cal: "No GPS signal!"
    }
};

function getT(key) { return translations[currentLang][key] || key; }

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-lang-' + lang).classList.add('active');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        let key = el.getAttribute('data-i18n');
        if (translations[lang][key]) { el.innerHTML = translations[lang][key]; }
    });

    updatePositioningLevel();
    if(isOfflineTracking) { document.getElementById('btn-pedometer').innerText = getT('btn_pedo_on'); } else { document.getElementById('btn-pedometer').innerText = getT('btn_pedo_off'); }
    document.getElementById('btn-guide-voice').innerText = isVoiceEnabled ? getT('btn_voice_on') : getT('btn_voice_off');
    document.getElementById('btn-guide').innerText = guideMode ? getT('btn_vibro_on') : getT('btn_vibro_off');
    document.getElementById('btn-shield').innerText = isShielded ? getT('btn_shield_on') : getT('btn_shield_off');
    document.getElementById('btn-shield-sound').innerText = shieldSound ? getT('btn_shield_snd_on') : getT('btn_shield_snd_off');
    if(isSosActive) { document.getElementById('btn-sos-toggle').innerText = getT('btn_sos_off'); } else { document.getElementById('btn-sos-toggle').innerText = getT('btn_sos_on'); }
}

let isNightMode = false;
function toggleNightMode() {
    isNightMode = !isNightMode;
    if (isNightMode) { document.body.classList.add('tactical-night'); } else { document.body.classList.remove('tactical-night'); }
}

// ЛОГІКА РЕЖИМІВ
let isLiteMode = true; 
function toggleAppMode() {
    let toggle = document.getElementById('mode-toggle');
    if(!toggle) return;
    isLiteMode = !toggle.checked;
    document.getElementById('lbl-lite').classList.toggle('active-lite', isLiteMode);
    document.getElementById('lbl-max').classList.toggle('active-max', !isLiteMode);
    applyModeRestrictions();
}

function applyModeRestrictions() {
    const btnAi = document.getElementById('btn-ai-cam');
    const btnMotion = document.getElementById('btn-scan');
    if(btnAi) { btnAi.style.opacity = isLiteMode ? '0.3' : '1'; btnAi.style.pointerEvents = isLiteMode ? 'none' : 'auto'; }
    if(btnMotion) { btnMotion.style.opacity = isLiteMode ? '0.3' : '1'; btnMotion.style.pointerEvents = isLiteMode ? 'none' : 'auto'; }
    if (isLiteMode && map && activeMapLayer) {
        if (currentLayerIdx === 2 || currentLayerIdx === 3) {
            map.removeLayer(activeMapLayer); currentLayerIdx = 0; activeMapLayer = mapLayers[currentLayerIdx]; activeMapLayer.addTo(map);
            let btn = document.getElementById('btn-layer-toggle'); if(btn) btn.innerText = "🗺 " + layerNames[currentLayerIdx];
        }
    }
}

const SECRET_PIN = "4567"; 
let pinAttempts = 0;

async function checkPin() {
    let input = document.getElementById('pin-input').value;
    if (input === SECRET_PIN) {
        document.getElementById('pin-screen').style.display = 'none';
        applyModeRestrictions();
        await initSensors();
        if(navigator.vibrate) navigator.vibrate(50); 
        playNavTone(1000, 100);

        if (typeof DeviceOrientationEvent !== 'undefined') {
            if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                DeviceOrientationEvent.requestPermission().then(state => {
                    if (state === 'granted') window.addEventListener('deviceorientation', handleOrientation, true);
                });
            } else {
                window.addEventListener('deviceorientationabsolute', handleOrientation, true);
                window.addEventListener('deviceorientation', handleOrientation, true);
            }
        }
        initSystem(); 
    } else {
        pinAttempts++; document.getElementById('pin-error').style.display = 'block';
        if(navigator.vibrate) navigator.vibrate([100, 100, 100]);
        if (pinAttempts >= 3) document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:40vh; font-family:monospace;'>404 NOT FOUND</h1>";
    }
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(e => console.error(e)); });
}

const CRYPTO_KEY = "RA_STORM_2026"; 
let audioCtx = null, osc = null, gain = null;
let lastGoodGPS = null, watchId = null;

let hardwareHeading = 0, compassOffset = 7, currentBearing = null; 
let currentPitch = 0, currentRoll = 0; 
let displayPitch = 0, displayRoll = 0; 
let currentDisplayAngle = 0, targetDisplayAngle = 0;
let isFirstCompassUpdate = true; let isCompassAnimating = false; let hasAbsoluteOrientation = false; 

let horizonBeta = 0; // Нахил калібрування нуля
let currentSpeedKmh = 0; let currentDistanceToTarget = null;
let isScanning = false, isShielded = false, shieldSound = false, irMode = false;
let aiModel = null, isAiLive = false, isScanningQR = false;
let currentVideoTrack = null, currentAstroTrack = null;

let map = null, userMarker = null;
let routePoints = [], routeMarkers = [], routeLine = null;
let isWalkCalibrating = false, walkStartPoint = null;

let mapLayers = [];
let layerNames = ['ОСНОВНА (Легка)', 'ТОПОГРАФІЯ', 'СУПУТНИК (Важка)', 'ГІБРИД', 'НІЧНА (Стелс)'];
let currentLayerIdx = 0; let activeMapLayer = null;
let isMapFollowing = true, tracePoints = [], traceLineLayer = null; let userToTargetLine = null;

let guideMode = false, isVoiceEnabled = false;
let lastVibroTime = 0, lastVoiceTime = 0, lastGpsPing = 0;
let isSignalLost = true, firstFix = true;
let lastGpsProcessTime = Date.now(), gpsLostTimer = null; 

let isEcoMode = false, ecoPeekTimer = null, isEcoPeeking = false;
let isManualPosMode = false; let wakeLock = null;
let isTransportMode = false, lastGpsCoordsForTransport = null;

const REAL_HEIGHTS = { 'person': 1.7, 'car': 1.5, 'truck': 3.0, 'bus': 3.0, 'motorcycle': 1.2 };

let isSosActive = false, sosPhase = 0;
let sosInterval = null, sosPhaseTimer = null; let sosBlackout = null; 

function initSystem() {
    setLanguage('uk'); updatePositioningLevel();
    let chatSection = document.getElementById('mod-chat');
    if(chatSection) {
        let chatInput = document.getElementById('chat-input');
        if(chatInput) {
            let btnAddLoc = document.createElement('button'); btnAddLoc.className = "tactical-btn";
            btnAddLoc.style.cssText = "background:#111; color:#f1c40f; border-color:#f1c40f; margin:0 5% 10px 5%; width:90%; padding:10px;";
            btnAddLoc.innerText = "📍 ВСТАВИТИ МОЇ КООРДИНАТИ";
            btnAddLoc.onclick = () => {
                if(lastGoodGPS) { chatInput.value += `\nPOS: ${lastGoodGPS.lat.toFixed(5)}, ${lastGoodGPS.lon.toFixed(5)}`; updateCharCount(); if(navigator.vibrate) navigator.vibrate(50); }
                else alert("❌ Немає GPS координат!");
            };
            chatSection.insertBefore(btnAddLoc, chatInput);
        }
    }
    try{initMap();}catch(e){} try{initGPS();}catch(e){} try{processCamera();}catch(e){}
    sidebarIntervals();
}

function sidebarIntervals() {
    setInterval(traceVanishing, 3000);
    setInterval(() => {
        if (!isEcoMode && Date.now() - lastGpsProcessTime > 4000 && !isManualPosMode) {
            let stat = document.getElementById('gps-status'); if (stat && stat.innerText === getT('gps_ok')) { stat.innerText = getT('gps_delay'); stat.style.color = "#f1c40f"; }
        }
    }, 1000);
}

async function requestWakeLock() { if ('wakeLock' in navigator) { try { wakeLock = await navigator.wakeLock.request('screen'); } catch (err) {} } }
function releaseWakeLock() { if (wakeLock !== null) { wakeLock.release().then(() => wakeLock = null); } }
document.addEventListener('visibilitychange', () => {
    if (document.hidden) turnOffCamera();
    if (!document.hidden && wakeLock !== null && document.getElementById('mod-map').classList.contains('active')) { requestWakeLock(); }
});

let gridLayer = null;
function updateTacticalGrid() {
    if (!map) return; if (gridLayer) { map.removeLayer(gridLayer); gridLayer = null; }
    let zoom = map.getZoom(); if (zoom < 13) return; 
    let stepMeters = (zoom >= 16) ? 100 : 1000;
    let bounds = map.getBounds(); let latStep = stepMeters / 111320;
    let lines = []; let startLat = Math.floor(bounds.getSouth() / latStep) * latStep;
    for (let lat = startLat; lat <= bounds.getNorth(); lat += latStep) { lines.push([[lat, bounds.getWest()], [lat, bounds.getEast()]]); }
    let centerLat = map.getCenter().lat; let lonStep = stepMeters / (111320 * Math.cos(centerLat * Math.PI / 180));
    let startLon = Math.floor(bounds.getWest() / lonStep) * lonStep;
    for (let lon = startLon; lon <= bounds.getEast(); lon += lonStep) { lines.push([[bounds.getSouth(), lon], [bounds.getNorth(), lon]]); }
    gridLayer = L.polyline(lines, { color: 'var(--accent)', weight: 1, opacity: 0.3, dashArray: '4, 4' }).addTo(map);
}

function initMap() {
    if (typeof L === 'undefined') return;
    try {
        let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 });
        let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { maxZoom: 17 });
        let sat = L.tileLayer('http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', { maxZoom: 20 });
        let hyb = L.tileLayer('http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { maxZoom: 20 });
        let dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 });
        mapLayers = [osm, topo, sat, hyb, dark]; activeMapLayer = mapLayers[currentLayerIdx];
        map = L.map('map-container', { zoomControl: false, doubleClickZoom: false }).setView([49.0, 31.0], 6); activeMapLayer.addTo(map);
        map.on('moveend', updateTacticalGrid); map.on('zoomend', updateTacticalGrid);
        let pressTimer;
        map.on('mousedown contextmenu', (e) => {
            if (isManualPosMode) {
                lastGoodGPS = { lat: e.latlng.lat, lon: e.latlng.lng };
                if(!userMarker) { userMarker = L.marker([lastGoodGPS.lat, lastGoodGPS.lon], { zIndexOffset: 1000, icon: L.divIcon({ className: 'u-icon', html: `<div id="user-tri" style="border-bottom-color: #f97316 !important;"></div>`, iconSize: [16, 35], iconAnchor: [8, 35] }) }).addTo(map); } 
                else { userMarker.setLatLng([lastGoodGPS.lat, lastGoodGPS.lon]); let tri = document.getElementById('user-tri'); if (tri) tri.style.borderBottomColor = '#f97316'; }
                isManualPosMode = false; isSignalLost = true; if(routePoints.length > 0) { currentBearing = calcBearing(lastGoodGPS.lat, lastGoodGPS.lon, routePoints[0].lat, routePoints[0].lng); }
                if(navigator.vibrate) navigator.vibrate(100); playSystemTone(800, 100);
                let stat = document.getElementById('gps-status'); if (stat) { stat.innerText = getT('gps_manual'); stat.style.color = "#f97316"; }
                updateTargetDistance(lastGoodGPS.lat, lastGoodGPS.lon); updateUserToTargetLine(); return;
            }
            pressTimer = setTimeout(() => { if(routePoints.length >= 10) return; if(navigator.vibrate) navigator.vibrate(50); playNavTone(800, 100); routePoints.push(e.latlng); updateRoute(); }, 700); 
        });
        map.on('mouseup mousemove dragstart', () => { clearTimeout(pressTimer); });
        map.on('dblclick', (e) => { if (isManualPosMode) return; if(routePoints.length >= 10) return; if(navigator.vibrate) navigator.vibrate(50); routePoints.push(e.latlng); updateRoute(); });
        map.on('dragstart', () => { isMapFollowing = false; document.getElementById('btn-follow').style.color = '#fff'; });
        const saved = localStorage.getItem('savedRoute'); if(saved) { routePoints = JSON.parse(saved); updateRoute(); }
    } catch(e) {}
}

document.getElementById('btn-manual-pos').onclick = () => { isManualPosMode = true; alert(getT('alert_man_pos')); toggleMapMenu(); };

function updateUserToTargetLine() {
    if (!map || routePoints.length === 0 || !lastGoodGPS) { if (userToTargetLine) { map.removeLayer(userToTargetLine); userToTargetLine = null; } return; }
    let latlngs = [ [lastGoodGPS.lat, lastGoodGPS.lon], routePoints[0] ];
    if (!userToTargetLine) { userToTargetLine = L.polyline(latlngs, {color: '#f33', weight: 3, dashArray: '5, 8'}).addTo(map); } else { userToTargetLine.setLatLngs(latlngs); }
}

function updateRoute() {
    if(!map) return; routeMarkers.forEach(m => map.removeLayer(m)); routeMarkers = []; if(routeLine) map.removeLayer(routeLine);
    if (routePoints.length === 0) {
        document.getElementById('route-info').innerText = getT('comp_target_none'); document.getElementById('tc-dist').innerText = "--- м"; document.getElementById('eco-dist').innerText = "--- м";
        let hudDistEl = document.getElementById('hud-dist'); if(hudDistEl) hudDistEl.innerText = getT('hud_target'); currentBearing = null; currentDistanceToTarget = null;
        localStorage.removeItem('savedRoute'); updateUserToTargetLine(); return;
    }
    routePoints.forEach((p, i) => { let m = L.circleMarker(p, { color: i === 0 ? '#0f0' : '#f0f', radius: 8, fillOpacity: 1 }).addTo(map); routeMarkers.push(m); });
    if(routePoints.length > 1) { routeLine = L.polyline(routePoints, { color: '#f0f', weight: 3, dashArray: '5, 10' }).addTo(map); }
    let targetStr = currentLang === 'uk' ? "ЦІЛЬ: ТОЧКА 1 З" : (currentLang === 'pt' ? "ALVO: PONTO 1 DE" : "TGT: POINT 1 OF");
    document.getElementById('route-info').innerText = `${targetStr} ${routePoints.length}`;
    if(lastGoodGPS && routePoints.length > 0) { updateTargetDistance(lastGoodGPS.lat, lastGoodGPS.lon); }
    localStorage.setItem('savedRoute', JSON.stringify(routePoints)); updateUserToTargetLine();
}

function traceVanishing() {
    if (tracePoints.length > 0 && (Date.now() - lastGpsProcessTime > 5000)) {
        tracePoints.shift(); if(traceLineLayer && map) { map.removeLayer(traceLineLayer); if(tracePoints.length > 0) traceLineLayer = L.polyline(tracePoints, { color: '#0cf', weight: 4, className: 'map-trace' }).addTo(map); }
    }
}

document.getElementById('btn-share-qr').onclick = () => {
    if (routePoints.length === 0) return; let data = JSON.stringify(routePoints.map(p => [p.lat, p.lng])); document.getElementById('qrcode-box').innerHTML = '';
    if(typeof QRCode !== 'undefined') { new QRCode(document.getElementById('qrcode-box'), { text: data, width: 220, height: 220, colorDark : "#000000", colorLight : "#ffffff" }); document.getElementById('qr-modal').style.display = 'flex'; toggleMapMenu(); }
};

function updateCharCount() {
    let el = document.getElementById('chat-input'), counter = document.getElementById('char-counter');
    if(el && counter) { let left = 200 - el.value.length; let prefix = currentLang === 'uk' ? 'Залишилось:' : (currentLang === 'pt' ? 'Restante:' : 'Remaining:'); counter.innerText = `${prefix} ${left}`; }
}

function encryptData(text) {
    let encrypted = ""; let safeText = encodeURIComponent(text); for (let i = 0; i < safeText.length; i++) { encrypted += String.fromCharCode(safeText.charCodeAt(i) ^ CRYPTO_KEY.charCodeAt(i % CRYPTO_KEY.length)); } return btoa(encrypted); 
}

function decryptData(encodedText) {
    let decrypted = ""; let decodedStr = atob(encodedText); for (let i = 0; i < decodedStr.length; i++) { decrypted += String.fromCharCode(decodedStr.charCodeAt(i) ^ CRYPTO_KEY.charCodeAt(i % CRYPTO_KEY.length)); } return decodeURIComponent(decrypted);
}

function generateChatQR() {
    let text = document.getElementById('chat-input').value.trim(); if (!text) return; document.getElementById('qrcode-box').innerHTML = '';
    if(typeof QRCode !== 'undefined') { let safeText = "SEC:" + encryptData(text); new QRCode(document.getElementById('qrcode-box'), { text: safeText, width: 220, height: 220, colorDark : "#000000", colorLight : "#ffffff" }); document.getElementById('qr-modal').style.display = 'flex'; }
}

function clearChat() { document.getElementById('chat-input').value = ''; updateCharCount(); }
function closeQR() { document.getElementById('qr-modal').style.display = 'none'; }

document.getElementById('btn-chat-cam').onclick = async () => {
    const video = document.getElementById('v-chat-stream'); let btn = document.getElementById('btn-chat-cam');
    if (video.srcObject) { video.srcObject.getTracks().forEach(t => t.stop()); video.srcObject = null; video.style.display = 'none'; btn.innerText = getT('btn_chat_cam'); isScanningQR = false; } 
    else {
        btn.innerText = "ЗАПУСК...";
        try { const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}}); video.srcObject = stream; video.play(); video.style.display = 'block'; btn.innerText = "⏹ " + getT('btn_cam_off'); isScanningQR = true; scanQRChatFrame(); } 
        catch(e) { btn.innerText = "❌"; setTimeout(() => { btn.innerText = getT('btn_chat_cam'); }, 3000); }
    }
};

function scanQRChatFrame() {
    if (!isScanningQR) return; const video = document.getElementById('v-chat-stream');
    if (video.readyState === video.HAVE_ENOUGH_DATA && video.srcObject) {
        const canvas = document.createElement("canvas"); canvas.width = video.videoWidth; canvas.height = video.videoHeight; const ctx = canvas.getContext("2d"); ctx.drawImage(video, 0, 0, canvas.width, canvas.height); const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height); const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" });
        if (code) { isScanningQR = false; document.getElementById('btn-chat-cam').innerText = getT('btn_chat_cam'); video.srcObject.getTracks().forEach(t => t.stop()); video.srcObject = null; video.style.display = 'none'; processDecodedQR(code.data); return; }
    }
    requestAnimationFrame(scanQRChatFrame);
}

document.getElementById('btn-scan-qr').onclick = () => { const video = document.getElementById('v-stream'); if (!video.srcObject || typeof jsQR === 'undefined') return; isScanningQR = !isScanningQR; document.getElementById('btn-scan-qr').style.color = isScanningQR ? "#4ade80" : "#0cf"; if (isScanningQR) scanQROpticsFrame(); };

function scanQROpticsFrame() {
    if (!isScanningQR) return; const video = document.getElementById('v-stream');
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        const canvas = document.createElement("canvas"); canvas.width = video.videoWidth; canvas.height = video.videoHeight; const ctx = canvas.getContext("2d"); ctx.drawImage(video, 0, 0, canvas.width, canvas.height); const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height); const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" });
        if (code) { isScanningQR = false; document.getElementById('btn-scan-qr').style.color = "#0cf"; processDecodedQR(code.data); return; }
    }
    requestAnimationFrame(scanQROpticsFrame);
}

document.getElementById('btn-scan-photo').onclick = () => { document.getElementById('qr-file-input').click(); };

document.getElementById('qr-file-input').addEventListener('change', function(e) {
    let file = e.target.files[0]; if (!file) return; e.target.value = ''; let reader = new FileReader();
    reader.onload = function(event) {
        let img = new Image();
        img.onload = function() {
            let canvas = document.createElement("canvas"); canvas.width = img.width; canvas.height = img.height; let ctx = canvas.getContext("2d"); ctx.drawImage(img, 0, 0, img.width, img.height); let imageData = ctx.getImageData(0, 0, img.width, img.height); const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" }); if (code) processDecodedQR(code.data);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

function processDecodedQR(data) {
    if(navigator.vibrate) navigator.vibrate([500, 200, 500]); 
    if (data.startsWith("SEC:")) { try { let msg = decryptData(data.substring(4)); alert("📥:\n\n" + msg); } catch (err) {} return; }
    if (data.startsWith("CHAT:")) { try { let msg = decodeURIComponent(data.substring(5)); alert("📥:\n\n" + msg); } catch (err) {} return; }
    if (data.startsWith("MSG:")) { alert("📥:\n\n" + data.substring(4)); return; }
    try { let pts = JSON.parse(data); if (Array.isArray(pts)) { routePoints = pts.map(p => L.latLng(p[0], p[1])); updateRoute(); showModule('mod-map'); return; } } catch(e) {}
}

document.getElementById('btn-follow').onclick = () => { isMapFollowing = true; document.getElementById('btn-follow').style.color = '#4ade80'; if (lastGoodGPS && map) map.setView([lastGoodGPS.lat, lastGoodGPS.lon], 18); toggleMapMenu(); };

document.getElementById('btn-layer-toggle').onclick = () => {
    if(!map || mapLayers.length === 0) return; map.removeLayer(activeMapLayer);
    do { currentLayerIdx = (currentLayerIdx + 1) % mapLayers.length; } while (isLiteMode && (currentLayerIdx === 2 || currentLayerIdx === 3)); 
    activeMapLayer = mapLayers[currentLayerIdx]; activeMapLayer.addTo(map);
    let btn = document.getElementById('btn-layer-toggle'); btn.innerText = "🗺 " + layerNames[currentLayerIdx];
    if(navigator.vibrate) navigator.vibrate(30); toggleMapMenu();
};

document.getElementById('btn-del-last').onclick = () => { if (routePoints.length > 0) { routePoints.pop(); updateRoute(); } toggleMapMenu(); };
document.getElementById('btn-clear-map').onclick = () => { routePoints = []; updateRoute(); toggleMapMenu(); };

document.getElementById('btn-cache-map').onclick = async () => {
    if (!map || !lastGoodGPS) return; let btn = document.getElementById('btn-cache-map'); btn.style.color = "#f33";
    try {
        const c = [lastGoodGPS.lat, lastGoodGPS.lon]; const offset = 0.012; const pts = [ [c[0]+offset, c[1]+offset], [c[0]-offset, c[1]-offset], [c[0]+offset, c[1]-offset], [c[0]-offset, c[1]+offset] ]; let origZoom = map.getZoom(); let origCenter = map.getCenter();
        for (let p of pts) { map.setView(p, 15, {animate: false}); await new Promise(r => setTimeout(r, 1500)); }
        map.setView(origCenter, origZoom, {animate: false}); btn.style.color = "#4ade80"; if(navigator.vibrate) navigator.vibrate(200); playSystemTone(800, 100); setTimeout(() => { btn.style.color = "var(--glow)"; toggleMapMenu(); }, 4000);
    } catch(e) { btn.style.color = "#f33"; vibrateError(); }
};

let btnTransport = document.getElementById('btn-transport'); if(btnTransport) { btnTransport.onclick = () => { isTransportMode = !isTransportMode; if (isTransportMode) { btnTransport.style.color = '#4ade80'; btnTransport.style.borderColor = '#4ade80'; compassOffset = 0; } else { btnTransport.style.color = '#fff'; btnTransport.style.borderColor = '#333'; } toggleMapMenu(); }; }

function updateSunPosition(lat, lon) {
    let sunAz = getSunAzimuth(lat, lon, new Date()); let sunMark = document.getElementById('sun-mark'); if(sunMark) { sunMark.style.display = 'block'; sunMark.style.transform = `translate(-50%, -50%) rotate(${sunAz}deg) translateY(-135px) rotate(-${sunAz}deg)`; }
}

function startWalkCalibration() {
    if (!lastGoodGPS) { alert(getT('alert_no_gps_cal')); return; }
    isWalkCalibrating = true; walkStartPoint = { lat: lastGoodGPS.lat, lon: lastGoodGPS.lon }; let calBtn1 = document.getElementById('btn-cal-walk'), calBtn2 = document.getElementById('btn-map-cal'); if(calBtn1) { calBtn1.innerText = "15 " + getT('lbl_meters_short'); calBtn1.style.color = "#f1c40f"; } if(calBtn2) { calBtn2.innerText = "15"; calBtn2.style.color = "#f1c40f"; }
    if(navigator.vibrate) navigator.vibrate([100, 100]); playSystemTone(500, 100);
}

function updateTargetDistance(lat, lon) {
    if (routePoints.length > 0 && map) {
        let d = map.distance([lat, lon], routePoints[0]); currentDistanceToTarget = d; let distEl = document.getElementById('tc-dist'); if(distEl) distEl.innerText = Math.round(d) + " m"; let ecoDistEl = document.getElementById('eco-dist'); if(ecoDistEl) ecoDistEl.innerText = Math.round(d) + " m"; let prefixTgt = currentLang === 'uk' ? 'ЦІЛЬ:' : (currentLang === 'pt' ? 'ALVO:' : 'TGT:'); let hudDistEl = document.getElementById('hud-dist'); if(hudDistEl) hudDistEl.innerText = `${prefixTgt} ${Math.round(d)} m`;
        if(d <= 15) { routePoints.shift(); updateRoute(); if(navigator.vibrate) navigator.vibrate([500,200,500]); playSystemTone(1200, 300); } else { currentBearing = calcBearing(lat, lon, routePoints[0].lat, routePoints[0].lng); }
    } else { currentDistanceToTarget = null; currentBearing = null; }
}

function updateWifiName() {
    let wifiEl = document.getElementById('wifi-name'); if (!wifiEl || !lastGoodGPS) return; let latStr = lastGoodGPS.lat.toFixed(4).replace('.', ''); let lonStr = lastGoodGPS.lon.toFixed(4).replace('.', ''); let batt = "XX";
    if (navigator.getBattery) { navigator.getBattery().then(b => { batt = Math.round(b.level * 100); wifiEl.innerText = `SOS_${latStr}_${lonStr}_B${batt}`; }); } else { wifiEl.innerText = `SOS_${latStr}_${lonStr}`; }
}

function copyWifiName() {
    let wifiEl = document.getElementById('wifi-name'); if (wifiEl && lastGoodGPS) { navigator.clipboard.writeText(wifiEl.innerText).then(() => { alert("✅ СКОПІЙОВАНО:\n" + wifiEl.innerText + "\n\nПерейдіть у налаштування Hotspot і вставте це як назву мережі."); }).catch(e => { alert("❌ Помилка копіювання. Спробуйте виділити текст вручну."); }); } else { alert("❌ Очікуйте фіксації GPS координат!"); }
}

function initGPS() {
    if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(pos => {
            const now = Date.now(); const { latitude: lat, longitude: lon, speed: spd, accuracy: acc, altitude: alt } = pos.coords; currentSpeedKmh = spd ? (spd * 3.6) : 0; if (firstFix && acc > 50) return; 
            if (tracePoints.length > 0 && map) { let lastP = tracePoints[tracePoints.length - 1]; let jumpDist = map.distance(lastP, [lat, lon]); if (jumpDist > 100 && acc > 25) return; }
            lastGpsProcessTime = now; 
            let altText = (alt !== null && alt !== undefined) ? Math.round(alt) + " m" : "--- m"; let tcAltEl = document.getElementById('tc-alt'), hudAltEl = document.getElementById('alt-val'); let prefixAlt1 = currentLang === 'uk' ? 'ВИСОТА:' : 'ALT:'; let prefixAlt2 = currentLang === 'uk' ? 'ВИС:' : 'ALT:'; if (tcAltEl) tcAltEl.innerText = `${prefixAlt1} ${altText}`; if (hudAltEl) hudAltEl.innerText = `${prefixAlt2} ${altText}`;
            let stat = document.getElementById('gps-status');
            if(acc > 200) {
                if (!gpsLostTimer && !isSignalLost && !isManualPosMode) { gpsLostTimer = setTimeout(() => { if(stat) { stat.innerText = getT('gps_lost'); stat.style.color = "#f33"; } if(navigator.vibrate) navigator.vibrate([500, 200, 500, 200, 1000]); playSystemTone(300, 500); isSignalLost = true; OfflineWizard.start(); }, 5000); }
            } else {
                if (gpsLostTimer) { clearTimeout(gpsLostTimer); gpsLostTimer = null; }
                if(stat && !isManualPosMode) { stat.innerText = getT('gps_ok'); stat.style.color = "#4ade80"; }
                if(isSignalLost) { if(navigator.vibrate) navigator.vibrate([100, 100, 100]); playSystemTone(1200, 200); isSignalLost = false; } 
                if (guideMode && !isEcoMode && now - lastGpsPing > 3000) { if(navigator.vibrate) navigator.vibrate(30); lastGpsPing = now; }
            }
            updateTargetDistance(lat, lon); if (isEcoMode && (now - lastGpsProcessTime < 3000)) return; 
            if (isTransportMode && lastGpsCoordsForTransport) { if (currentSpeedKmh > 4) { let gpsH = pos.coords.heading; if (gpsH === null || isNaN(gpsH)) { gpsH = calcBearing(lastGpsCoordsForTransport.lat, lastGpsCoordsForTransport.lon, lat, lon); } let fakeAlpha = (360 - gpsH) % 360; handleOrientation({ alpha: fakeAlpha, beta: 0, isGpsSimulated: true }); } }
            lastGpsCoordsForTransport = { lat, lon }; lastGoodGPS = { lat, lon };
            updateWifiName(); updateUserToTargetLine(); 
            let prefixSpd = currentLang === 'uk' ? 'ШВИД:' : (currentLang === 'pt' ? 'VEL:' : 'SPD:'); let speedEl = document.getElementById('speed-val'); if(speedEl) speedEl.innerText = `${prefixSpd} ${currentSpeedKmh.toFixed(1)} km/h`; let coordsEl = document.getElementById('tc-coords-small'); if(coordsEl) coordsEl.innerHTML = `LAT: ${lat.toFixed(5)}<br>LON: ${lon.toFixed(5)}`; let prefixAcc = currentLang === 'uk' ? 'ТОЧН:' : (currentLang === 'pt' ? 'PRE:' : 'ACC:'); let accEl = document.getElementById('tc-acc'); if(accEl) accEl.innerText = `${prefixAcc} ${Math.round(acc)}m`;
            tracePoints.push([lat, lon]); if(tracePoints.length > 200) tracePoints.shift(); if(map) { if(traceLineLayer) map.removeLayer(traceLineLayer); traceLineLayer = L.polyline(tracePoints, { color: '#0cf', weight: 4, className: 'map-trace' }).addTo(map); }
            updateSunPosition(lat, lon);
            if (firstFix && map) { map.setView([lat, lon], 18); firstFix = false; updateTacticalGrid(); } if (isMapFollowing && !firstFix && map) map.panTo([lat, lon]);
            if(!userMarker && map && typeof L !== 'undefined') { userMarker = L.marker([lat, lon], { zIndexOffset: 1000, icon: L.divIcon({ className: 'u-icon', html: `<div id="user-tri"></div>`, iconSize: [16, 35], iconAnchor: [8, 35] }) }).addTo(map); } else if(userMarker) { userMarker.setLatLng([lat, lon]); if (!isOfflineTracking && !isManualPosMode) { let tri = document.getElementById('user-tri'); if(tri) tri.style.borderBottomColor = ''; } }
            if(isWalkCalibrating && walkStartPoint && map) {
                let d = map.distance([walkStartPoint.lat, walkStartPoint.lon], [lat, lon]); let remaining = Math.max(0, 15 - Math.round(d)); let calBtn1 = document.getElementById('btn-cal-walk'), calBtn2 = document.getElementById('btn-map-cal'); if(calBtn1) calBtn1.innerText = remaining + " " + getT('lbl_meters_short'); if(calBtn2) calBtn2.innerText = remaining;
                if(d >= 15) { compassOffset = (calcBearing(walkStartPoint.lat, walkStartPoint.lon, lat, lon) - hardwareHeading + 360) % 360; isWalkCalibrating = false; if(calBtn1) { calBtn1.innerText = getT('cal_done'); calBtn1.style.color = "#4ade80"; } if(calBtn2) { calBtn2.innerText = "OK"; calBtn2.style.color = "#4ade80"; } if(navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 500]); playSystemTone(800, 200); setTimeout(() => { if(calBtn1) { calBtn1.innerText = getT('btn_cal_walk'); calBtn1.style.color = "#fff"; } if(calBtn2) { calBtn2.innerText = "15м"; calBtn2.style.color = "#f1c40f"; } }, 5000); }
            }
        }, err => {
            let stat = document.getElementById('gps-status'); if(stat && !isManualPosMode) { stat.innerText = getT('gps_offline'); stat.style.color = "#f33"; } if(!isSignalLost && !isManualPosMode) { if(navigator.vibrate) navigator.vibrate([500, 200, 500, 200, 1000]); playSystemTone(300, 500); isSignalLost = true; OfflineWizard.start(); }
        }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }); 
    }
}

function handleOrientation(e) {
    if (isTransportMode && !e.isGpsSimulated) return;
    currentPitch = e.beta || 0; currentRoll = e.gamma || 0;
    let hw = null;
    if (e.webkitCompassHeading !== undefined) { hw = e.webkitCompassHeading; } else if (e.alpha !== null) { hw = 360 - e.alpha; } else { return; }
    hardwareHeading = hw;
    let trueH = (hardwareHeading + compassOffset) % 360; if (trueH < 0) trueH += 360;
    
    if (isFirstCompassUpdate) {
        currentDisplayAngle = trueH; targetDisplayAngle = trueH; displayPitch = currentPitch; displayRoll = currentRoll; isFirstCompassUpdate = false; updateCompassUI(); 
    } else {
        targetDisplayAngle = trueH; if (!isCompassAnimating) { isCompassAnimating = true; requestAnimationFrame(animateCompass); }
    }
}

function animateCompass() {
    let delta = targetDisplayAngle - currentDisplayAngle; delta = ((delta % 360) + 540) % 360 - 180; 
    
    // Плавна, але швидка відповідь у 3D площині
    let smoothing = isTransportMode ? 0.02 : 0.12;
    currentDisplayAngle += delta * smoothing; displayPitch += (currentPitch - displayPitch) * smoothing; displayRoll += (currentRoll - displayRoll) * smoothing;
    updateCompassUI();

    if (Math.abs(delta) < 0.4 && Math.abs(currentPitch - displayPitch) < 0.4 && Math.abs(currentRoll - displayRoll) < 0.4) {
        currentDisplayAngle = targetDisplayAngle; displayPitch = currentPitch; displayRoll = currentRoll; updateCompassUI(); isCompassAnimating = false; return;
    }
    if (isCompassAnimating) { requestAnimationFrame(animateCompass); }
}

function updateCompassUI() {
    let displayDeg = Math.round(((currentDisplayAngle % 360) + 360) % 360);
    if (!isEcoMode) {
        let ring = document.getElementById('tc-ring'); let deg = document.getElementById('tc-deg'); if(ring) ring.style.transform = `rotate(${-currentDisplayAngle}deg)`; if(deg) deg.innerText = displayDeg + "°"; 
        let tri = document.getElementById('user-tri'); if(tri) tri.style.transform = `rotate(${currentDisplayAngle}deg)`;
        let clinoBar = document.getElementById('clino-bar'); if(clinoBar) { let boundedPitch = Math.max(-90, Math.min(90, displayPitch)); clinoBar.style.bottom = (100 - (((boundedPitch + 90) / 180) * 100)) + '%'; }
    }

    if (currentBearing !== null) {
        let relAngle = currentBearing - currentDisplayAngle; let relMod = (((currentBearing - displayDeg) % 360) + 360) % 360;
        if (!isEcoMode) { let arr = document.getElementById('tc-arrow'); if (arr) { arr.style.display = 'block'; arr.style.transform = `rotate(${relAngle}deg)`; arr.style.borderBottomColor = 'var(--danger)'; } }
        if (isEcoMode && isEcoPeeking) {
            document.querySelectorAll('.eco-edge').forEach(el => el.style.opacity = '0');
            if (relMod >= 315 || relMod < 45) document.getElementById('eco-top').style.opacity = '1';
            else if (relMod >= 45 && relMod < 135) document.getElementById('eco-right').style.opacity = '1';
            else if (relMod >= 135 && relMod < 225) document.getElementById('eco-bottom').style.opacity = '1';
            else if (relMod >= 225 && relMod < 315) document.getElementById('eco-left').style.opacity = '1';
        }
        if ((guideMode || isVoiceEnabled) && (!isSignalLost || isManualPosMode)) {
            const timeNow = Date.now(); let relativeAngle = (((currentBearing - displayDeg) % 360) + 540) % 360 - 180; let absDiff = Math.abs(relativeAngle);
            if (guideMode) {
                if (absDiff <= 5) { if (timeNow - lastVibroTime > 200) { if (navigator.vibrate) navigator.vibrate(100); lastVibroTime = timeNow; } } 
                else if (absDiff <= 15) { if (timeNow - lastVibroTime > 600) { if (navigator.vibrate) navigator.vibrate(50); lastVibroTime = timeNow; } } 
                else if (absDiff <= 30) { if (timeNow - lastVibroTime > 1500) { if (navigator.vibrate) navigator.vibrate(30); lastVibroTime = timeNow; } }
            }
            let voiceIntervalMs = parseInt(document.getElementById('voice-interval') ? document.getElementById('voice-interval').value : 10) * 1000;
            if (isVoiceEnabled && (timeNow - lastVoiceTime > voiceIntervalMs)) {
                if (currentDistanceToTarget !== null) {
                    let d = Math.round(currentDistanceToTarget); let txtDist = getT('voice_dist'); let txtMeters = getT('voice_meters');
                    if (isEcoMode) { speakText(`${txtDist} ${d} ${txtMeters}.`); lastVoiceTime = timeNow; } 
                    else if (currentSpeedKmh > 1.5 || isManualPosMode) {
                        if (absDiff > 120) { speakText(`${getT('voice_turn')} ${txtDist} ${d} ${txtMeters}.`); lastVoiceTime = timeNow; } 
                        else if (absDiff > 25) { let dirText = relativeAngle > 0 ? getT('voice_right') : getT('voice_left'); speakText(`${dirText} ${txtDist} ${d} ${txtMeters}.`); lastVoiceTime = timeNow; }
                    }
                }
            }
        }
    } else {
        if (!isEcoMode) { let relAngle = 0 - currentDisplayAngle; let arr = document.getElementById('tc-arrow'); if (arr) { arr.style.display = 'block'; arr.style.transform = `rotate(${relAngle}deg)`; } }
        if (isEcoMode) document.querySelectorAll('.eco-edge').forEach(el => el.style.opacity = '0');
    }
    
    // ==========================================
    // ОНОВЛЕНА 3D-МАТЕМАТИКА АСТРО ПРИЦІЛУ
    // ==========================================
    let astroMod = document.getElementById('mod-astro');
    if (astroMod && astroMod.classList.contains('active')) {
        
        // Визначаємо положення телефона: якщо він стоїть вертикально (pitch > 45), 
        // крен (Roll) стає справжнім азимутом, а нахил (Pitch) — висотою об'єкта.
        let isVertical = Math.abs(displayPitch) > 45;
        let realAstroDeg = isVertical ? Math.round(((displayRoll % 360) + 360) % 360) : displayDeg;
        let elevation = isVertical ? (90 - Math.abs(displayPitch) + horizonBeta) : (displayPitch + horizonBeta);
        
        let astroHint = document.getElementById('astro-hint');
        if (astroHint) {
            let prefixAz = currentLang === 'uk' ? 'АЗИМУТ' : 'AZIMUTH'; let prefixAlt = currentLang === 'uk' ? 'ВИСОТА' : 'ALTITUDE';
            astroHint.innerHTML = `${prefixAz}: ${realAstroDeg}° | ${prefixAlt}: ${Math.round(elevation)}°<br><span style="color:#f1c40f; font-size:0.8rem;">(${getT('astro_hint')})</span>`;
        }

        let astroStencil = document.getElementById('astro-stencil'); let astroStencilFixed = document.getElementById('astro-stencil-fixed'); let horizonLine = document.getElementById('astro-horizon-line'); let aLeft = document.getElementById('astro-dir-left'), aRight = document.getElementById('astro-dir-right'); let aTop = document.getElementById('astro-dir-top'), aBottom = document.getElementById('astro-dir-bottom'); let aMsg = document.getElementById('astro-target-msg');
        
        if (astroStencil && astroStencilFixed) {
            // Полярна зірка висить суворо на Півночі (0°) і на висоті географічної широти
            let diffAz = (((0 - realAstroDeg) % 360) + 540) % 360 - 180; 
            let userLat = lastGoodGPS ? lastGoodGPS.lat : 49.0;
            let diffPitch = userLat - elevation; 

            let screenW = window.innerWidth || 360; let pDeg = screenW / 50; 
            let tx = diffAz * pDeg; let ty = diffPitch * pDeg; 

            let d = new Date(); let jd = (d.getTime() / 86400000.0) + 2440587.5; let dDays = jd - 2451545.0; let gmst = 280.46061837 + 360.98564736629 * dDays; let userLon = lastGoodGPS ? lastGoodGPS.lon : 31.0; let lst = (gmst + userLon) % 360; if (lst < 0) lst += 360;
            let siderealAngle = lst;

            astroStencilFixed.style.transform = `translate(${tx}px, ${ty}px)`;
            astroStencil.style.transformOrigin = "50% 50%";
            astroStencil.style.transform = `translate(${tx}px, ${ty}px) rotate(${-siderealAngle}deg)`;

            if (horizonLine) { let tyHor = elevation * pDeg; horizonLine.style.transform = `translateY(${-tyHor}px) rotate(${-displayRoll}deg)`; }

            let opAz = Math.min(1, Math.max(0, (Math.abs(diffAz) - 10) / 20)); let opPitch = Math.min(1, Math.max(0, (Math.abs(diffPitch) - 10) / 20));
            aLeft.style.opacity = diffAz > 10 ? opAz : '0'; aRight.style.opacity = diffAz < -10 ? opAz : '0'; aTop.style.opacity = diffPitch > 10 ? opPitch : '0'; aBottom.style.opacity = diffPitch < -10 ? opPitch : '0';

            if (Math.abs(diffAz) <= 5 && Math.abs(diffPitch) <= 5) { astroStencil.classList.add('astro-target-locked'); astroStencilFixed.classList.add('astro-target-locked'); aMsg.style.display = 'block'; } 
            else { astroStencil.classList.remove('astro-target-locked'); astroStencilFixed.classList.remove('astro-target-locked'); aMsg.style.display = 'none'; }
        }
    }
}

document.getElementById('btn-guide-voice').onclick = async () => { isVoiceEnabled = !isVoiceEnabled; let btn = document.getElementById('btn-guide-voice'), settings = document.getElementById('voice-settings'); btn.innerText = isVoiceEnabled ? getT('btn_voice_on') : getT('btn_voice_off'); btn.style.color = isVoiceEnabled ? "#4ade80" : "#ccc"; if (isVoiceEnabled) { if(settings) settings.style.display = 'block'; } else { if(settings) settings.style.display = 'none'; } };
let voiceSlider = document.getElementById('voice-interval'); if (voiceSlider) { voiceSlider.oninput = (e) => { let valEl = document.getElementById('voice-interval-val'); if (valEl) valEl.innerText = e.target.value; }; }
document.getElementById('btn-guide').onclick = async () => { await initSensors(); guideMode = !guideMode; let btn = document.getElementById('btn-guide'); btn.innerText = guideMode ? getT('btn_vibro_on') : getT('btn_vibro_off'); btn.style.color = guideMode ? "#4ade80" : "#558"; };

document.getElementById('btn-astro-horizon').onclick = () => {
    // Автоматично беремо Pitch як точку відліку нахилу
    horizonBeta = 0; 
    if(navigator.vibrate) navigator.vibrate([100, 50, 100]); playSystemTone(800, 100);
    alert(`${getT('astro_hor_fix')}.\n${getT('astro_hor_next')}`);
};

function toggleEcoMode(state) { isEcoMode = state; const overlay = document.getElementById('eco-overlay'); if (state) { overlay.style.display = 'block'; if(navigator.vibrate) navigator.vibrate(100); playSystemTone(500, 100); } else { overlay.style.display = 'none'; isEcoPeeking = false; } }
function peekEco() { if (!isEcoMode || isEcoPeeking) return; isEcoPeeking = true; document.getElementById('eco-content').style.opacity = '1'; document.getElementById('eco-touch-area').style.color = '#000'; if(navigator.vibrate) navigator.vibrate(50); playSystemTone(800, 50); if (isVoiceEnabled && currentDistanceToTarget !== null) { speakText(`${getT('voice_dist')} ${Math.round(currentDistanceToTarget)} ${getT('voice_meters')}.`); } clearTimeout(ecoPeekTimer); ecoPeekTimer = setTimeout(() => { document.getElementById('eco-content').style.opacity = '0'; document.querySelectorAll('.eco-edge').forEach(el => el.style.opacity = '0'); document.getElementById('eco-touch-area').style.color = '#222'; isEcoPeeking = false; }, 3000); }

function getSunAzimuth(lat, lon, date) {
    let rad = Math.PI / 180; let start = new Date(date.getFullYear(), 0, 0); let diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000; let dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24)); let b = (360 / 365) * (dayOfYear - 81) * rad; let eot = 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b); let lst = date.getUTCHours() + (date.getUTCMinutes() / 60) + (lon / 15) + (eot / 60); let ha = (lst - 12) * 15 * rad; let dec = 23.45 * Math.sin((360 / 365) * (dayOfYear - 81) * rad) * rad; let latRad = lat * rad; let sinAlt = Math.sin(dec) * Math.sin(latRad) + Math.cos(dec) * Math.cos(latRad) * Math.cos(ha); let alt = Math.asin(sinAlt); let cosAz = (Math.sin(dec) - Math.sin(latRad) * sinAlt) / (Math.cos(latRad) * Math.cos(alt)); let az = Math.acos(Math.max(-1, Math.min(1, cosAz))) / rad; if (ha > 0) az = 360 - az; return az;
}
document.getElementById('btn-astro-sun').onclick = () => { if(!lastGoodGPS) return; let az = getSunAzimuth(lastGoodGPS.lat, lastGoodGPS.lon, new Date()); compassOffset = (az - hardwareHeading + 360) % 360; if(navigator.vibrate) navigator.vibrate([200, 100, 200]); playSystemTone(800, 100); alert(getT('astro_sun_fix')); OfflineWizard.finish(); };
document.getElementById('btn-astro-star').onclick = () => { compassOffset = (0 - hardwareHeading + 360) % 360; if(navigator.vibrate) navigator.vibrate([200, 100, 200]); playSystemTone(800, 100); alert(getT('astro_star_fix')); OfflineWizard.finish(); };

let prevFrame = null;
function processCamera() {
    const video = document.getElementById('v-stream'); const uiCanvas = document.getElementById('ui-canvas'); if(!video || !uiCanvas) return; const uiCtx = uiCanvas.getContext('2d');
    if (video.srcObject && !isScanningQR) {
        try {
            const procCanvas = document.getElementById('proc-canvas'); const ctx = procCanvas.getContext('2d', {willReadFrequently:true}); procCanvas.width = 128; procCanvas.height = 96; ctx.drawImage(video, 0, 0, 128, 96); let currFrame = ctx.getImageData(0,0,128,96).data;
            if (isScanning && prevFrame) {
                let diff = 0; for (let i=0; i<currFrame.length; i+=4) diff += Math.abs(currFrame[i]-prevFrame[i]); let lvl = (diff / 3133440) * 1000;
                if (lvl > 20) { if(navigator.vibrate) navigator.vibrate(50); playSystemTone(900, 100); let scanBtn = document.getElementById('btn-scan'); if(scanBtn) { scanBtn.style.backgroundColor = "#f00"; setTimeout(()=>{ scanBtn.style.backgroundColor = "#111"; }, 150); } }
            }
            prevFrame = currFrame;
            if (!isAiLive && !irMode) { uiCtx.clearRect(0, 0, uiCanvas.width, uiCanvas.height); let cx = uiCanvas.width / 2; let cy = uiCanvas.height / 2; uiCtx.strokeStyle = "rgba(0, 255, 0, 0.7)"; uiCtx.lineWidth = 1; uiCtx.beginPath(); uiCtx.moveTo(cx - 20, cy); uiCtx.lineTo(cx + 20, cy); uiCtx.moveTo(cx, cy - 20); uiCtx.lineTo(cx, cy + 20); uiCtx.stroke(); uiCtx.beginPath(); uiCtx.arc(cx, cy, 5, 0, 2 * Math.PI); uiCtx.stroke(); }
            if (irMode && !isAiLive) { uiCtx.clearRect(0, 0, uiCanvas.width, uiCanvas.height); let threshold = parseInt(document.getElementById('ir-sens') ? document.getElementById('ir-sens').value : 200); for (let i = 0; i < currFrame.length; i += 8) { if (currFrame[i] > threshold && currFrame[i+2] > threshold) { uiCtx.strokeStyle = "red"; uiCtx.lineWidth = 2; uiCtx.strokeRect((i/4 % 128) * (uiCanvas.width/128), (i/4 / 128) * (uiCanvas.height/96), 10, 10); } } }
        } catch(e) {}
    }
    requestAnimationFrame(processCamera);
}

document.getElementById('btn-cam').onclick = async () => {
    await initSensors(); let btn = document.getElementById('btn-cam'); const video = document.getElementById('v-stream'); const uiCanvas = document.getElementById('ui-canvas');
    if (video.srcObject) { turnOffCamera(); } else { 
        btn.innerText = "ЗАПУСК...";
        try {
            const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}}); video.srcObject = stream; currentVideoTrack = stream.getVideoTracks()[0];
            setTimeout(() => { const capabilities = currentVideoTrack.getCapabilities(); if (capabilities.zoom) { const zoomSlider = document.getElementById('cam-zoom'); if(zoomSlider) { zoomSlider.min = capabilities.zoom.min; zoomSlider.max = capabilities.zoom.max; zoomSlider.step = capabilities.zoom.step; zoomSlider.value = currentVideoTrack.getSettings().zoom || 1; zoomSlider.oninput = (e) => { currentVideoTrack.applyConstraints({advanced: [{zoom: e.target.value}]}); }; } } }, 500);
            video.onloadedmetadata = () => { if(uiCanvas) { uiCanvas.width = video.clientWidth; uiCanvas.height = video.clientHeight; } }; btn.innerText = "⏹ " + getT('btn_cam_off'); btn.style.color = "#f33";
        } catch(e) { btn.innerText = "❌"; vibrateError(); setTimeout(() => { btn.innerText = getT('btn_cam_off'); }, 3000); }
    }
};

document.getElementById('btn-ir').onclick = () => { irMode = !irMode; let btn = document.getElementById('btn-ir'); const video = document.getElementById('v-stream'); btn.style.color = irMode ? "#f33" : "#fff"; if(video) video.style.filter = irMode ? "contrast(3) brightness(0.4) grayscale(1)" : "none"; };
document.getElementById('btn-scan').onclick = async () => { await initSensors(); isScanning = !isScanning; let btn = document.getElementById('btn-scan'); btn.style.color = isScanning ? "#f33" : "#fff"; };
document.getElementById('btn-ai-cam').onclick = async () => { const video = document.getElementById('v-stream'); const uiCanvas = document.getElementById('ui-canvas'); if (!video || !video.srcObject) { vibrateError(); return; } let btn = document.getElementById('btn-ai-cam'); let stats = document.getElementById('ai-stats'); if (!aiModel) { stats.innerText = "ЗАВАНТАЖЕННЯ ШІ..."; try { aiModel = await cocoSsd.load(); } catch (e) { stats.innerText = "❌ ПОМИЛКА"; vibrateError(); return; } } isAiLive = !isAiLive; btn.style.color = isAiLive ? "#4ade80" : "#fff"; if(isAiLive) { detectAI(); } else { stats.innerText = getT('ai_off'); if(uiCanvas) uiCanvas.getContext('2d').clearRect(0, 0, uiCanvas.width, uiCanvas.height); } };

async function detectAI() {
    const video = document.getElementById('v-stream'); const uiCanvas = document.getElementById('ui-canvas'); if(!isAiLive || !aiModel || !video || !video.srcObject) return; const uiCtx = uiCanvas.getContext('2d');
    try {
        const predictions = await aiModel.detect(video); if(uiCtx) uiCtx.clearRect(0, 0, uiCanvas.width, uiCanvas.height); let threshold = (document.getElementById('ai-sens') ? document.getElementById('ai-sens').value : 50) / 100; let focal = (document.getElementById('ai-focal') ? document.getElementById('ai-focal').value : 1.0); let pCount = 0, vCount = 0;
        predictions.forEach(p => {
            if(p.score < threshold) return; if(p.class === 'person') pCount++; if(['car','truck','bus', 'motorcycle'].includes(p.class)) vCount++;
            if(p.class === 'person' || ['car','truck','bus', 'motorcycle'].includes(p.class)) {
                const [x,y,w,h] = p.bbox; let realH = REAL_HEIGHTS[p.class] || 1.7; let dist = (realH * (video.videoHeight * focal)) / h; let scaleX = uiCanvas.width / video.videoWidth; let scaleY = uiCanvas.height / video.videoHeight;
                if(uiCtx) { uiCtx.strokeStyle = p.class === 'person' ? "#0f0" : "#f33"; uiCtx.lineWidth = 3; uiCtx.strokeRect(x * scaleX, y * scaleY, w * scaleX, h * scaleY); uiCtx.fillStyle = p.class === 'person' ? "#0f0" : "#f33"; uiCtx.font = "bold 16px monospace"; uiCtx.fillText(`${p.class} ~${Math.round(dist)}m`, x * scaleX, (y * scaleY) - 8); }
            }
        });
        let prefixP = currentLang === 'uk' ? 'ЛЮДИ:' : 'PEOPLE:'; let prefixV = currentLang === 'uk' ? 'ТЕХНІКА:' : 'VEHICLES:'; document.getElementById('ai-stats').innerHTML = `${prefixP} ${pCount} | ${prefixV} ${vCount}`;
    } catch(e) {}
    if(isAiLive) requestAnimationFrame(detectAI);
}

document.getElementById('btn-shield').onclick = async () => { await initSensors(); isShielded = !isShielded; let btn = document.getElementById('btn-shield'); btn.style.backgroundColor = isShielded ? "#500" : "#111"; btn.style.color = isShielded ? "#fff" : "#f44"; btn.innerText = isShielded ? getT('btn_shield_on') : getT('btn_shield_off'); };
document.getElementById('btn-shield-sound').onclick = async () => { await initSensors(); shieldSound = !shieldSound; let btn = document.getElementById('btn-shield-sound'); btn.innerText = shieldSound ? getT('btn_shield_snd_on') : getT('btn_shield_snd_off'); btn.style.color = shieldSound ? "#4ade80" : "#fff"; };

const OfflineWizard = {
    isActive: false, currentStep: 0,
    start() { if (confirm("⚠️ Супутники втрачено. Перейти в автономний режим?")) { this.isActive = true; this.step1_SetStart(); } },
    step1_SetStart() { this.currentStep = 1; isManualPosMode = true; showModule('mod-map'); document.getElementById('wizard-panel').style.display = 'block'; document.getElementById('wizard-btn-next').style.display = 'none'; },
    onStartPointSet() { if (this.currentStep === 1) this.step2_CheckDestination(); },
    step2_CheckDestination() { this.currentStep = 2; if (routePoints.length > 0) { document.getElementById('wizard-btn-next').style.display = 'block'; } },
    onDestinationSet() { if (this.currentStep === 2) { document.getElementById('wizard-btn-next').style.display = 'block'; } },
    next() { if (this.currentStep === 2) this.step3_AstroCalibrate(); },
    step3_AstroCalibrate() { this.currentStep = 3; showModule('mod-astro'); document.getElementById('wizard-btn-next').style.display = 'none'; },
    finish() { if (this.isActive) { this.isActive = false; document.getElementById('wizard-panel').style.display = 'none'; toggleOfflineTracking(true); } },
    cancel() { this.isActive = false; isManualPosMode = false; document.getElementById('wizard-panel').style.display = 'none'; }
};

let isOfflineTracking = false; let stepLength = 0.75; let lastAccel = 0;
function toggleOfflineTracking(forceStart = false) {
    let btn = document.getElementById('btn-pedometer');
    if (forceStart) { isOfflineTracking = true; if(btn) { btn.innerText = getT('btn_pedo_on'); btn.style.color = "#f97316"; btn.style.borderColor = "#f97316"; } if (!lastGoodGPS) alert(getT('alert_no_start')); else alert(getT('alert_pedo_on')); playSystemTone(800, 200); } 
    else { isOfflineTracking = false; if(btn) { btn.innerText = getT('btn_pedo_off'); btn.style.color = "#f1c40f"; btn.style.borderColor = "#f1c40f"; } alert(getT('alert_pedo_off')); playSystemTone(400, 200); }
    updatePositioningLevel();
}

window.addEventListener('devicemotion', function(event) {
    if (!isOfflineTracking || !lastGoodGPS) return; let accel = event.acceleration || event.accelerationIncludingGravity; if (!accel) return; let currentAccel = Math.sqrt(accel.x ** 2 + accel.y ** 2 + accel.z ** 2); let delta = Math.abs(currentAccel - lastAccel);
    if (delta > 2.5) { 
        const R = 6378137; const bearingRad = currentDisplayAngle * Math.PI / 180; const dn = stepLength * Math.cos(bearingRad); const de = stepLength * Math.sin(bearingRad); const dLat = dn / R; let newLat = lastGoodGPS.lat + (dLat * 180 / Math.PI); const dLon = de / (R * Math.cos(lastGoodGPS.lat * Math.PI / 180)); let newLon = lastGoodGPS.lon + (dLon * 180 / Math.PI); lastGoodGPS = { lat: newLat, lon: newLon };
        if (userMarker) { userMarker.setLatLng([newLat, newLon]); let tri = document.getElementById('user-tri'); if (tri) tri.style.borderBottomColor = '#f97316'; } updateTargetDistance(lastGoodGPS.lat, lastGoodGPS.lon); updateRoute();
    }
    lastAccel = currentAccel;
});

// ==========================================
// УЛЬТРА-ЕКОНОМ SOS (ЦИКЛ 5 ХВ / 5 ХВ)
// ==========================================
async function toggleSOS() {
    await initSensors(); isSosActive = !isSosActive; let btn = document.getElementById('btn-sos-toggle');
    if (!sosBlackout) {
        sosBlackout = document.createElement('div'); sosBlackout.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:#000; z-index:999999; display:none;";
        sosBlackout.onclick = () => { if(sosPhase === 2) triggerSosActive(); }; // Тап відновлює 5 хв крику
        document.body.appendChild(sosBlackout);
    }
    if (isSosActive) { btn.innerText = getT('btn_sos_off'); btn.style.background = "#111"; btn.style.color = "#f33"; btn.style.borderColor = "#f33"; btn.style.boxShadow = "none"; requestWakeLock(); triggerSosActive(); } 
    else { btn.innerText = getT('btn_sos_on'); btn.style.background = "#f33"; btn.style.color = "#fff"; btn.style.boxShadow = "0 0 20px #f33"; btn.style.borderColor = "#fff"; sosPhase = 0; clearTimeout(sosPhaseTimer); clearInterval(sosInterval); document.getElementById('sos-flasher').style.display = "none"; sosBlackout.style.display = "none"; releaseWakeLock(); }
}

function triggerSosActive() {
    if(!isSosActive) return; sosPhase = 1; clearTimeout(sosPhaseTimer); clearInterval(sosInterval); sosBlackout.style.display = "none"; document.getElementById('sos-flasher').style.display = "block";
    updateWifiName();
    let isRed = true;
    sosInterval = setInterval(() => {
        let flasher = document.getElementById('sos-flasher'); if (lastGoodGPS) { document.getElementById('sos-latlon').innerHTML = `${lastGoodGPS.lat.toFixed(5)}<br>${lastGoodGPS.lon.toFixed(5)}`; } else { document.getElementById('sos-latlon').innerText = getT('sos_no_gps'); }
        if (navigator.getBattery) { navigator.getBattery().then(b => { document.getElementById('sos-batt').innerText = Math.round(b.level * 100) + "%"; }); }
        flasher.style.background = isRed ? "#f00" : "#fff"; isRed = !isRed; playSystemTone(2500, 500); if(navigator.vibrate) navigator.vibrate([500]);
    }, 3000);
    sosPhaseTimer = setTimeout(triggerSosSleep, 300000); // 5 хвилин активності
}

function triggerSosSleep() {
    if(!isSosActive) return; sosPhase = 2; clearTimeout(sosPhaseTimer); clearInterval(sosInterval); document.getElementById('sos-flasher').style.display = "none"; sosBlackout.style.display = "block";
    sosInterval = setInterval(() => { playSystemTone(50, 10); }, 3000); // Системний імпульс проти засинання
    sosPhaseTimer = setTimeout(triggerSosActive, 300000); // 5 хвилин сну
}
