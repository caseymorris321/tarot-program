const CACHE_NAME = 'tarot-card-generator-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/TarotCardGenerator.css',
  '/TarotCardGenerator.js',
  '/images/TarotDeckCover.png',
  '/images/loading.png',
  '/images/loading-multiple.png',
  // Add paths to other images used in your app
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
