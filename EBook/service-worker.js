// 🔥 Shyam EBook PWA Service Worker (Optimized Version)

const CACHE_VERSION = 'v3';
const STATIC_CACHE = `shyam-ebook-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `shyam-ebook-dynamic-${CACHE_VERSION}`;

// Files to cache (core app shell)
const APP_SHELL = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/modals.css',
  '/js/db.js',
  '/js/ui.js',
  '/js/app.js',
  '/js/i18n.js',
  '/manifest.json',
  '/Logo-192.png',
  '/Logo-512.png'
];

// 🔹 INSTALL
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching app shell...');
        return cache.addAll(APP_SHELL);
      })
      .then(() => self.skipWaiting())
  );
});

// 🔹 ACTIVATE
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 🔹 FETCH (SMART STRATEGY)
self.addEventListener('fetch', event => {
  const req = event.request;

  // Only handle GET requests
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then(cachedRes => {
      return (
        cachedRes ||
        fetch(req)
          .then(networkRes => {
            return caches.open(DYNAMIC_CACHE).then(cache => {
              cache.put(req, networkRes.clone());
              return networkRes;
            });
          })
          .catch(() => {
            // 🔻 Offline fallback
            if (req.headers.get('accept').includes('text/html')) {
              return caches.match('/index.html');
            }
          })
      );
    })
  );
});

// 🔹 PUSH NOTIFICATION
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/Logo-192.png',
    badge: '/Logo-192.png'
  };

  event.waitUntil(
    self.registration.showNotification('Shyam EBook', options)
  );
});

// 🔹 NOTIFICATION CLICK
self.addEventListener('notificationclick', event => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        for (let client of clientList) {
          if (client.url.includes('index.html') && 'focus' in client) {
            return client.focus();
          }
        }
        return clients.openWindow('/index.html');
      })
  );
});
