import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { createContext } from "react";
import firebaseConfig from "../../firebaseConfig";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

type IFirebaseContext = {
   app: FirebaseApp,
   db: Firestore
}

const FirebaseContext = createContext<IFirebaseContext>({ app, db });

export default FirebaseContext;