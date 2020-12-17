import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7RdLKoWZ_n7kYlJ_C5H5RfchayV_T4nU",
    authDomain: "instagram-8b046.firebaseapp.com",
    databaseURL: "https://instagram-8b046.firebaseio.com",
    projectId: "instagram-8b046",
    storageBucket: "instagram-8b046.appspot.com",
    messagingSenderId: "981380609805",
    appId: "1:981380609805:web:f4b643b9444c667bf92244",
    measurementId: "G-R9ZV6ZF3BH"
  });
  

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db , auth, storage };