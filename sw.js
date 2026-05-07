const CACHE_NAME = 'ra-tactical-v10.38';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './leaflet.js',
    './leaflet.css',
    './tf.min.js',
    './coco-ssd.min.js'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] Збереження тактичного пакету v10.38');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Видалення старого кешу:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;

    // Кешування зовнішніх карт (додано mt0.google.com) та мізків ШІ на льоту
    if (req.url.includes('opentopomap.org') || req.url.includes('cartocdn.com') || req.url.includes('storage.googleapis.com') || req.url.includes('mt0.google.com')) {
        event.respondWith(
            caches.match(req).then((cachedResponse) => {
                if (cachedResponse) return cachedResponse; 
                return fetch(req).then((networkResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(req, networkResponse.clone());
                        return networkResponse;
                    });
                }).catch(() => {
                    console.log('[SW] Мережа недоступна для ресурсу:', req.url);
                });
            })
        );
        return;
    }

    event.respondWith(
        caches.match(req, { ignoreSearch: true }).then((response) => {
            return response || fetch(req);
        }).catch(() => {
            console.log('[SW] Офлайн режим: файл не знайдено.');
        })
    );
});
