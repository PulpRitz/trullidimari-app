/* Cache shell minima: app-guscio disponibile anche con connessione debole/assente.
   Il check-in (upload foto + invio) richiede comunque rete al momento dell'invio. */

const CACHE_NAME = 'trullidimari-app-v31';
const SHELL_FILES = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './translations.js',
  './vendor/jsQR.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Solo GET, solo stesso-origine: mai intercettare le POST verso formsubmit.co
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => cached))
  );
});
