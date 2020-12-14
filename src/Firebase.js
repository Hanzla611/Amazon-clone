import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDqAs59oCtxOpvQltc5qjs9xxBKMQ_mCTY",
    authDomain: "clone-3473d.firebaseapp.com",
    projectId: "clone-3473d",
    storageBucket: "clone-3473d.appspot.com",
    messagingSenderId: "588130194109",
    appId: "1:588130194109:web:66a6c426eb3f403d261dd4",
    measurementId: "G-TMQM7YZ604",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };