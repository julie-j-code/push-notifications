# pwa-initiation

## Une fois le package web-push installé pour gérérer côté serveur une clée applicationServerKey, j'ai crée un push.js puis exécuté node.push.js

#installation web-push 

`npm install web-push --save`

#contenu de push.js

`const webpush = require("web-push");
// VAPID keys should be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();
console.log(vapidKeys)`

En console, on récupère publiKey + privateKey


`serviceWorkerRegistration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: urlBase64ToUint8Array(val
  idPublicKey)
})`



