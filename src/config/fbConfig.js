import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAv-mUN6sAqoHOyQm8LhKhECCjzRlgU6mk",
  authDomain: "net-ninja-marioplan-5c90d.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-5c90d.firebaseio.com",
  projectId: "net-ninja-marioplan-5c90d",
  storageBucket: "net-ninja-marioplan-5c90d.appspot.com",
  messagingSenderId: "960974338121"
};

firebase.initializeApp(config);
firebase.firestore()

export default firebase;