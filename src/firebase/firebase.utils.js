import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDt7jXnBDssGwKT47saAmg8NZMwLSTC4Cs",
  authDomain: "crwn-db-500fb.firebaseapp.com",
  projectId: "crwn-db-500fb",
  storageBucket: "crwn-db-500fb.appspot.com",
  messagingSenderId: "151726713900",
  appId: "1:151726713900:web:114f005686b9a0c5abf589",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
