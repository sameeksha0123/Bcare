import * as firebase from 'firebase';
// import auth from 'firebase/auth';
import  'firebase/firestore';
const settings = {timestampsInSnapshots: true};

const config= {
    apiKey: "AIzaSyA0gFrxAFc-uO_f1jYl75kx1Q4B9Qk0S58",
    authDomain: "native-events.firebaseapp.com",
    databaseURL: "https://native-events.firebaseio.com",
    projectId: "native-events",
    storageBucket: "native-events.appspot.com",
    messagingSenderId: "121537656271",
    appId: "1:121537656271:web:9aaf5563fcb6c95284ceba",
    measurementId: "G-42WCLJT1TS"
  };



let app=firebase.initializeApp(config);
export const fireStore= firebase.firestore();
export const auth= firebase.auth();
// export const firestore = firebase.firestore();
// firebase.firestore().settings(settings);

// export default firebase;
export default !firebase.apps.length ? 
firebase.initializeApp(config) : firebase.app();
export const db = app.database();