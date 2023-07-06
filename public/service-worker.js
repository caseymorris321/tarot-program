const fs = require('fs');
const path = require('path');

const imagesDirectory = path.join(__dirname, 'src', 'images');
const cacheEntries = [];

// Read the images directory
fs.readdirSync(imagesDirectory).forEach((file) => {
  // Get the file extension
  const extension = path.extname(file);

  // Check if it's an image file
  if (extension === '.png' || extension === '.jpg' || extension === '.jpeg') {
    // Generate the URL and add it to the cache entries
    const imageUrl = `/images/${file}`;
    cacheEntries.push(imageUrl);
  }
});

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
        ...cacheEntries,
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
