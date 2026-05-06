// ==========================================
// СЛОВНИК (МУЛЬТИМОВНІСТЬ)
// ==========================================
let currentLang = 'uk'; 

const translations = {
    'uk': {
        btn_login: "ВХІД",
        err_access_denied: "❌ ДОСТУП ЗАБОРОНЕНО",
        title_qr_scan: "ОПТИЧНИЙ ДАНИЙ КОД",
        btn_close: "ЗАКРИТИ",
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
        btn_eco: "🌑 ЕКО-БЛЕКАУТ (ЕКРАН-КОМПАС)",
        astro_locked: "ЦІЛЬ ЗАХОПЛЕНО",
        astro_polar: "ПОЛЯРНА ЗІРКА",
        astro_hint: "ШУКАЙТЕ ПІВНІЧ",
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
        btn_shield_off: "АКТИВУВАТИ ЗАХИСТ",
        btn_shield_on: "ОХОРОНА АКТИВНА",
        btn_shield_snd_off: "ЗВУК СИРЕНИ: ВИМК",
        btn_shield_snd_on: "ЗВУК СИРЕНИ: УВІМК",
        
        man_title: "БОЙОВИЙ ПОСІБНИК",
        man_h1: "⚠️ 0. ТАКТИЧНА БЕЗПЕКА (3 РІВНІ)",
        man_p1: "Програма автоматично контролює ваш рівень безпеки:<br><strong>РІВЕНЬ 1 (МАКС):</strong> Працює Інтернет та GPS. Небезпека пеленгації (Радіослід).<br><strong>РІВЕНЬ 2 (СТЕЛС):</strong> Інтернет вимкнено, працює лише прийом GPS. Ви невидимі.<br><strong>РІВЕНЬ 3 (АВТОНОМНИЙ):</strong> РЕБ або підвал. Працює автономний компас, крокомір та Астро-навігація.",
        man_h2: "📍 1. МАРШРУТ ТА МАПА",
        man_p2: "<strong>Встановити ціль:</strong> Подвійний тап по мапі створює точку маршруту (максимум 10 точок).<br><strong>Ручна позиція:</strong> Якщо немає GPS (Рівень 3), натисніть 'Я ТУТ (БЕЗ GPS)' і клікніть по мапі, де ви стоїте. Ваш маркер стане помаранчевим — це стартова точка для крокоміра.",
        man_h3: "🧭 2. КАЛІБРУВАННЯ ТА КРОКОМІР",
        man_p3: "<strong>Калібрування 15м:</strong> Натисніть круглу кнопку '15м' на мапі і йдіть прямо. Це синхронізує магнітний компас із супутниковим вектором.<br><strong>Голос і Вібро:</strong> Голос попереджає про відхилення від маршруту. Вібро-поводир працює як 'сонар': чим точніше ви дивитесь на ціль, тим частіше вібрує телефон.<br><strong>Крокомір:</strong> В умовах РЕБ (без GPS) увімкніть його, і телефон буде рахувати кроки і рухати вашу помаранчеву фішку по мапі.",
        man_h4: "🌌 3. АСТРО-ТРЕНАЖЕР (Без GPS)",
        man_p4: "Використовуйте цей модуль для калібрування компаса по світилам.<br>1. Тримайте телефон вертикально перед собою і натисніть 'КАЛІБРУВАТИ ГОРИЗОНТ'.<br>2. Підніміть телефон у небо (~48 градусів). Червона стрілка-радар покаже, де знаходиться Полярна зірка та Ковш.<br>3. Коли екран спалахне 'ЦІЛЬ ЗАХОПЛЕНО', натисніть кнопку фіксації Зірки або Сонця. Ваш компас ідеально відкалібровано на Північ.",
        man_h5: "💬 4. ОФЛАЙН РАЦІЯ ТА ЩИТ",
        man_p5: "<strong>Рація:</strong> Напишіть текст, створіть QR-код. Ваш напарник може просканувати його екраном свого смартфона. Код зашифровано.<br><strong>Щит:</strong> Увімкніть охорону і покладіть телефон. Будь-який рух або вібрація землі викличуть тривогу або вібро-сигнал.",
        
        eco_touch: "ТОРКНІТЬСЯ ЕКРАНА<br>(3 сек)",
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
        alert_no_start: "Увага: Немає початкової точки. Перейдіть на мапу і встановіть її кнопкою Я ТУТ (БЕЗ GPS).",
        alert_pedo_on: "✅ АВТОНОМНА НАВІГАЦІЯ УВІМКНЕНА!\nТелефон рахуватиме кроки по вібрації і зміщуватиме вас на мапі.",
        alert_pedo_off: "Офлайн трекінг зупинено.",
        alert_man_pos: "📍 РУЧНИЙ РЕЖИМ (БЕЗ GPS):\nТапніть по мапі в тому місці, де ви зараз знаходитесь. Ваш маркер стане оранжевим.",
        astro_sun_fix: "☀️ Сонце зафіксовано. Компас відкалібровано!",
        astro_star_fix: "⭐ Зірка зафіксована. Компас відкалібровано на Північ!",
        astro_hor_fix: "⚖️ Горизонт зафіксовано",
        astro_hor_next: "Тепер підніміть телефон вгору (на висоту ~48°) для пошуку зірок.",
        lbl_meters_short: "м",
        cal_done: "КАЛІБР: ГОТОВО",
        alert_no_gps_cal: "Немає сигналу GPS!"
    },
    'en': {
        btn_login: "LOGIN",
        err_access_denied: "❌ ACCESS DENIED",
        title_qr_scan: "OPTICAL DATA CODE",
        btn_close: "CLOSE",
        menu_map: "📍 ROUTE / MAP",
        menu_compass: "🧭 COMPASS / GUIDE",
        menu_astro: "🌌 ASTRO / NO GPS",
        menu_optics: "👁 OPTICS / AI",
        menu_radio: "💬 TEXT / QR RADIO",
        menu_shield: "🛡 SECURITY / SHIELD",
        menu_manual: "📖 INSTRUCTIONS",
        menu_power_off: "🛑 SHUTDOWN APP",
        menu_destroy: "💥 DESTROY DATA",
        hud_gps_search: "GPS: SEARCHING...",
        hud_alt: "ALT: --- m",
        hud_level_analysis: "LEVEL: ANALYSIS",
        hud_speed: "SPD: 0.0 km/h",
        hud_target: "TGT: --- m",
        btn_map_manual: "📍 I AM HERE (NO GPS)",
        btn_map_transport: "🚙 TRANSPORT",
        btn_map_share: "📤 SHARE QR",
        btn_map_follow: "🎯 FOLLOW",
        btn_map_del_last: "✖ DELETE LAST",
        btn_map_clear: "🗑 CLEAR ROUTE",
        btn_map_layer: "🗺 LAYER",
        btn_map_cache: "💾 CACHE 2x2 km",
        comp_acc: "ACC: --",
        comp_alt: "ALT: --- m",
        btn_pedo_off: "👣 PEDOMETER: OFF",
        btn_pedo_on: "👣 PEDOMETER: ON",
        btn_cal_walk: "CALIBRATE BY WALKING (15m)",
        comp_target_none: "TARGET: NONE",
        btn_voice_off: "VOICE: OFF",
        btn_voice_on: "VOICE: ON",
        btn_vibro_off: "GUIDE (VIBRO): OFF",
        btn_vibro_on: "GUIDE (VIBRO): ON",
        lbl_voice_int: "HINT INTERVAL:",
        lbl_sec: "sec",
        btn_eco: "🌑 ECO BLACKOUT (SCREEN-COMPASS)",
        astro_locked: "TARGET LOCKED",
        astro_polar: "POLARIS",
        astro_hint: "LOOK FOR NORTH",
        btn_astro_cal: "⚖ CALIBRATE HORIZON (0°)",
        btn_astro_sun: "☀ SUN",
        btn_astro_star: "⭐ STAR (LOCK)",
        ai_off: "AI INACTIVE",
        lbl_cam_zoom: "CAMERA ZOOM",
        lbl_ai_sens: "AI SENSITIVITY (%)",
        lbl_ai_focal: "AI RANGE (FOCUS)",
        lbl_ir_sens: "IR / MOTION SENSITIVITY",
        btn_scan_cam: "🔴 SCAN FROM CAMERA",
        btn_scan_photo: "🖼 READ FROM PHOTO",
        btn_cam_off: "🔴 CAMERA",
        btn_ai_scan: "🤖 AI SCAN",
        btn_ir: "🔭 IR FILTER",
        btn_motion: "📉 MOTION DETECTOR",
        chat_title: "OFFLINE RADIO",
        chat_desc: "Enter text and generate an encrypted QR code to share with your partner.",
        btn_chat_cam: "📷 TURN ON CAMERA TO READ",
        chat_left: "Remaining: 200 chars",
        btn_chat_gen: "GENERATE ENCRYPTED QR",
        btn_chat_clear: "CLEAR TEXT",
        shield_title: "SECURITY / SHIELD",
        btn_shield_off: "ACTIVATE SHIELD",
        btn_shield_on: "SHIELD ACTIVE",
        btn_shield_snd_off: "SIREN SOUND: OFF",
        btn_shield_snd_on: "SIREN SOUND: ON",
        
        man_title: "COMBAT MANUAL",
        man_h1: "⚠️ 0. TACTICAL SECURITY (3 LEVELS)",
        man_p1: "The app automatically monitors your security level:<br><strong>LEVEL 1 (MAX):</strong> Internet & GPS active. Danger of radio tracing.<br><strong>LEVEL 2 (STEALTH):</strong> Internet off, GPS receiving only. You are invisible.<br><strong>LEVEL 3 (AUTONOMOUS):</strong> EW or basement. Uses autonomous compass, pedometer & Astro-navigation.",
        man_h2: "📍 1. ROUTE & MAP",
        man_p2: "<strong>Set Target:</strong> Double-tap map to create a waypoint (max 10).<br><strong>Manual Position:</strong> If no GPS (Level 3), tap 'I AM HERE (NO GPS)' and click the map. Your marker turns orange — this is your pedometer starting point.",
        man_h3: "🧭 2. CALIBRATION & PEDOMETER",
        man_p3: "<strong>15m Calibration:</strong> Tap the round '15m' button on the map and walk straight. This syncs the magnetic compass with GPS vector.<br><strong>Voice & Vibro:</strong> Voice warns of deviations. Vibro works as a sonar: the more precise you look at the target, the faster it vibrates.<br><strong>Pedometer:</strong> In EW conditions (no GPS), turn it on and the phone counts steps to move your orange marker.",
        man_h4: "🌌 3. ASTRO-TRAINER (No GPS)",
        man_p4: "Use this module to calibrate the compass by celestial bodies.<br>1. Hold phone vertically and press 'CALIBRATE HORIZON'.<br>2. Lift phone to the sky (~48 degrees). The red radar arrow shows Polaris and the Big Dipper.<br>3. When screen flashes 'TARGET LOCKED', press the Star or Sun fix button. Compass perfectly aligned to North.",
        man_h5: "💬 4. OFFLINE RADIO & SHIELD",
        man_p5: "<strong>Radio:</strong> Write text, create a QR code. Your partner scans it. Encrypted.<br><strong>Shield:</strong> Turn on security and put the phone down. Any movement or ground vibration triggers an alarm.",

        eco_touch: "TOUCH SCREEN<br>(3 sec)",
        btn_eco_exit: "EXIT BLACKOUT",
        wiz_title: "OFFLINE MODE",
        wiz_text: "Hint text",
        btn_wiz_cancel: "CANCEL",
        btn_wiz_next: "NEXT ➡",
        
        lvl3: "LEVEL 3: AUTONOMOUS",
        lvl2: "LEVEL 2: STEALTH (GPS)",
        lvl1: "LEVEL 1: MAX (RADIO TRACE)",
        gps_delay: "⚠️ GPS DELAY",
        gps_manual: "📍 MANUAL MODE",
        gps_lost: "❌ GPS JAMMED (>200m)",
        gps_ok: "GPS: OK",
        gps_offline: "❌ GPS LOST (OFFLINE)",
        voice_dist: "Distance",
        voice_meters: "meters",
        voice_turn: "Turn around! You are moving away.",
        voice_right: "More to the right.",
        voice_left: "More to the left.",
        alert_no_start: "Warning: No start point. Go to map and set it via I AM HERE (NO GPS).",
        alert_pedo_on: "✅ AUTONOMOUS NAVIGATION ON!\nPhone will count steps by vibration and move you on the map.",
        alert_pedo_off: "Offline tracking stopped.",
        alert_man_pos: "📍 MANUAL MODE (NO GPS):\nTap the map where you are. Your marker will turn orange.",
        astro_sun_fix: "☀️ Sun locked. Compass calibrated!",
        astro_star_fix: "⭐ Star locked. Compass calibrated to North!",
        astro_hor_fix: "⚖️ Horizon locked",
        astro_hor_next: "Now lift the phone up (to ~48° altitude) to search for stars.",
        lbl_meters_short: "m",
        cal_done: "CAL: DONE",
        alert_no_gps_cal: "No GPS signal!"
    },
    'pt': {
        btn_login: "ENTRAR",
        err_access_denied: "❌ ACESSO NEGADO",
        title_qr_scan: "CÓDIGO DE DADOS ÓPTICO",
        btn_close: "FECHAR",
        menu_map: "📍 ROTA / MAPA",
        menu_compass: "🧭 BÚSSOLA / GUIA",
        menu_astro: "🌌 ASTRO / SEM GPS",
        menu_optics: "👁 ÓPTICA / IA",
        menu_radio: "💬 TEXTO / RÁDIO QR",
        menu_shield: "🛡 SEGURANÇA / ESCUDO",
        menu_manual: "📖 INSTRUÇÕES",
        menu_power_off: "🛑 DESLIGAR APLICATIVO",
        menu_destroy: "💥 DESTRUIR DADOS",
        hud_gps_search: "GPS: BUSCANDO...",
        hud_alt: "ALT: --- m",
        hud_level_analysis: "NÍVEL: ANÁLISE",
        hud_speed: "VEL: 0.0 km/h",
        hud_target: "ALVO: --- m",
        btn_map_manual: "📍 ESTOU AQUI (SEM GPS)",
        btn_map_transport: "🚙 TRANSPORTE",
        btn_map_share: "📤 COMPARTILHAR QR",
        btn_map_follow: "🎯 SEGUIR",
        btn_map_del_last: "✖ EXCLUIR ÚLTIMO",
        btn_map_clear: "🗑 LIMPAR ROTA",
        btn_map_layer: "🗺 CAMADA",
        btn_map_cache: "💾 CACHE 2x2 km",
        comp_acc: "PRE: --",
        comp_alt: "ALT: --- m",
        btn_pedo_off: "👣 PEDÔMETRO: DESLIGADO",
        btn_pedo_on: "👣 PEDÔMETRO: LIGADO",
        btn_cal_walk: "CALIBRAR ANDANDO (15m)",
        comp_target_none: "ALVO: NENHUM",
        btn_voice_off: "VOZ: DESLIGADA",
        btn_voice_on: "VOZ: LIGADA",
        btn_vibro_off: "GUIA (VIBRO): DESL",
        btn_vibro_on: "GUIA (VIBRO): LIG",
        lbl_voice_int: "INTERVALO DE DICAS:",
        lbl_sec: "seg",
        btn_eco: "🌑 BLACKOUT ECO (TELA-BÚSSOLA)",
        astro_locked: "ALVO BLOQUEADO",
        astro_polar: "POLARIS",
        astro_hint: "PROCURE O NORTE",
        btn_astro_cal: "⚖ CALIBRAR HORIZONTE (0°)",
        btn_astro_sun: "☀ SOL",
        btn_astro_star: "⭐ ESTRELA (FIXAR)",
        ai_off: "IA INATIVA",
        lbl_cam_zoom: "ZOOM DA CÂMERA",
        lbl_ai_sens: "SENSIBILIDADE IA (%)",
        lbl_ai_focal: "ALCANCE IA (FOCO)",
        lbl_ir_sens: "IR / SENSIBILIDADE MOV",
        btn_scan_cam: "🔴 LER DA CÂMERA",
        btn_scan_photo: "🖼 LER DA FOTO",
        btn_cam_off: "🔴 CÂMERA",
        btn_ai_scan: "🤖 IA SCAN",
        btn_ir: "🔭 FILTRO IR",
        btn_motion: "📉 DETECTOR MOVIMENTO",
        chat_title: "RÁDIO OFFLINE",
        chat_desc: "Insira texto e gere um QR criptografado para compartilhar com seu parceiro.",
        btn_chat_cam: "📷 LIGAR CÂMERA PARA LER",
        chat_left: "Restante: 200 carac.",
        btn_chat_gen: "GERAR QR CRIPTOGRAFADO",
        btn_chat_clear: "LIMPAR TEXTO",
        shield_title: "SEGURANÇA / ESCUDO",
        btn_shield_off: "ATIVAR ESCUDO",
        btn_shield_on: "ESCUDO ATIVO",
        btn_shield_snd_off: "SOM SIRENE: DESL",
        btn_shield_snd_on: "SOM SIRENE: LIG",
        
        man_title: "MANUAL DE COMBATE",
        man_h1: "⚠️ 0. SEGURANÇA TÁTICA (3 NÍVEIS)",
        man_p1: "O app monitora automaticamente sua segurança:<br><strong>NÍVEL 1 (MÁX):</strong> Internet e GPS ativos. Perigo de rastreamento de rádio.<br><strong>NÍVEL 2 (FURTIVO):</strong> Internet desligada, apenas recebe GPS. Você está invisível.<br><strong>NÍVEL 3 (AUTÔNOMO):</strong> Guerra Eletrônica (EW). Usa bússola autônoma, pedômetro e Astro-navegação.",
        man_h2: "📍 1. ROTA E MAPA",
        man_p2: "<strong>Definir Alvo:</strong> Toque duplo no mapa para criar ponto (máx 10).<br><strong>Posição Manual:</strong> Sem GPS (Nível 3), toque em 'ESTOU AQUI (SEM GPS)' e clique no mapa. O marcador fica laranja — é o início do pedômetro.",
        man_h3: "🧭 2. CALIBRAÇÃO E PEDÔMETRO",
        man_p3: "<strong>Calibração 15m:</strong> Pressione o botão redondo '15m' no mapa e ande reto. Isso sincroniza a bússola com o GPS.<br><strong>Voz e Vibro:</strong> A voz avisa sobre desvios. O Vibro age como sonar: quanto mais preciso no alvo, mais rápido vibra.<br><strong>Pedômetro:</strong> Em condições EW, ligue-o e o telefone contará passos para mover seu marcador laranja.",
        man_h4: "🌌 3. ASTRO-TREINADOR (Sem GPS)",
        man_p4: "Calibre a bússola pelos astros.<br>1. Segure o telefone verticalmente e pressione 'CALIBRAR HORIZONTE'.<br>2. Levante o telefone para o céu (~48 graus). A seta vermelha mostra Polaris e a Ursa Maior.<br>3. Quando piscar 'ALVO BLOQUEADO', pressione Fixar Estrela ou Sol. Bússola perfeitamente alinhada ao Norte.",
        man_h5: "💬 4. RÁDIO OFFLINE E ESCUDO",
        man_p5: "<strong>Rádio:</strong> Escreva um texto, crie um QR. Seu parceiro escaneia. Criptografado.<br><strong>Escudo:</strong> Ligue a segurança e pouse o telefone. Qualquer movimento ou vibração no solo aciona um alarme.",

        eco_touch: "TOQUE NA TELA<br>(3 seg)",
        btn_eco_exit: "SAIR DO BLACKOUT",
        wiz_title: "MODO OFFLINE",
        wiz_text: "Texto de dica",
        btn_wiz_cancel: "CANCELAR",
        btn_wiz_next: "PRÓXIMO ➡",
        
        lvl3: "NÍVEL 3: AUTÔNOMO",
        lvl2: "NÍVEL 2: FURTIVO (GPS)",
        lvl1: "NÍVEL 1: MÁX (RASTRO RÁDIO)",
        gps_delay: "⚠️ ATRASO GPS",
        gps_manual: "📍 MODO MANUAL",
        gps_lost: "❌ GPS BLOQUEADO (>200m)",
        gps_ok: "GPS: OK",
        gps_offline: "❌ GPS PERDIDO (OFFLINE)",
        voice_dist: "Distância",
        voice_meters: "metros",
        voice_turn: "Vire-se! Você está se afastando.",
        voice_right: "Mais para a direita.",
        voice_left: "Mais para a esquerda.",
        alert_no_start: "Aviso: Sem ponto de partida. Vá ao mapa e defina em ESTOU AQUI (SEM GPS).",
        alert_pedo_on: "✅ NAVEGAÇÃO AUTÔNOMA LIGADA!\nTelefone contará passos por vibração e moverá você no mapa.",
        alert_pedo_off: "Rastreamento offline parado.",
        alert_man_pos: "📍 MODO MANUAL (SEM GPS):\nToque no mapa onde você está. Seu marcador ficará laranja.",
        astro_sun_fix: "☀️ Sol fixado. Bússola calibrada!",
        astro_star_fix: "⭐ Estrela fixada. Bússola calibrada para o Norte!",
        astro_hor_fix: "⚖️ Horizonte fixado",
        astro_hor_next: "Agora levante o telefone (para ~48° de altitude) para procurar estrelas.",
        lbl_meters_short: "m",
        cal_done: "CAL: PRONTO",
        alert_no_gps_cal: "Sem sinal GPS!"
    }
};

