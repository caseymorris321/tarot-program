self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/logo192.png',
        '/logo512.png',
        '/favicon.ico',
        'src/TarotCardGenerator.js',
        'src/TarotCardGenerator.css',
        'src/TarotCards.js',
        'src/App.js',
        'src/index.js',
        'src/images/AceOfCups.png'
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
