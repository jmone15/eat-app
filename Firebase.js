import firebase from "firebase";

// Your web app's Firebase configuration (Get your connection details from firebase)
const firebaseConfig = {
    apiKey: "<>",
    authDomain: "<>",
    projectId: "<>",
    storageBucket: "<>",
    messagingSenderId: "<>",
    appId: "<>"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;

