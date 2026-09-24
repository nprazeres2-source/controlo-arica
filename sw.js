// Service worker: permite abrir a app sem rede depois da primeira visita.
const CACHE = 'aricas-v2';
const CORE = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
const LIBS = ['www.gstatic.com', 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const same = url.origin === self.location.origin;
  if (!same && !LIBS.includes(url.hostname)) return; // Firestore e restantes pedidos passam direto
  if (same && (req.mode === 'navigate' || url.pathname.endsWith('.html'))) {
    // Página: rede primeiro (para receber atualizações), cache se não houver rede
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(k => k.put(req, c)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
    return;
  }
  // Bibliotecas, ícones e tipos de letra: cache primeiro
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') { const c = res.clone(); caches.open(CACHE).then(k => k.put(req, c)); }
    return res;
  })));
});
