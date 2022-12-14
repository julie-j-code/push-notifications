self.addEventListener('install', (event)=>{
  self.skipWaiting();
})

self.addEventListener('push', (event) => {
  var options = {
    body: "Ceci est une notification générée par un push",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
  
    actions: [

      {
        action: 'explore',
        title: 'Explore this new world',
        icon: 'images/chekmark.png'
      },
      { action: 'close', title: 'Close', icon: 'images/xmark.png' }
    ]
  };
  event.waitUntil(self.registration.showNotification('Hello world!', options) )

  
});


// self.addEventListener("push", (event)=>{
//   // data c'est tout ce qui va être envoyé ici dans le preload que fera le serveur
//   // selon que j'attends du texte ou du json on aura event.data.text() ou json()...
//   // ATTENTION ! Contrairement à l'API fetch, ce n'est pas de l'asynchrone
//   const data = event.data ? event.data.json : {}
//   console.log(data);


// })