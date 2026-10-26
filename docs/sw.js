// Future Money service worker: lets the installed app open offline.
const CACHE='future-money-65282f0e97';
const SHELL=['./','index.html','manifest.webmanifest','icons/icon.svg','icons/icon-192.png','icons/icon-512.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>/^(future-money|pocket-ledger)-/.test(k)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET') return;
  // pages: network first so updates arrive, cache when offline
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put('index.html',copy));return r}).catch(()=>caches.match('index.html')));
    return;
  }
  // everything else (icons, Google Fonts): cache first, fill the cache on first use
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(r=>{
    if(r.ok||r.type==='opaque'){const copy=r.clone();caches.open(CACHE).then(c=>c.put(req,copy))}
    return r;
  })));
});
