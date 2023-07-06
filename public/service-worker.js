self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('your-cache-name').then((cache) => {
      return cache.addAll([
        // Add the URLs of the assets you want to cache
        '/',
        '/index.html',
        '/manifest.json',
        '/src/TarotCardGenerator.css',
        '/src/App.js',
        'src/TarotCardGenerator.js',
        'src/index.js',
        'src/TarotCards.js',
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
