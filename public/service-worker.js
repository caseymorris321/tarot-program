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
      .then((response) => {
        // If the response is found in the cache, return it
        if (response) {
          return response;
        }

        // If the response is not found in the cache, fetch it from the network
        return fetch(event.request)
          .then((networkResponse) => {
            // If the network response is valid, add it to the cache and return it
            if (networkResponse && networkResponse.status === 200) {
              const clonedResponse = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(event.request, clonedResponse));
            }

            return networkResponse;
          })
          .catch((error) => {
            console.error('Error fetching resource:', error);
          });
      })
  );
});
