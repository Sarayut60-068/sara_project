import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDgVTLL6EEYVvGzIEeckLo0LNfVI_oawWU",
    authDomain: "project068-2757d.firebaseapp.com",
    databaseURL: "https://project068-2757d.firebaseio.com",
    projectId: "project068-2757d",
    storageBucket: "project068-2757d.appspot.com",
    messagingSenderId: "276122369102",
    appId: "1:276122369102:web:18e99bcec34652c800d71f",
    measurementId: "G-T5XXZBH66K"
  };

  const base = firebase.initializeApp(firebaseConfig)

  export default base;