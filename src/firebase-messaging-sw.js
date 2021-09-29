importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCbMm3HfwViP7FEiilX7UL5VL4zHRYmhuo",
    authDomain: "prueba-a51b0.firebaseapp.com",
    databaseURL: "https://prueba-a51b0.firebaseio.com",
    projectId: "prueba-a51b0",
    storageBucket: "prueba-a51b0.appspot.com",
    messagingSenderId: "239273328008",
    appId: "1:239273328008:web:1f464f7297375343cc8e3d"
});

const messaging = fibase.messagin();