
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  return self.clients.claim();
});

/*self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetching something ....', event);
  if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') return;
  event.respondWith(fetch(event.request));
});*/

self.addEventListener('fetch', event => {
  console.log('[Service Worker] Fetching something ....', event);
  
  event.respondWith(fetch(event.request));
});

/*
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(res =>{
                if(res){
                    //devuelvo datos desde cache
					console.log('devuelvo datos desde cache', res);
                    return res;
                }
				
				console.log('[Service Worker] Fetching something ....', e);
				
                return fetch(e.request);
            })
    );
});
*/