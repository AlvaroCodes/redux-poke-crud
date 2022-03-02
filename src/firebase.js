import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDWr1V--WnXKjV2JS2NgBtl8Q9c9bD3Yh4",
    authDomain: "pokeproyecto-f80b8.firebaseapp.com",
    projectId: "pokeproyecto-f80b8",
    storageBucket: "pokeproyecto-f80b8.appspot.com",
    messagingSenderId: "1064317191037",
    appId: "1:1064317191037:web:670091257876baf608c214"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export {auth, firebase, db, storage}