import firebase from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClHz5HB77ngQOciHdyZlzxtTVMGDPMnQE",
  authDomain: "sleek-hair-salon.firebaseapp.com",
  projectId: "sleek-hair-salon",
  storageBucket: "sleek-hair-salon.appspot.com",
  messagingSenderId: "1007461037467",
  appId: "1:1007461037467:web:5dc0d736250ac130b4dd3e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();