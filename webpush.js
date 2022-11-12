const webpush = require('web-push');

// Pour générer les clées : 
// VAPID keys should be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();
// console.log(vapidKeys)


// Une fois les clées récupérées, pour ne pas les regénérer 


// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BEvFNT16WI1eeffZaPnqnG6GwzXNsoqCEhj2Kr02SOI477LqyofC_ml9Anf5OTJxlYHSb-mroCx7ZHoaGM6nk-o',
  privateKey: 'zx6_bgLrdos1xxcGdo7Aa4sHI39RDiA63C3QgYma1fI'
};

// webpush.setVapidDetails(
//   'mailto:example@yourdomain.org',
//   vapidKeys.publicKey,
//   vapidKeys.privateKey
// );

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