function getT(key) { return translations[currentLang][key] || key; }

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-lang-' + lang).classList.add('active');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        let key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key]; 
        }
    });

    updatePositioningLevel();
    if(isOfflineTracking) {
        document.getElementById('btn-pedometer').innerText = getT('btn_pedo_on');
    } else {
        document.getElementById('btn-pedometer').innerText = getT('btn_pedo_off');
    }
    document.getElementById('btn-guide-voice').innerText = isVoiceEnabled ? getT('btn_voice_on') : getT('btn_voice_off');
    document.getElementById('btn-guide').innerText = guideMode ? getT('btn_vibro_on') : getT('btn_vibro_off');
    document.getElementById('btn-shield').innerText = isShielded ? getT('btn_shield_on') : getT('btn_shield_off');
    document.getElementById('btn-shield-sound').innerText = shieldSound ? getT('btn_shield_snd_on') : getT('btn_shield_snd_off');
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
const CRYPTO_KEY = "RA_STORM_2026"; 

let audioCtx = null, osc = null, gain = null;
let lastGoodGPS = null, watchId = null;
let hardwareHeading = 0, compassOffset = 0, currentBearing = null; 
let currentPitch = 0; 
let horizonBeta = 90;
let currentSpeedKmh = 0; 

// НОВА ЗМІННА ДЛЯ СИНХРОНІЗАЦІЇ ДИСТАНЦІЇ
let currentDistanceToTarget = null;

