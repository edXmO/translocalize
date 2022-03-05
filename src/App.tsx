import 'flowbite';
import FirebaseContext from './context/FirebaseContext';
import './App.css'
import RootNavigator from './navigation/RootNavigation';
import { db, app } from './context/FirebaseContext';

function App() {
  return (
    <FirebaseContext.Provider value={{ db, app }}>
        <RootNavigator />
    </FirebaseContext.Provider>
  )
}

export default App
