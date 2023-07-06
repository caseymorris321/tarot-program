const CACHE_NAME = 'tarot-card-generator-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/css/main.chunk.css',
  '/static/js/bundle.js',
  '/static/js/vendors~main.chunk.js',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png',
  '/manifest.json',
  // Add other URLs of files you want to cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
