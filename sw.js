// Generated at build time. Precache the app shell; serve it cache-first; works offline.
const CACHE = 'strecke-preview-1023ff6a81';
const PRECACHE = ["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","icon-512-maskable.png","./assets/index-gJv3_un_.js","./assets/barlow-latin-400-normal-qiz4-Cze.woff2","./assets/barlow-latin-500-normal-BPAOfeC8.woff2","./assets/barlow-latin-600-normal-DILqtrty.woff2","./assets/barlow-semi-condensed-latin-500-normal-G0uxJNrM.woff2","./assets/barlow-semi-condensed-latin-600-normal-BkLiAYu4.woff2","./assets/barlow-semi-condensed-latin-700-normal-BpqDG8I9.woff2","./assets/index-7esA-kJ9.css"];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  // Removes this build's older shell caches only: never the audio cache, never another build's caches on the same origin.
  const OLD = /^strecke-preview-[0-9a-f]{10}$/;
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE && OLD.test(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(caches.match('index.html').then((hit) => hit || fetch(req)));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
