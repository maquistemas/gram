
var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
      console.log('Service worker registered!');
    });
}
*/

if('serviceWorker' in navigator){
    console.log('Puedes usar los serviceWorker en tu navegador');
    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('service worker cargado correctamente', res))
                            .catch(err => console.log('servviceWorker no se ha podido registrar', err));
    
}else{
    console.log('No puedes usar los servicesWorker en tu navegador')
}

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});