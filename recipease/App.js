import { useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import HomePage from './src/pages/home';
import RecipePage from './src/pages/recipe';
import ProfilePage from './src/pages/profile';
import FriendPage from './src/pages/friend';
import AddIngPage from './src/pages/addIngredient';
import AddRecipePage from './src/pages/addRecipe';
import { Context } from './Context';
import DbTest from './src/pages/dbTest';


import { useAuthState } from 'react-firebase-hooks/auth';
import { signInAnonymously } from "firebase/auth";
import { useList } from 'react-firebase-hooks/database';
import { ref, push, child, serverTimestamp } from 'firebase/database'
import { db, auth } from "./db";
import BrowseIngPage from './src/pages/browseIngredients';

// class App extends Component {

//   render() {

//     return (
//       <Context.Provider value={{ sessionData, setSessionData }}>
//         <BrowserRouter>
//           <Routes>
//             <Route path='/' element={HomePage()} />
//             <Route path='/profile' element={ProfilePage()} />
//             <Route path='/add-recipe' element={AddRecipePage()} />
//             <Route path='/browse-recipes' element={AddRecipePage()} />
//             <Route path='/add-ingredient' element={AddIngPage()} />
//             <Route path='/browse-ingredients' element={AddIngPage()} />
//             <Route path='/friends' element={FriendPage()} />
//             <Route path='/recipe' element={RecipePage()} />
//           </Routes>
//         </BrowserRouter>
//       </Context.Provider>
//     )
//   }
// }

// export default App;

export default function App() {

  const [user, authLoading, authError] = useAuthState(auth);

  const [snapshots, dbLoading, dbError] = useList(user ? ref(db, `/public/${user.uid}`) : null);

  const [sessionData, setSessionData] = useState({
    user: user,
    authLoading: authLoading,
    authError: authError,
    // snapshots: snapshots,
    // dbLoading: dbLoading,
    // dbError: dbError
  })

  useEffect(() => {
    signInAnonymously(auth);
  }, []);

  return (
    <Context.Provider value={{ sessionData, setSessionData }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={HomePage()} />
          <Route path='/profile' element={ProfilePage()} />
          <Route path='/add-recipe' element={AddRecipePage()} />
          <Route path='/browse-recipes' element={AddRecipePage()} />
          <Route path='/add-ingredient' element={AddIngPage()} />
          {/* <Route path='/browse-ingredients' element={BrowseIngPage()} /> */}
          <Route path='/friends' element={FriendPage()} />
          <Route path='/recipe' element={RecipePage()} />
          <Route path='/dbtest' element={DbTest()} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}


