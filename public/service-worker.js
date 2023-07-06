self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('your-cache-name').then((cache) => {
      return cache.addAll([
        // Add the URLs of the assets you want to cache
        '/',
        '/index.html',
        '/manifest.json',
        '/css/style.css',
        '/js/app.js',
        '/images/logo.png',
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
