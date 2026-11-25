// Cambia la versione ogni volta che vuoi forzare la pulizia della cache.
const CACHE = 'menucasa-v4';

const APP_FILES = [
  './',
  './index.html',
  './recipes.js', './catalog.js',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './firebase-config.js',
  './data/piccolo.json',
  './data/grande.json'
];

const CDN_FILES = [
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Nunito:wght@400;600;700;800&display=swap'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      await cache.addAll(APP_FILES);
      await Promise.allSettled(CDN_FILES.map((url) => cache.add(url)));
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function putInCache(request, response) {
  if (response && (response.ok || response.type === 'opaque')) {
    const copy = response.clone();
    caches.open(CACHE).then((cache) => cache.put(request, copy));
  }
  return response;
}

self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin) {
    // App e menù: prima la rete (così il menù nuovo arriva subito), cache se offline.
    // ignoreSearch: i file dei menù vengono chiesti con cache: 'no-cache'
    e.respondWith(
      fetch(request)
        .then((response) => putInCache(request, response))
        .catch(() => caches.match(request, { ignoreSearch: true }).then((cached) =>
          cached || (request.mode === 'navigate' ? caches.match('./index.html') : undefined)
        ))
    );
  } else {
    e.respondWith(
      caches.match(request).then((cached) =>
        cached || fetch(request).then((response) => putInCache(request, response))
      )
    );
  }
});
