import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDnUtHe52Fiv6XWcJWSeMsO-PvrWrj5HyA",
    authDomain: "instagram-clone-4fca9.firebaseapp.com",
    projectId: "instagram-clone-4fca9",
    storageBucket: "instagram-clone-4fca9.appspot.com",
    messagingSenderId: "529218366994",
    appId: "1:529218366994:web:df47a2f655f4110ff9b2cb",
    measurementId: "G-7XHKNWLEDL"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};