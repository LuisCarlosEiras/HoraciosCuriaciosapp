const CACHE_NAME = 'horacios-curiacios-v1';
const urlsToCache = [
  '/HoraciosCuriaciosapp/',
  '/HoraciosCuriaciosapp/index.html',
  '/HoraciosCuriaciosapp/style.css',
  '/HoraciosCuriaciosapp/script.js',
  // Adicione aqui os caminhos para suas imagens e sons!
  // Exemplo: '/HoraciosCuriaciosapp/images/personagem.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});