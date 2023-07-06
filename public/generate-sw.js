const fs = require('fs');
const path = require('path');

const imagesDir = 'C:/Users/befre/OneDrive/Desktop/tarot-program/src/images';
const cacheName = 'your-cache-name';

// Read the directory and generate the cache list
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const cacheList = [
    '/',
    '/index.html',
    '/manifest.json',
    'src/TarotCardGenerator.css',
    'src/TarotCardGenerator.js',
    'src/TarotCards.js',
    'src/App.js',
    'src/index.js',
    // Add other assets like CSS, JavaScript files
  ];

  // Add image files to the cache list
  files.forEach((file) => {
    const filePath = path.join('src/images', file).replace(/\\/g, '/');
    cacheList.push(filePath);
  });

  // Generate the service worker file
  const serviceWorkerContent = `
    self.addEventListener('install', (event) => {
      event.waitUntil(
        caches.open('${cacheName}').then((cache) => {
          return cache.addAll(${JSON.stringify(cacheList)});
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
  `;

  fs.writeFile('service-worker.js', serviceWorkerContent, (err) => {
    if (err) {
      console.error('Error generating service worker file:', err);
    } else {
      console.log('Service worker file generated successfully!');
    }
  });
});
