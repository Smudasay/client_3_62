import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3jvc3iZoqGVEfcobkYRNvQOxcFvZDRo0",
  authDomain: "mudasayawae074.firebaseapp.com",
  databaseURL: "https://mudasayawae074.firebaseio.com",
  projectId: "mudasayawae074",
  storageBucket: "mudasayawae074.appspot.com",
  messagingSenderId: "613384290779",
  appId: "1:613384290779:web:3fc6ee25e88ae0b979e7fe",
  measurementId: "G-1H7HR2N96M"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
var db = firebase.firestore();

export default db