// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBEheMoEfTwi0nd0SJKbRzxIVHerD_RRkw',
  authDomain: 'next-fire-3968e.firebaseapp.com',
  projectId: 'next-fire-3968e',
  storageBucket: 'next-fire-3968e.appspot.com',
  messagingSenderId: '1025146660463',
  appId: '1:1025146660463:web:611c1bd554a7b9782b4f9a',
  measurementId: 'G-B10BC9NNX0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
