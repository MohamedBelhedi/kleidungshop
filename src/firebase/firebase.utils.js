import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config={
    
    apiKey: "AIzaSyAapQUrlqHqHA_dETcmCwz0OoEWw7FFq-A",
    authDomain: "krone-bekleidung-db.firebaseapp.com",
    projectId: "krone-bekleidung-db",
    storageBucket: "krone-bekleidung-db.appspot.com",
    messagingSenderId: "261758033143",
    appId: "1:261758033143:web:a09e5b5c68edc9672707f2",
    measurementId: "G-74V1G0XT35"
  };


  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
//   popup wenn wir google Sign in Button nutzen z.B anmelden Mit google Account
  provider.setCustomParameters({promt:'select_account'})

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;