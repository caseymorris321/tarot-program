self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        'src/TarotCardGenerator.css',
        'src/TarotCardGenerator.js',
        'src/TarotCards.js',
        'src/App.js',
        'src/index.js',
        'src\images\AceOfCups.png'
        // Add other assets like CSS, JavaScript files, and images
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
