// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD7WPPAFaiwLfqjb8y3azHg6loZqwriX8c",
    authDomain: "conspire-d4ccc.firebaseapp.com",
    projectId: "conspire-d4ccc",
    storageBucket: "conspire-d4ccc.appspot.com",
    messagingSenderId: "864364385222",
    appId: "1:864364385222:web:12c161b2947abb8582d8c7",
    measurementId: "G-HX918SVWT3"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;