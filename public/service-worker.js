const CACHE_NAME = 'tarot-card-generator-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/TarotCardGenerator.css',
        '/TarotCardGenerator.js',
        ...getImagesToCache(),
      ]);
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

function getImagesToCache() {
  const images = require.context('./src/images', false, /\.(png|jpe?g|gif|svg)$/);
  return images.keys().map(images);
}
