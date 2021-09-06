import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC8irwPPcLI4hRT2wsUp2CsADCJdWvwwAo",
    authDomain: "adventor-db739.firebaseapp.com",
    projectId: "adventor-db739",
    storageBucket: "adventor-db739.appspot.com",
    messagingSenderId: "835631437740",
    appId: "1:835631437740:web:c3272d8c98c4ddae8c4c09",
    measurementId: "G-K69SGL23HD"
  }
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const db = firebaseApp.firestore();
  export const storage = firebase.storage();