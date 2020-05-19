import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAUiO9l0qpVEEcBQsd37VNxsrOZzRXhmJ0",
    authDomain: "college-connect-b21b1.firebaseapp.com",
    databaseURL: "https://college-connect-b21b1.firebaseio.com",
    projectId: "college-connect-b21b1",
    storageBucket: "college-connect-b21b1.appspot.com",
    messagingSenderId: "741093732990",
    appId: "1:741093732990:web:62b63b5cae9d6556951e2f",
    measurementId: "G-4G39CYMBND"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;