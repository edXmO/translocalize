import { useState } from 'react'
import 'flowbite';
import logo from './logo.svg'
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import FirebaseContext from './context/FirebaseContext';
import './App.css'
import RootNavigator from './navigation/RootNavigation';
import firebaseConfig from '../firebaseConfig';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function App() {
  return (
    <FirebaseContext.Provider value={{ db, app }}>
        <RootNavigator />
    </FirebaseContext.Provider>
  )
}

export default App
