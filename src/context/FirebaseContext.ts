import { FirebaseApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
import { createContext } from "react";

type IFirebaseContext = {
   app: FirebaseApp | null,
   db: Firestore | null
}

const FirebaseContext = createContext<IFirebaseContext>({
   app: null,
   db: null
});

export default FirebaseContext;