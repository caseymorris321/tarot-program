importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

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
  const preCache = async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(urlsToCache);
  };

  event.waitUntil(preCache());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

const networkFirstStrategy = new workbox.strategies.NetworkFirst();
workbox.routing.registerRoute('/', networkFirstStrategy);
workbox.routing.registerRoute('/index.html', networkFirstStrategy);
workbox.routing.registerRoute('/TarotCardGenerator.css', networkFirstStrategy);
workbox.routing.registerRoute('/TarotCardGenerator.js', networkFirstStrategy);
workbox.routing.registerRoute('/images/TarotDeckCover.png', networkFirstStrategy);
workbox.routing.registerRoute('/images/loading.png', networkFirstStrategy);
workbox.routing.registerRoute('/images/loading-multiple.png', networkFirstStrategy);
// Add routes for other images used in your app

self.addEventListener('fetch', (event) => {
  event.respondWith(networkFirstStrategy.handle({ event }));
});
