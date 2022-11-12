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
// const pushSubscription = {
//   endpoint: '.....',
//   keys: {
//     auth: '.....',
//     p256dh: '.....'
//   }
// };

// pour simuler un enregistrement en base
let pushSubscription = { 
  endpoint: "https://fcm.googleapis.com/fcm/send/eo5X8GxP_Xg:APA91bGPmLqbOyQMIAdRr1aBYtKqiicZuuYIaA5YQ-qL9zVwpe-ivjHlI943x4XnwRkccW1KRrRTRq5YTRKY0ULLCTfQyhIsgiGLAqi1iHEzKO8uDvmANy1Af9hHDMuz9w365ela7lUx", 
  expirationTime: null, 
  keys: {
    p256dh: "BPSu6QTzj6AMVbH1Oq1IJFrqFmoG2yQTqNAN7f2UkLt0AkiXAx_92KvZ7IMzZicI4FeT16tkFAM3_hfwzedtNP4", 
    auth: "mCLhJfZo60-IGMOkC1Dezw" } };

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
