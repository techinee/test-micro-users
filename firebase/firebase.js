// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHafeDOZ1M6GtUZeTN4GmPIDHT6MEOuyE",
  authDomain: "microservices-users-d0c6c.firebaseapp.com",
  projectId: "microservices-users-d0c6c",
  storageBucket: "microservices-users-d0c6c.appspot.com",
  messagingSenderId: "261530080379",
  appId: "1:261530080379:web:a9a5040f1a74b557f47ede"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.export = {firebase} ;