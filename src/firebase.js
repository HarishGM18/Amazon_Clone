import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCWtyTvBPDNCoF_lijoBYX_rMvdjZkqGBo",
  authDomain: "clone-7692d.firebaseapp.com",
  projectId: "clone-7692d",
  storageBucket: "clone-7692d.appspot.com",
  messagingSenderId: "339357229916",
  appId: "1:339357229916:web:ee35bc0477241a3ebad799",
  measurementId: "G-E29RF5JF6E",
});

const auth = firebase.auth();

export { auth };