let currentDisplayAngle = 0;
let isFirstCompassUpdate = true;
let hasAbsoluteOrientation = false; 

let targetDisplayAngle = 0;
let isCompassAnimating = false;

let isScanning = false, isShielded = false, shieldSound = false, irMode = false;
let aiModel = null, isAiLive = false, isScanningQR = false;
let currentVideoTrack = null; 
let currentAstroTrack = null;

let map = null, userMarker = null;
let routePoints = [], routeMarkers = [], routeLine = null;
let isWalkCalibrating = false, walkStartPoint = null;
let topoLayer = null, darkLayer = null, currentLayer = 'topo';

let isMapFollowing = true;
let tracePoints = [];
let traceLineLayer = null;

let guideMode = false, isVoiceEnabled = false;
let lastVibroTime = 0, lastVoiceTime = 0, lastGpsPing = 0;
let isSignalLost = true, firstFix = true;
let lastGpsProcessTime = Date.now(); 
let gpsLostTimer = null; 

let isEcoMode = false, ecoPeekTimer = null, isEcoPeeking = false;
let isManualPosMode = false;

let wakeLock = null;
let isTransportMode = false;
let lastGpsCoordsForTransport = null;

const REAL_HEIGHTS = { 'person': 1.7, 'car': 1.5, 'truck': 3.0, 'bus': 3.0, 'motorcycle': 1.2 };

// ==========================================
// 2. ІНІЦІАЛІЗАЦІЯ, ЗВУК ТА ЕКРАН
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

function updatePositioningLevel() {
    const levelEl = document.getElementById('pos-level');
    let btnMan = document.getElementById('btn-manual-pos');
    let btnPed = document.getElementById('btn-pedometer');

    if (!levelEl) return;

    let isLevel3 = isOfflineTracking || OfflineWizard.isActive || isSignalLost || isManualPosMode;

    if (isLevel3) {
        levelEl.innerText = getT('lvl3');
        levelEl.style.color = "#f1c40f";
        levelEl.style.borderColor = "#f1c40f";
        if (btnMan) { btnMan.style.opacity = '1'; btnMan.style.pointerEvents = 'auto'; }
        if (btnPed) { btnPed.style.opacity = '1'; btnPed.style.pointerEvents = 'auto'; }
    } else if (!navigator.onLine) {
        levelEl.innerText = getT('lvl2');
        levelEl.style.color = "#4ade80";
        levelEl.style.borderColor = "#4ade80";
        if (btnMan) { btnMan.style.opacity = '0.3'; btnMan.style.pointerEvents = 'none'; }
        if (btnPed) { btnPed.style.opacity = '0.3'; btnPed.style.pointerEvents = 'none'; }
    } else {
        levelEl.innerText = getT('lvl1');
        levelEl.style.color = "#f33";
        levelEl.style.borderColor = "#f33";
        if (btnMan) { btnMan.style.opacity = '0.3'; btnMan.style.pointerEvents = 'none'; }
        if (btnPed) { btnPed.style.opacity = '0.3'; btnPed.style.pointerEvents = 'none'; }
    }
}

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
    if (!audioCtx) return; 
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

function speakText(text) {
    if (!isVoiceEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text);
    
    if (currentLang === 'en') utterance.lang = 'en-US';
    else if (currentLang === 'pt') utterance.lang = 'pt-PT';
    else utterance.lang = 'uk-UA';
    
    utterance.rate = 1.1; 
    window.speechSynthesis.speak(utterance);
}

