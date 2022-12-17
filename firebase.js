import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBdbsjdNfH-yFAvA3vSVxFS86by-pZVpN4",
  authDomain: "gymapp-e5fe9.firebaseapp.com",
  projectId: "gymapp-e5fe9",
  storageBucket: "gymapp-e5fe9.appspot.com",
  messagingSenderId: "689226291530",
  appId: "1:689226291530:web:a53a276a357896c69cc9b3",
  measurementId: "G-2E51C44TSB"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebaseConfig, db };
