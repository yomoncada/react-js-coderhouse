import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBD4UV7UECbYtpASTbEpuYApW6-2-bTcrw",
  authDomain: "shoepify-fd396.firebaseapp.com",
  projectId: "shoepify-fd396",
  storageBucket: "shoepify-fd396.appspot.com",
  messagingSenderId: "588832310488",
  appId: "1:588832310488:web:5e95d96103a5896f38c3ad"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
  return firebase.firestore(app)
}