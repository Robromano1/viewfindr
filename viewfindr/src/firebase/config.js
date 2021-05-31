import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// if request.auth != null - rule for security auth
var firebaseConfig = {
  apiKey: "AIzaSyCw1EleH5YUmCqaZTurDOErTfGjz5B-gHY",
  authDomain: "viewfindr-89859.firebaseapp.com",
  projectId: "viewfindr-89859",
  storageBucket: "viewfindr-89859.appspot.com",
  messagingSenderId: "848648604241",
  appId: "1:848648604241:web:f92111801b8f8fe63d4670",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export { projectStorage, projectFireStore };