function triggerDestroyProtocol() {
    if (confirm("УВАГА! ЗНИЩИТИ ВЕСЬ МАРШРУТ ТА ДАНІ ПРОГРАМИ? / DESTROY ALL DATA?")) {
        routePoints = []; tracePoints = []; 
        updateRoute();
        if(traceLineLayer && map) map.removeLayer(traceLineLayer);
        localStorage.removeItem('savedRoute');
        currentBearing = null;
        currentDistanceToTarget = null;
        document.getElementById('tc-dist').innerText = "--- м";
        document.getElementById('eco-dist').innerText = "--- м";
        let hudDistEl = document.getElementById('hud-dist'); if(hudDistEl) hudDistEl.innerText = getT('hud_target');
        closeNav();
        if(navigator.vibrate) navigator.vibrate([500, 100, 500, 100, 1000]); 
    }
}

function killApp() {
    if (confirm("ВИМКНУТИ ДОДАТОК? / SHUTDOWN?")) {
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

async function showModule(id) {
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    if (id === 'mod-map') {
        requestWakeLock();
        if (map) { setTimeout(() => { map.invalidateSize(); if (lastGoodGPS) map.setView([lastGoodGPS.lat, lastGoodGPS.lon], 18); }, 200); }
    } else { releaseWakeLock(); }
    
    if (id !== 'mod-eye' && id !== 'mod-chat' && id !== 'mod-astro') turnOffCamera();
    
    if (id === 'mod-astro') {
        const video = document.getElementById('v-astro-stream');
        if (!video.srcObject) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}});
                video.srcObject = stream;
                currentAstroTrack = stream.getVideoTracks()[0];
            } catch(e) {}
        }
    } else {
        const videoAstro = document.getElementById('v-astro-stream');
        if (videoAstro && videoAstro.srcObject) { 
            videoAstro.srcObject.getTracks().forEach(t => t.stop()); 
            videoAstro.srcObject = null; 
            currentAstroTrack = null; 
        }
    }
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
            if(btnChatCam) btnChatCam.innerText = getT('btn_chat_cam');
        }
    } catch(e) {}
    isAiLive = false; isScanning = false; isScanningQR = false;
    let btnCam = document.getElementById('btn-cam'); if(btnCam) btnCam.innerText = getT('btn_cam_off');
    let btnAiCam = document.getElementById('btn-ai-cam'); if(btnAiCam) { btnAiCam.innerText = getT('btn_ai_scan'); btnAiCam.style.color = "#fff"; }
    let btnScanQR = document.getElementById('btn-scan-qr'); if(btnScanQR) btnScanQR.style.color = "#0cf";
    let btnScan = document.getElementById('btn-scan'); if(btnScan) { btnScan.innerText = getT('btn_motion'); btnScan.style.color = "#fff"; }
    let aiStats = document.getElementById('ai-stats'); if(aiStats) aiStats.innerText = getT('ai_off');
    const canvas = document.getElementById('ui-canvas');
    if(canvas) canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height);
}

// ==========================================
// 4. МАПА ТА QR-РАЦІЯ
// ==========================================
function toggleMapMenu() {
    const m = document.getElementById('map-controls-panel'); const btn = document.getElementById('btn-map-menu');
    if (m.style.display === 'none') { m.style.display = 'flex'; btn.style.color = '#0cf'; btn.style.borderColor = '#0cf'; } 
    else { m.style.display = 'none'; btn.style.color = '#fff'; btn.style.borderColor = '#333'; }
}

function initMap() {
    if (typeof L === 'undefined') return;
    try {
        topoLayer = L.tileLayer('http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', { maxZoom: 20 });
        darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 });
        map = L.map('map-container', { zoomControl: false, doubleClickZoom: false }).setView([49.0, 31.0], 6);
        topoLayer.addTo(map);

        let pressTimer;
        map.on('mousedown contextmenu', (e) => {
            if (isManualPosMode) {
                lastGoodGPS = { lat: e.latlng.lat, lon: e.latlng.lng };
                if(!userMarker) {
                    userMarker = L.marker([lastGoodGPS.lat, lastGoodGPS.lon], { zIndexOffset: 1000, icon: L.divIcon({ className: 'u-icon', html: `<div id="user-tri" style="border-bottom-color: #f97316 !important;"></div>`, iconSize: [16, 35], iconAnchor: [8, 35] }) }).addTo(map);
                } else {
                    userMarker.setLatLng([lastGoodGPS.lat, lastGoodGPS.lon]);
                    let tri = document.getElementById('user-tri');
                    if (tri) tri.style.borderBottomColor = '#f97316'; 
                }
                isManualPosMode = false;
                isSignalLost = true; 
                if(routePoints.length > 0) { currentBearing = calcBearing(lastGoodGPS.lat, lastGoodGPS.lon, routePoints[0].lat, routePoints[0].lng); }
                if(navigator.vibrate) navigator.vibrate(100); playSystemTone(800, 100);
                let stat = document.getElementById('gps-status');
                if (stat) { stat.innerText = getT('gps_manual'); stat.style.color = "#f97316"; }
                updateTargetDistance(lastGoodGPS.lat, lastGoodGPS.lon);
                return;
            }

            pressTimer = setTimeout(() => {
                if(routePoints.length >= 10) return;
                if(navigator.vibrate) navigator.vibrate(50);
                playNavTone(800, 100);
                routePoints.push(e.latlng); updateRoute();
            }, 700); 
        });
        
        map.on('mouseup mousemove dragstart', () => { clearTimeout(pressTimer); });

        map.on('dblclick', (e) => {
            if (isManualPosMode) return;
            if(routePoints.length >= 10) return;
            if(navigator.vibrate) navigator.vibrate(50);
            routePoints.push(e.latlng); updateRoute();
        });
        
        map.on('dragstart', () => { isMapFollowing = false; document.getElementById('btn-follow').style.color = '#fff'; });

        const saved = localStorage.getItem('savedRoute');
        if(saved) { routePoints = JSON.parse(saved); updateRoute(); }
    } catch(e) {}
}

document.getElementById('btn-manual-pos').onclick = () => {
    isManualPosMode = true;
    alert(getT('alert_man_pos'));
    toggleMapMenu();
};

function updateRoute() {
    if(!map) return;
    routeMarkers.forEach(m => map.removeLayer(m)); routeMarkers = [];
    if(routeLine) map.removeLayer(routeLine);

    if (routePoints.length === 0) {
        document.getElementById('route-info').innerText = getT('comp_target_none');
        document.getElementById('tc-dist').innerText = "--- м";
        document.getElementById('eco-dist').innerText = "--- м";
        let hudDistEl = document.getElementById('hud-dist'); if(hudDistEl) hudDistEl.innerText = getT('hud_target');
        currentBearing = null; 
        currentDistanceToTarget = null;
        localStorage.removeItem('savedRoute'); return;
    }

    routePoints.forEach((p, i) => { 
        let m = L.circleMarker(p, { color: i === 0 ? '#0f0' : '#f0f', radius: 8, fillOpacity: 1 }).addTo(map); 
        routeMarkers.push(m); 
    });
    
    if(routePoints.length > 1) { 
        routeLine = L.polyline(routePoints, { color: '#f0f', weight: 3, dashArray: '5, 10' }).addTo(map); 
    }
    
    let targetStr = currentLang === 'uk' ? "ЦІЛЬ: ТОЧКА 1 З" : (currentLang === 'pt' ? "ALVO: PONTO 1 DE" : "TGT: POINT 1 OF");
    document.getElementById('route-info').innerText = `${targetStr} ${routePoints.length}`;
    
    if(lastGoodGPS && routePoints.length > 0) {
        updateTargetDistance(lastGoodGPS.lat, lastGoodGPS.lon);
    }
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
    if (routePoints.length === 0) return;
    let data = JSON.stringify(routePoints.map(p => [p.lat, p.lng]));
    document.getElementById('qrcode-box').innerHTML = '';
    if(typeof QRCode !== 'undefined') {
        new QRCode(document.getElementById('qrcode-box'), { text: data, width: 220, height: 220, colorDark : "#000000", colorLight : "#ffffff" });
        document.getElementById('qr-modal').style.display = 'flex'; toggleMapMenu();
    }
};

