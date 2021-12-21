import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIVQKJVwCOO8dPYfH322vI4LNS3PznSDs",
  authDomain: "slack-44e42.firebaseapp.com",
  projectId: "slack-44e42",
  storageBucket: "slack-44e42.appspot.com",
  messagingSenderId: "828061864978",
  appId: "1:828061864978:web:1691dc3b94e2a4c2f2f4cb",
  measurementId: "G-B5H9Y864VC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
