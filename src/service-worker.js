// Define the files you want to cache
const cacheFiles = [
    '/',
    '/index.html',
    '/manifest.json',
    // Add other files from your src directory here
    '/src/TarotCardGenerator.js',
    '/src/TarotCardGenerator.css',
    '/src/App.js',
    '/src/index.js',
  ];
  
  // Set a unique cache name
  const cacheName = 'your-cache-name';
  
  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(cacheName).then((cache) => {
        return cache.addAll(cacheFiles);
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
  