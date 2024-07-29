// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbhQyHV2TQ9PaXxjTorrZ2_hCskRTRUcQ',
  authDomain: 'tendex-6777b.firebaseapp.com',
  projectId: 'tendex-6777b',
  storageBucket: 'tendex-6777b.appspot.com',
  messagingSenderId: '848350541109',
  appId: '1:848350541109:web:5edb0dd4f961c93e39c87c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

export { auth };
