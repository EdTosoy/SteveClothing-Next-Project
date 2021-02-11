import firebase from "firebase";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC4B9-0feSdPRULoxuh_2Fsi5sLX40Kzpw",
  authDomain: "steveclothing-next-project.firebaseapp.com",
  projectId: "steveclothing-next-project",
  storageBucket: "steveclothing-next-project.appspot.com",
  messagingSenderId: "375013556266",
  appId: "1:375013556266:web:b4da35a7dc2c2e0f6f0353",
  
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