function updateCharCount() {
    let el = document.getElementById('chat-input');
    let counter = document.getElementById('char-counter');
    if(el && counter) {
        let left = 200 - el.value.length;
        let prefix = currentLang === 'uk' ? 'Залишилось:' : (currentLang === 'pt' ? 'Restante:' : 'Remaining:');
        counter.innerText = `${prefix} ${left}`;
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
    if (!text) return;
    
    document.getElementById('qrcode-box').innerHTML = '';
    if(typeof QRCode !== 'undefined') {
        let safeText = "SEC:" + encryptData(text);
        new QRCode(document.getElementById('qrcode-box'), { text: safeText, width: 220, height: 220, colorDark : "#000000", colorLight : "#ffffff" });
        document.getElementById('qr-modal').style.display = 'flex';
    }
}

function clearChat() { 
    document.getElementById('chat-input').value = ''; 
    updateCharCount();
}

function closeQR() { document.getElementById('qr-modal').style.display = 'none'; }

// ==========================================
// БЛОК СКАНУВАННЯ (ОПТИКА, ФОТО ТА НОВИЙ ЧАТ)
// ==========================================

document.getElementById('btn-chat-cam').onclick = async () => {
    const video = document.getElementById('v-chat-stream');
    let btn = document.getElementById('btn-chat-cam');
    
    if (video.srcObject) { 
        video.srcObject.getTracks().forEach(t => t.stop()); 
        video.srcObject = null;
        video.style.display = 'none';
        btn.innerText = getT('btn_chat_cam');
        isScanningQR = false;
    } else {
        btn.innerText = "ЗАПУСК...";
        try {
            const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}});
            video.srcObject = stream;
            video.play();
            video.style.display = 'block';
            btn.innerText = "⏹ " + getT('btn_cam_off');
            isScanningQR = true;
            scanQRChatFrame(); 
        } catch(e) { 
            btn.innerText = "❌"; 
            setTimeout(() => { btn.innerText = getT('btn_chat_cam'); }, 3000); 
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
            document.getElementById('btn-chat-cam').innerText = getT('btn_chat_cam');
            video.srcObject.getTracks().forEach(t => t.stop()); 
            video.srcObject = null;
            video.style.display = 'none';
            processDecodedQR(code.data);
            return;
        }
    }
    requestAnimationFrame(scanQRChatFrame);
}


document.getElementById('btn-scan-qr').onclick = () => {
    const video = document.getElementById('v-stream');
    if (!video.srcObject) return;
    if (typeof jsQR === 'undefined') return;
    
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
            }
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

