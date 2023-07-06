const CACHE_NAME = 'tarot-card-generator-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/TarotCardGenerator.css',
  '/TarotCardGenerator.js',
  '/images/TarotDeckCover.png',
  '/images/loading.png',
  '/images/loading-multiple.png',
  // Add URLs of other images used in your app
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
      // Return the cached response if available, or fetch from network
      return response || fetch(event.request);
    })
  );
});
