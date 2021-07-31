import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAMXrzc5DWWye31WSL6spiEtKwTJ5-vAss",
    authDomain: "clone-fe516.firebaseapp.com",
    projectId: "clone-fe516",
    storageBucket: "clone-fe516.appspot.com",
    messagingSenderId: "759560596514",
    appId: "1:759560596514:web:109e564aabde9c3a106e7b",
    measurementId: "G-K61S7TDEE6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}