function processDecodedQR(data) {
    if(navigator.vibrate) navigator.vibrate([500, 200, 500]); 

    if (data.startsWith("SEC:")) {
        try {
            let msg = decryptData(data.substring(4)); 
            alert("📥:\n\n" + msg);
        } catch (err) {}
        return;
    }
    if (data.startsWith("CHAT:")) {
        try { let msg = decodeURIComponent(data.substring(5)); alert("📥:\n\n" + msg); } catch (err) {} return;
    }
    if (data.startsWith("MSG:")) {
        alert("📥:\n\n" + data.substring(4)); return;
    }
    
    try {
        let pts = JSON.parse(data);
        if (Array.isArray(pts)) {
            routePoints = pts.map(p => L.latLng(p[0], p[1])); updateRoute();
            showModule('mod-map'); 
            return;
        }
    } catch(e) {}
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
document.getElementById('btn-clear-map').onclick = () => { 
    routePoints = []; 
    updateRoute(); 
    toggleMapMenu(); 
};

document.getElementById('btn-cache-map').onclick = async () => {
    if (!map || !lastGoodGPS) return;
    let btn = document.getElementById('btn-cache-map'); btn.style.color = "#f33";
    try {
        const c = [lastGoodGPS.lat, lastGoodGPS.lon]; const offset = 0.012; 
        const pts = [ [c[0]+offset, c[1]+offset], [c[0]-offset, c[1]-offset], [c[0]+offset, c[1]-offset], [c[0]-offset, c[1]+offset] ];
        let origZoom = map.getZoom(); let origCenter = map.getCenter();
        for (let p of pts) { map.setView(p, 15, {animate: false}); await new Promise(r => setTimeout(r, 1500)); }
        map.setView(origCenter, origZoom, {animate: false}); 
        btn.style.color = "#4ade80"; if(navigator.vibrate) navigator.vibrate(200); playSystemTone(800, 100);
        setTimeout(() => { btn.style.color = "var(--glow)"; toggleMapMenu(); }, 4000);
    } catch(e) { btn.style.color = "#f33"; vibrateError(); }
};

let btnTransport = document.getElementById('btn-transport');
if(btnTransport) {
    btnTransport.onclick = () => {
        isTransportMode = !isTransportMode;
        if (isTransportMode) {
            btnTransport.style.color = '#4ade80'; btnTransport.style.borderColor = '#4ade80';
            compassOffset = 0; 
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

// НОВА СПІЛЬНА ФУНКЦІЯ КАЛІБРУВАННЯ 15м
function startWalkCalibration() {
    if (!lastGoodGPS) {
        alert(getT('alert_no_gps_cal'));
        return;
    }
    isWalkCalibrating = true;
    walkStartPoint = { lat: lastGoodGPS.lat, lon: lastGoodGPS.lon };
    
    let calBtn1 = document.getElementById('btn-cal-walk');
    let calBtn2 = document.getElementById('btn-map-cal'); 
    
    if(calBtn1) { calBtn1.innerText = "15 " + getT('lbl_meters_short'); calBtn1.style.color = "#f1c40f"; }
    if(calBtn2) { calBtn2.innerText = "15"; calBtn2.style.color = "#f1c40f"; }
    
    if(navigator.vibrate) navigator.vibrate([100, 100]); 
    playSystemTone(500, 100);
}

// СИНХРОНІЗОВАНЕ ОНОВЛЕННЯ ДИСТАНЦІЇ (КРОКОМІР + GPS)
function updateTargetDistance(lat, lon) {
    if (routePoints.length > 0 && map) {
        let d = map.distance([lat, lon], routePoints[0]);
        currentDistanceToTarget = d;
        
        let distEl = document.getElementById('tc-dist'); if(distEl) distEl.innerText = Math.round(d) + " m";
        let ecoDistEl = document.getElementById('eco-dist'); if(ecoDistEl) ecoDistEl.innerText = Math.round(d) + " m";
        
        let prefixTgt = currentLang === 'uk' ? 'ЦІЛЬ:' : (currentLang === 'pt' ? 'ALVO:' : 'TGT:');
        let hudDistEl = document.getElementById('hud-dist'); if(hudDistEl) hudDistEl.innerText = `${prefixTgt} ${Math.round(d)} m`;
        
        if(d <= 15) { 
            routePoints.shift(); updateRoute(); 
            if(navigator.vibrate) navigator.vibrate([500,200,500]); playSystemTone(1200, 300); 
        } else { 
            currentBearing = calcBearing(lat, lon, routePoints[0].lat, routePoints[0].lng); 
        }
    } else {
        currentDistanceToTarget = null;
        currentBearing = null;
    }
}

function initGPS() {
    if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(pos => {
            const now = Date.now();
            const { latitude: lat, longitude: lon, speed: spd, accuracy: acc, altitude: alt } = pos.coords;
            
            currentSpeedKmh = spd ? (spd * 3.6) : 0;
            
            if (firstFix && acc > 50) return; 

            if (tracePoints.length > 0 && map) {
                let lastP = tracePoints[tracePoints.length - 1];
                let jumpDist = map.distance(lastP, [lat, lon]);
                if (jumpDist > 100 && acc > 25) return; 
            }

            lastGpsProcessTime = now; 

            let altText = (alt !== null && alt !== undefined) ? Math.round(alt) + " m" : "--- m";
            let tcAltEl = document.getElementById('tc-alt');
            let hudAltEl = document.getElementById('alt-val');
            let prefixAlt1 = currentLang === 'uk' ? 'ВИСОТА:' : (currentLang === 'pt' ? 'ALT:' : 'ALT:');
            let prefixAlt2 = currentLang === 'uk' ? 'ВИС:' : (currentLang === 'pt' ? 'ALT:' : 'ALT:');

            if (tcAltEl) tcAltEl.innerText = `${prefixAlt1} ${altText}`;
            if (hudAltEl) hudAltEl.innerText = `${prefixAlt2} ${altText}`;

            let stat = document.getElementById('gps-status');
            
            if(acc > 200) {
                if (!gpsLostTimer && !isSignalLost && !isManualPosMode) {
                    gpsLostTimer = setTimeout(() => {
                        if(stat) { stat.innerText = getT('gps_lost'); stat.style.color = "#f33"; }
                        if(navigator.vibrate) navigator.vibrate([500, 200, 500, 200, 1000]); 
                        playSystemTone(300, 500); 
                        isSignalLost = true; 
                        OfflineWizard.start(); 
                    }, 5000);
                }
            } else {
                if (gpsLostTimer) { clearTimeout(gpsLostTimer); gpsLostTimer = null; }
                
                if(stat && !isManualPosMode) { stat.innerText = getT('gps_ok'); stat.style.color = "#4ade80"; }
                if(isSignalLost) { 
                    if(navigator.vibrate) navigator.vibrate([100, 100, 100]); 
                    playSystemTone(1200, 200); 
                    isSignalLost = false; 
                } 
                if (guideMode && !isEcoMode && now - lastGpsPing > 3000) { if(navigator.vibrate) navigator.vibrate(30); lastGpsPing = now; }
            }

            // Оновлюємо дистанцію через нову спільну функцію
            updateTargetDistance(lat, lon);

            if (isEcoMode && (now - lastGpsProcessTime < 3000)) return; 

            if (isTransportMode && lastGpsCoordsForTransport) {
                if (currentSpeedKmh > 4) { 
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
            
            let prefixSpd = currentLang === 'uk' ? 'ШВИД:' : (currentLang === 'pt' ? 'VEL:' : 'SPD:');
            let speedEl = document.getElementById('speed-val'); if(speedEl) speedEl.innerText = `${prefixSpd} ${currentSpeedKmh.toFixed(1)} km/h`;
            
            let coordsEl = document.getElementById('tc-coords-small'); if(coordsEl) coordsEl.innerHTML = `LAT: ${lat.toFixed(5)}<br>LON: ${lon.toFixed(5)}`;
            
            let prefixAcc = currentLang === 'uk' ? 'ТОЧН:' : (currentLang === 'pt' ? 'PRE:' : 'ACC:');
            let accEl = document.getElementById('tc-acc'); if(accEl) accEl.innerText = `${prefixAcc} ${Math.round(acc)}m`;

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
            } else if(userMarker) { 
                userMarker.setLatLng([lat, lon]); 
                if (!isOfflineTracking && !isManualPosMode) {
                    let tri = document.getElementById('user-tri');
                    if(tri) tri.style.borderBottomColor = ''; 
                }
            }

            if(isWalkCalibrating && walkStartPoint && map) {
                let d = map.distance([walkStartPoint.lat, walkStartPoint.lon], [lat, lon]);
                let remaining = Math.max(0, 15 - Math.round(d));
                
                let calBtn1 = document.getElementById('btn-cal-walk');
                let calBtn2 = document.getElementById('btn-map-cal');

                if(calBtn1) calBtn1.innerText = remaining + " " + getT('lbl_meters_short');
                if(calBtn2) calBtn2.innerText = remaining;

                if(d >= 15) {
                    compassOffset = (calcBearing(walkStartPoint.lat, walkStartPoint.lon, lat, lon) - hardwareHeading + 360) % 360;
                    isWalkCalibrating = false;
                    
                    if(calBtn1) { calBtn1.innerText = getT('cal_done'); calBtn1.style.color = "#4ade80"; }
                    if(calBtn2) { calBtn2.innerText = "OK"; calBtn2.style.color = "#4ade80"; }
                    
                    if(navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 500]); 
                    playSystemTone(800, 200);
                    
                    setTimeout(() => { 
                        if(calBtn1) { calBtn1.innerText = getT('btn_cal_walk'); calBtn1.style.color = "#fff"; }
                        if(calBtn2) { calBtn2.innerText = "15м"; calBtn2.style.color = "#f1c40f"; }
                    }, 5000);
                }
            }
        }, err => {
            let stat = document.getElementById('gps-status');
            if(stat && !isManualPosMode) { stat.innerText = getT('gps_offline'); stat.style.color = "#f33"; }
            if(!isSignalLost && !isManualPosMode) { 
                if(navigator.vibrate) navigator.vibrate([500, 200, 500, 200, 1000]); 
                playSystemTone(300, 500); 
                isSignalLost = true; 
                OfflineWizard.start(); 
            }
        }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }); 
    }
}

// === ОНОВЛЕНИЙ БЛОК КОМПАСА ТА ГОЛОСУ ===
function handleOrientation(e) {
    if (isTransportMode && !e.isGpsSimulated) return;

    let hw = null;
    currentPitch = e.beta || 0;

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
        targetDisplayAngle = trueH;
        isFirstCompassUpdate = false;
        updateCompassUI(); 
    } else {
        targetDisplayAngle = trueH;
        
        if (!isCompassAnimating) {
            isCompassAnimating = true;
            requestAnimationFrame(animateCompass);
        }
    }

    if (!isEcoMode) {
        let pitch = e.beta || 0; 
        let clinoBar = document.getElementById('clino-bar');
        if(clinoBar) { 
            let boundedPitch = Math.max(-90, Math.min(90, pitch)); 
            clinoBar.style.bottom = (100 - (((boundedPitch + 90) / 180) * 100)) + '%'; 
        }
    }
}

function animateCompass() {
    let delta = targetDisplayAngle - currentDisplayAngle;
    delta = ((delta % 360) + 540) % 360 - 180; 

    if (Math.abs(delta) < 0.5) {
        currentDisplayAngle = targetDisplayAngle;
        updateCompassUI(); 
        isCompassAnimating = false; 
        return;
    }

    // НОВА ЛОГІКА ІНТЕРПОЛЯЦІЇ ДЛЯ ТРАНСПОРТУ (згладжування ривків стрілки)
    let smoothing = isTransportMode ? 0.02 : 0.15;
    currentDisplayAngle += delta * smoothing; 
    
    updateCompassUI();

    if (isCompassAnimating) {
        requestAnimationFrame(animateCompass);
    }
}

function updateCompassUI() {
    let displayDeg = Math.round(((currentDisplayAngle % 360) + 360) % 360);
    
    if (!isEcoMode) {
        let ring = document.getElementById('tc-ring'); 
        let deg = document.getElementById('tc-deg');
        if(ring) ring.style.transform = `rotate(${-currentDisplayAngle}deg)`;
        if(deg) deg.innerText = displayDeg + "°"; 
        
        let tri = document.getElementById('user-tri'); 
        if(tri) tri.style.transform = `rotate(${currentDisplayAngle}deg)`;
    }

    if (currentBearing !== null) {
        let relAngle = currentBearing - currentDisplayAngle;
        let relMod = (((currentBearing - displayDeg) % 360) + 360) % 360;

        if (!isEcoMode) {
            let arr = document.getElementById('tc-arrow');
            if (arr) { 
                arr.style.display = 'block'; 
                arr.style.transform = `rotate(${relAngle}deg)`; 
                arr.style.borderBottomColor = 'var(--danger)';
            }
        }

        if (isEcoMode && isEcoPeeking) {
            document.querySelectorAll('.eco-edge').forEach(el => el.style.opacity = '0');
            if (relMod >= 315 || relMod < 45) document.getElementById('eco-top').style.opacity = '1';
            else if (relMod >= 45 && relMod < 135) document.getElementById('eco-right').style.opacity = '1';
            else if (relMod >= 135 && relMod < 225) document.getElementById('eco-bottom').style.opacity = '1';
            else if (relMod >= 225 && relMod < 315) document.getElementById('eco-left').style.opacity = '1';
        }

        let astroMod = document.getElementById('mod-astro');
        if (astroMod && astroMod.classList.contains('active')) {
            if (currentDistanceToTarget !== null) {
                document.getElementById('astro-dist-text').innerText = Math.round(currentDistanceToTarget) + " m";
            }
            
            let elevation = currentPitch - horizonBeta;
            let astroHint = document.getElementById('astro-hint');
            if (astroHint) {
                let prefixAz = currentLang === 'uk' ? 'АЗИМУТ' : (currentLang === 'pt' ? 'AZIMUTE' : 'AZIMUTH');
                let prefixAlt = currentLang === 'uk' ? 'ВИСОТА' : (currentLang === 'pt' ? 'ALTITUDE' : 'ALTITUDE');
                astroHint.innerHTML = `${prefixAz}: ${displayDeg}° | ${prefixAlt}: ${Math.round(elevation)}°<br><span style="color:#f1c40f; font-size:0.8rem;">(${getT('astro_hint')})</span>`;
            }

            let astroStencil = document.getElementById('astro-stencil');
            let astroStencilFixed = document.getElementById('astro-stencil-fixed'); 
            let aLeft = document.getElementById('astro-dir-left');
            let aRight = document.getElementById('astro-dir-right');
            let aTop = document.getElementById('astro-dir-top');
            let aBottom = document.getElementById('astro-dir-bottom');
            let aMsg = document.getElementById('astro-target-msg');
            let astroPointer = document.getElementById('astro-pointer');
            
            if (astroStencil && astroStencilFixed) {
                let diffAz = (((0 - displayDeg) % 360) + 540) % 360 - 180; 
                let diffPitch = 48 - elevation; 

                let screenW = window.innerWidth || 360;
                let pDeg = screenW / 50; 
                
                let tx = diffAz * pDeg; 
                let ty = -diffPitch * pDeg; 

                let d = new Date();
                let month = d.getMonth() + 1;
                let hour = d.getHours() + (d.getMinutes() / 60);
                let siderealAngle = (month * 30 + hour * 15) % 360;

                astroStencilFixed.style.transform = `translate(${tx}px, ${ty}px)`;
                
                astroStencil.style.transformOrigin = "50% 50%";
                astroStencil.style.transform = `translate(${tx}px, ${ty}px) rotate(${-siderealAngle}deg)`;

                let opAz = Math.min(1, Math.max(0, (Math.abs(diffAz) - 10) / 20));
                let opPitch = Math.min(1, Math.max(0, (Math.abs(diffPitch) - 10) / 20));

                aLeft.style.opacity = diffAz > 10 ? opAz : '0';
                aRight.style.opacity = diffAz < -10 ? opAz : '0';
                aTop.style.opacity = diffPitch > 10 ? opPitch : '0';
                aBottom.style.opacity = diffPitch < -10 ? opPitch : '0';

                if (Math.abs(diffAz) <= 5 && Math.abs(diffPitch) <= 5) {
                    astroStencil.classList.add('astro-target-locked');
                    astroStencilFixed.classList.add('astro-target-locked');
                    aMsg.style.display = 'block';
                    if (astroPointer) astroPointer.style.display = 'none';
                } else {
                    astroStencil.classList.remove('astro-target-locked');
                    astroStencilFixed.classList.remove('astro-target-locked');
                    aMsg.style.display = 'none';
                    if (astroPointer) {
                        astroPointer.style.display = 'block';
                        let angleRad = Math.atan2(diffPitch, diffAz);
                        let arrowDeg = 90 - (angleRad * 180 / Math.PI);
                        astroPointer.style.transform = `translate(-50%, -50%) rotate(${arrowDeg}deg) translateY(-100px)`;
                    }
                }
            }
        }

        // ПОВОДИР (Вібро та Голос працює від єдиної змінної currentDistanceToTarget)
        if ((guideMode || isVoiceEnabled) && (!isSignalLost || isManualPosMode)) {
            const timeNow = Date.now();
            let relativeAngle = (((currentBearing - displayDeg) % 360) + 540) % 360 - 180; 
            let absDiff = Math.abs(relativeAngle);
            
            if (guideMode) {
                if (absDiff <= 5) {
                    if (timeNow - lastVibroTime > 200) { if (navigator.vibrate) navigator.vibrate(100); lastVibroTime = timeNow; }
                } else if (absDiff <= 15) {
                    if (timeNow - lastVibroTime > 600) { if (navigator.vibrate) navigator.vibrate(50); lastVibroTime = timeNow; }
                } else if (absDiff <= 30) {
                    if (timeNow - lastVibroTime > 1500) { if (navigator.vibrate) navigator.vibrate(30); lastVibroTime = timeNow; }
                }
            }

            let voiceIntervalMs = parseInt(document.getElementById('voice-interval') ? document.getElementById('voice-interval').value : 10) * 1000;
            
            if (isVoiceEnabled && (timeNow - lastVoiceTime > voiceIntervalMs)) {
                if (currentDistanceToTarget !== null) {
                    let d = Math.round(currentDistanceToTarget);
                    let txtDist = getT('voice_dist');
                    let txtMeters = getT('voice_meters');

                    if (isEcoMode) {
                        speakText(`${txtDist} ${d} ${txtMeters}.`);
                        lastVoiceTime = timeNow;
                    } else if (currentSpeedKmh > 1.5 || isManualPosMode) {
                        if (absDiff > 120) {
                            speakText(`${getT('voice_turn')} ${txtDist} ${d} ${txtMeters}.`);
                            lastVoiceTime = timeNow;
                        } 
                        else if (absDiff > 25) {
                            let dirText = relativeAngle > 0 ? getT('voice_right') : getT('voice_left');
                            speakText(`${dirText} ${txtDist} ${d} ${txtMeters}.`);
                            lastVoiceTime = timeNow;
                        }
                    }
                }
            }
        }
    } else {
        if (!isEcoMode) {
            let relAngle = 0 - currentDisplayAngle;
            let arr = document.getElementById('tc-arrow');
            if (arr) { arr.style.display = 'block'; arr.style.transform = `rotate(${relAngle}deg)`; }
        }
        if (isEcoMode) document.querySelectorAll('.eco-edge').forEach(el => el.style.opacity = '0');
        
        let astroMod = document.getElementById('mod-astro');
        if (astroMod && astroMod.classList.contains('active')) {
            document.getElementById('astro-dist-text').innerText = getT('comp_target_none');
            document.getElementById('astro-dir-left').style.opacity = '0';
            document.getElementById('astro-dir-right').style.opacity = '0';
            document.getElementById('astro-dir-top').style.opacity = '0';
            document.getElementById('astro-dir-bottom').style.opacity = '0';
            
            let elevation = currentPitch - horizonBeta;
            let astroHint = document.getElementById('astro-hint');
            if (astroHint) {
                let prefixAz = currentLang === 'uk' ? 'АЗИМУТ' : (currentLang === 'pt' ? 'AZIMUTE' : 'AZIMUTH');
                let prefixAlt = currentLang === 'uk' ? 'ВИСОТА' : (currentLang === 'pt' ? 'ALTITUDE' : 'ALTITUDE');
                astroHint.innerHTML = `${prefixAz}: ${displayDeg}° | ${prefixAlt}: ${Math.round(elevation)}°<br><span style="color:#f1c40f; font-size:0.8rem;">(${getT('astro_hint')})</span>`;
            }

            let astroStencil = document.getElementById('astro-stencil');
            let astroStencilFixed = document.getElementById('astro-stencil-fixed');
            let aMsg = document.getElementById('astro-target-msg');
            let astroPointer = document.getElementById('astro-pointer');
            
            if (astroStencil && astroStencilFixed) {
                let diffAz = (((0 - displayDeg) % 360) + 540) % 360 - 180;
                let diffPitch = 48 - elevation; 

                let screenW = window.innerWidth || 360;
                let pDeg = screenW / 50; 
                
                let tx = diffAz * pDeg; 
                let ty = -diffPitch * pDeg; 

                let d = new Date();
                let month = d.getMonth() + 1;
                let hour = d.getHours() + (d.getMinutes() / 60);
                let siderealAngle = (month * 30 + hour * 15) % 360;

                astroStencilFixed.style.transform = `translate(${tx}px, ${ty}px)`;
                
                astroStencil.style.transformOrigin = "50% 50%";
                astroStencil.style.transform = `translate(${tx}px, ${ty}px) rotate(${-siderealAngle}deg)`;

                let opAz = Math.min(1, Math.max(0, (Math.abs(diffAz) - 10) / 20));
                let opPitch = Math.min(1, Math.max(0, (Math.abs(diffPitch) - 10) / 20));

                let aLeft = document.getElementById('astro-dir-left');
                let aRight = document.getElementById('astro-dir-right');
                let aTop = document.getElementById('astro-dir-top');
                let aBottom = document.getElementById('astro-dir-bottom');

                aLeft.style.opacity = diffAz > 10 ? opAz : '0';
                aRight.style.opacity = diffAz < -10 ? opAz : '0';
                aTop.style.opacity = diffPitch > 10 ? opPitch : '0';
                aBottom.style.opacity = diffPitch < -10 ? opPitch : '0';

                if (Math.abs(diffAz) <= 5 && Math.abs(diffPitch) <= 5) {
                    astroStencil.classList.add('astro-target-locked');
                    astroStencilFixed.classList.add('astro-target-locked');
                    aMsg.style.display = 'block';
                    if (astroPointer) astroPointer.style.display = 'none';
                } else {
                    astroStencil.classList.remove('astro-target-locked');
                    astroStencilFixed.classList.remove('astro-target-locked');
                    aMsg.style.display = 'none';
                    if (astroPointer) {
                        astroPointer.style.display = 'block';
                        let angleRad = Math.atan2(diffPitch, diffAz);
                        let arrowDeg = 90 - (angleRad * 180 / Math.PI);
                        astroPointer.style.transform = `translate(-50%, -50%) rotate(${arrowDeg}deg) translateY(-100px)`;
                    }
                }
            }
        }
    }
}

// Кнопка перемикання Голосу
document.getElementById('btn-guide-voice').onclick = async () => { 
    isVoiceEnabled = !isVoiceEnabled; 
    let btn = document.getElementById('btn-guide-voice'); 
    let settings = document.getElementById('voice-settings');
    btn.innerText = isVoiceEnabled ? getT('btn_voice_on') : getT('btn_voice_off'); 
    btn.style.color = isVoiceEnabled ? "#4ade80" : "#ccc"; 
    
    if (isVoiceEnabled) {
        if(settings) settings.style.display = 'block';
    } else {
        if(settings) settings.style.display = 'none';
    }
};

let voiceSlider = document.getElementById('voice-interval');
if (voiceSlider) {
    voiceSlider.oninput = (e) => {
        let valEl = document.getElementById('voice-interval-val');
        if (valEl) valEl.innerText = e.target.value;
    };
}

// Кнопка перемикання Вібро
document.getElementById('btn-guide').onclick = async () => { 
    await initSensors(); guideMode = !guideMode; 
    let btn = document.getElementById('btn-guide'); 
    btn.innerText = guideMode ? getT('btn_vibro_on') : getT('btn_vibro_off'); 
    btn.style.color = guideMode ? "#4ade80" : "#558"; 
};

// --- КАЛІБРУВАННЯ ГОРИЗОНТУ ---
document.getElementById('btn-astro-horizon').onclick = () => {
    horizonBeta = currentPitch;
    if(navigator.vibrate) navigator.vibrate([100, 50, 100]);
    playSystemTone(800, 100);
    alert(`${getT('astro_hor_fix')} (${Math.round(horizonBeta)}°).\n${getT('astro_hor_next')}`);
};

function toggleEcoMode(state) { 
    isEcoMode = state; 
    const overlay = document.getElementById('eco-overlay'); 
    if (state) { 
        overlay.style.display = 'block'; 
        if(navigator.vibrate) navigator.vibrate(100); 
        playSystemTone(500, 100); 
    } else { 
        overlay.style.display = 'none'; 
        isEcoPeeking = false; 
    } 
}

// НОВА ЛОГІКА ТАПУ В ЕКО-РЕЖИМІ (Озвучка відстані)
function peekEco() { 
    if (!isEcoMode || isEcoPeeking) return; 
    isEcoPeeking = true; 
    document.getElementById('eco-content').style.opacity = '1'; 
    document.getElementById('eco-touch-area').style.color = '#000'; 
    if(navigator.vibrate) navigator.vibrate(50); 
    playSystemTone(800, 50); 
    
    if (isVoiceEnabled && currentDistanceToTarget !== null) {
        speakText(`${getT('voice_dist')} ${Math.round(currentDistanceToTarget)} ${getT('voice_meters')}.`);
    }
    
    clearTimeout(ecoPeekTimer); 
    ecoPeekTimer = setTimeout(() => { 
        document.getElementById('eco-content').style.opacity = '0'; 
        document.querySelectorAll('.eco-edge').forEach(el => el.style.opacity = '0'); 
        document.getElementById('eco-touch-area').style.color = '#222'; 
        isEcoPeeking = false; 
    }, 3000); 
}

// ==========================================
// 6. АСТРО-КАЛІБРУВАННЯ
// ==========================================
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

document.getElementById('btn-astro-sun').onclick = () => {
    if(!lastGoodGPS) return;
    let az = getSunAzimuth(lastGoodGPS.lat, lastGoodGPS.lon, new Date());
    compassOffset = (az - hardwareHeading + 360) % 360; 
    if(navigator.vibrate) navigator.vibrate([200, 100, 200]); 
    playSystemTone(800, 100);
    alert(getT('astro_sun_fix'));
    OfflineWizard.finish();
};

document.getElementById('btn-astro-star').onclick = () => {
    compassOffset = (0 - hardwareHeading + 360) % 360; 
    if(navigator.vibrate) navigator.vibrate([200, 100, 200]); 
    playSystemTone(800, 100);
    alert(getT('astro_star_fix'));
    OfflineWizard.finish();
};

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
            btn.innerText = "⏹ " + getT('btn_cam_off'); btn.style.color = "#f33";
        } catch(e) { btn.innerText = "❌"; vibrateError(); setTimeout(() => { btn.innerText = getT('btn_cam_off'); }, 3000); }
    }
};

