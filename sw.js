// Offline support: caches the app on first visit so it opens without internet.
// Bump VERSION whenever you upload a changed index.html so phones pick up the update.
const VERSION = 'acid-base-v1';
const APP_FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-32.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const isPage = e.request.mode === 'navigate';
  e.respondWith(
    // Pages: try the network first (fresh content), fall back to cache offline.
    // Everything else (styling library, fonts, icons): cache first, then network.
    isPage
      ? fetch(e.request).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(e.request, copy)); return res; })
          .catch(() => caches.match(e.request).then((r) => r || caches.match('./index.html')))
      : caches.match(e.request).then((cached) => cached || fetch(e.request).then((res) => {
          const copy = res.clone(); caches.open(VERSION).then((c) => c.put(e.request, copy)); return res;
        }))
  );
});
