importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

workbox.setConfig({ debug: false });

self.addEventListener('install', (event) => {
  const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/favicon.ico',
    // Add other static assets from the public directory
    '/logo192.png',
    '/logo512.png'
  ];

  const assetsToPrecache = [
    // Add other assets from the src directory
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/bundle.js',
    '/static/css/main.chunk.css'
  ];

  event.waitUntil(
    caches.open('your-cache-name').then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );

  event.waitUntil(
    caches.open('your-cache-name').then((cache) => {
      return cache.addAll(assetsToPrecache);
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
