const CACHE_NAME = 'kino-cache-v1';
const urlsToCache = [
  '/',
  '/main.html',
  '/film.html',
  '/serial.html',
  '/stil.css',
  // Добавьте сюда другие ресурсы (изображения, скрипты)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});