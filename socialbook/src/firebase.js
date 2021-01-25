import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB33nKBtSxPeA-tajcpO67PhIdT8FRitJY",
  authDomain: "socialbook-cba32.firebaseapp.com",
  projectId: "socialbook-cba32",
  storageBucket: "socialbook-cba32.appspot.com",
  messagingSenderId: "557284272614",
  appId: "1:557284272614:web:086e033042ce097dddce27",
  measurementId: "G-3LZX03BZX4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
