// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAK4NGP28SsJJAEEhvD2t36Cksefr7dIZc',
  authDomain: 'sadowa20-90070.firebaseapp.com',
  projectId: 'sadowa20-90070',
  storageBucket: 'sadowa20-90070.appspot.com',
  messagingSenderId: '923557886263',
  appId: '1:923557886263:web:6d3b220f6150e7e02682b2',
  measurementId: 'G-37W78DZMZG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
