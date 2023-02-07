import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCyVI9F9dyAoa3eVihESJqPYITGLdsXuUA',
  authDomain: 'rn-demo-36074.firebaseapp.com',
  projectId: 'rn-demo-36074',
  storageBucket: 'rn-demo-36074.appspot.com',
  messagingSenderId: '662704633963',
  appId: '1:662704633963:web:1931a40b55e79c564d192e',
  measurementId: 'G-60Y8GN7M5N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
