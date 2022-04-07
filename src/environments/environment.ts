import {initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const environment = {
  production: false
};

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQxeeCogEiKtoiBzhEr-sUfRABKzE5tsc",
  authDomain: "auth-project-bcc71.firebaseapp.com",
  projectId: "auth-project-bcc71",
  storageBucket: "auth-project-bcc71.appspot.com",
  messagingSenderId: "980635772239",
  appId: "1:980635772239:web:16b16b0ff2de69c22e913a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authen = getAuth(app);
export const db = getFirestore();
