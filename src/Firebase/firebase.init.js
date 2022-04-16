import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9xMrsWQstZjMVLNAG3d_lTwNXasHWCBk",
  authDomain: "red-onion-roaster.firebaseapp.com",
  projectId: "red-onion-roaster",
  storageBucket: "red-onion-roaster.appspot.com",
  messagingSenderId: "299745200010",
  appId: "1:299745200010:web:d55475ed055f7deef76a73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth ;