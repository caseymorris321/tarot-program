self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('tarot-card-generator-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/favicon.ico',
        '/logo192.png',
        '/logo512.png',
        '/TarotDeckCover.png',
        '/loading.gif',
        '/multiple-loading.gif',
        '/TarotCards.js',
        '/TarotCardGenerator.css',
        // Add other assets and dependencies here
      ]);
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