document.getElementById('btn-ir').onclick = () => { irMode = !irMode; let btn = document.getElementById('btn-ir'); const video = document.getElementById('v-stream'); btn.style.color = irMode ? "#f33" : "#fff"; if(video) video.style.filter = irMode ? "contrast(3) brightness(0.4) grayscale(1)" : "none"; };
document.getElementById('btn-scan').onclick = async () => { await initSensors(); isScanning = !isScanning; let btn = document.getElementById('btn-scan'); btn.style.color = isScanning ? "#f33" : "#fff"; };

document.getElementById('btn-ai-cam').onclick = async () => {
    const video = document.getElementById('v-stream'); const uiCanvas = document.getElementById('ui-canvas');
    if (!video || !video.srcObject) { vibrateError(); return; }
    let btn = document.getElementById('btn-ai-cam'); let stats = document.getElementById('ai-stats');
    if (!aiModel) { 
        stats.innerText = "ЗАВАНТАЖЕННЯ ШІ...";
        try { aiModel = await cocoSsd.load(); } catch (e) { stats.innerText = "❌ ПОМИЛКА"; vibrateError(); return; }
    }
    isAiLive = !isAiLive; btn.style.color = isAiLive ? "#4ade80" : "#fff";
    if(isAiLive) { detectAI(); } else { stats.innerText = getT('ai_off'); if(uiCanvas) uiCanvas.getContext('2d').clearRect(0, 0, uiCanvas.width, uiCanvas.height); }
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
                    uiCtx.fillText(`${p.class} ~${Math.round(dist)}m`, x * scaleX, (y * scaleY) - 8);
                }
            }
        });
        
        let prefixP = currentLang === 'uk' ? 'ЛЮДИ:' : (currentLang === 'pt' ? 'PESSOAS:' : 'PEOPLE:');
        let prefixV = currentLang === 'uk' ? 'ТЕХНІКА:' : (currentLang === 'pt' ? 'VEÍCULOS:' : 'VEHICLES:');
        document.getElementById('ai-stats').innerHTML = `${prefixP} ${pCount} | ${prefixV} ${vCount}`;
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
    btn.innerText = isShielded ? getT('btn_shield_on') : getT('btn_shield_off');
};

