import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA4XkhfCrR0ENSjici6UIlh3EtRdZlafpg",
    authDomain: "revents-257708.firebaseapp.com",
    databaseURL: "https://revents-257708.firebaseio.com",
    projectId: "revents-257708",
    storageBucket: "revents-257708.appspot.com",
    messagingSenderId: "247034762970",
    appId: "1:247034762970:web:1cb61e415cc6f618f5b7e3",
    measurementId: "G-Q9VHXYYD1Q"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;