document.getElementById('btn-shield-sound').onclick = async () => { 
    await initSensors(); shieldSound = !shieldSound; 
    let btn = document.getElementById('btn-shield-sound'); 
    btn.innerText = shieldSound ? getT('btn_shield_snd_on') : getT('btn_shield_snd_off'); 
    btn.style.color = shieldSound ? "#4ade80" : "#fff"; 
};

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

// ==========================================
// 9. МЕНЕДЖЕР АВТОНОМНОГО РЕЖИМУ ТА КРОКОМІР
// ==========================================
const OfflineWizard = {
    isActive: false,
    currentStep: 0,

    start() {
        if (confirm("⚠️ Супутники втрачено. Перейти в автономний режим (Крокомір + Астро)? / ENTER OFFLINE MODE?")) {
            this.isActive = true;
            this.step1_SetStart();
        }
    },

    step1_SetStart() {
        this.currentStep = 1;
        isManualPosMode = true; 
        showModule('mod-map');
        
        document.getElementById('wizard-panel').style.display = 'block';
        document.getElementById('wizard-btn-next').style.display = 'none';
    },

    onStartPointSet() {
        if (this.currentStep === 1) this.step2_CheckDestination();
    },

    step2_CheckDestination() {
        this.currentStep = 2;
        if (routePoints.length > 0) {
            document.getElementById('wizard-btn-next').style.display = 'block';
        }
    },

    onDestinationSet() {
        if (this.currentStep === 2) {
            document.getElementById('wizard-btn-next').style.display = 'block';
        }
    },

    next() {
        if (this.currentStep === 2) this.step3_AstroCalibrate();
    },

    step3_AstroCalibrate() {
        this.currentStep = 3;
        showModule('mod-astro'); 
        document.getElementById('wizard-btn-next').style.display = 'none';
    },

    finish() {
        if (this.isActive) {
            this.isActive = false;
            document.getElementById('wizard-panel').style.display = 'none';
            toggleOfflineTracking(true); 
        }
    },

    cancel() {
        this.isActive = false;
        isManualPosMode = false;
        document.getElementById('wizard-panel').style.display = 'none';
    }
};

// --- ФОНОВИЙ КРОКОМІР ---
let isOfflineTracking = false;
let stepLength = 0.75; 
let lastAccel = 0;

function toggleOfflineTracking(forceStart = false) {
    let btn = document.getElementById('btn-pedometer');
    if (forceStart) {
        isOfflineTracking = true;
        if(btn) { btn.innerText = getT('btn_pedo_on'); btn.style.color = "#f97316"; btn.style.borderColor = "#f97316"; }
        if (!lastGoodGPS) alert(getT('alert_no_start'));
        else alert(getT('alert_pedo_on'));
        playSystemTone(800, 200);
    } else {
        isOfflineTracking = false;
        if(btn) { btn.innerText = getT('btn_pedo_off'); btn.style.color = "#f1c40f"; btn.style.borderColor = "#f1c40f"; }
        alert(getT('alert_pedo_off'));
        playSystemTone(400, 200);
    }
    updatePositioningLevel();
}

window.addEventListener('devicemotion', function(event) {
    if (!isOfflineTracking || !lastGoodGPS) return;

    let accel = event.acceleration || event.accelerationIncludingGravity;
    if (!accel) return;

    let currentAccel = Math.sqrt(accel.x ** 2 + accel.y ** 2 + accel.z ** 2);
    let delta = Math.abs(currentAccel - lastAccel);

    if (delta > 2.5) { 
        const R = 6378137;
        const bearingRad = currentDisplayAngle * Math.PI / 180;
        
        const dn = stepLength * Math.cos(bearingRad);
        const de = stepLength * Math.sin(bearingRad);
        
        const dLat = dn / R;
        let newLat = lastGoodGPS.lat + (dLat * 180 / Math.PI);
        
        const dLon = de / (R * Math.cos(lastGoodGPS.lat * Math.PI / 180));
        let newLon = lastGoodGPS.lon + (dLon * 180 / Math.PI);
        
        lastGoodGPS = { lat: newLat, lon: newLon };
        if (userMarker) {
            userMarker.setLatLng([newLat, newLon]);
            let tri = document.getElementById('user-tri');
            if (tri) tri.style.borderBottomColor = '#f97316'; 
        }
        
        // Оновлюємо дистанцію при кожному кроці!
        updateTargetDistance(lastGoodGPS.lat, lastGoodGPS.lon);
        updateRoute();
    }
    lastAccel = currentAccel;
});
