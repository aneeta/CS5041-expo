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
import { useList, useListVals } from 'react-firebase-hooks/database';
import { ref, push, child, serverTimestamp } from 'firebase/database'
import { db, auth } from "./db";
import BrowseIngPage from './src/pages/browseIngredients';
import BrowseRecipePage from './src/pages/browseRecipes';


export default function App() {

  const [user, authLoading, authError] = useAuthState(auth);

  const [snapshots, dbLoading, dbError] = useList(user ? ref(db, `/public/${user.uid}`) : null);

  const [ingredients, ingDbLoading, ingDbError] = useList(user ? ref(db, `/private/${user.uid}`) : null);

  const [allSnapshots, allDbLoading, allDbError] = useList(user ? ref(db, `/public`) : null);

  const [sessionData, setSessionData] = useState({})

  useEffect(() => {
    signInAnonymously(auth);
    setSessionData({
      privRef: ref(db, `/private/${user?.uid}`),
      user: user,
      authLoading: authLoading,
      authError: authError,
      snapshots: snapshots,
      dbLoading: dbLoading,
      dbError: dbError,
      allSnapshots: allSnapshots,
      allDbLoading: allDbLoading,
      allDbError: allDbError,
      ingredients: ingredients,
      ingDbLoading: ingDbLoading,
      ingDbError: ingDbError
    })
    // setSessionData((prev) => ({ ...prev, ...{ allRecipes: sessionData.allSnapshots.map((el, _) => el.val()).map((el, i) => Object.values(el)).flat().filter(el => ((el.type === "dataFinal") && (el.message == "Recipe"))) } }))
    // console.log("authenticated")
    // console.log(user)
  }, [user, authLoading, authError, allSnapshots, allDbLoading, allDbError]);

  // const sample = snapshots[0].val()
  // const parsed = snapshots.filter(el => ((el.type === "dataFinal") && (el.message === "Recipe"))).map((el, i) => JSON.parse(el.content))
  // console.log(parsed)

  const sampleProps = {
    name: "Baked Apple",
    author: "User",
    date: "20-01-2023",
    ingredients: [{ ing: "Apple", amount: 1 }],
    method: [{ step: "Bake" }],
  }

  return (
    <Context.Provider value={{ sessionData, setSessionData }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/add-recipe' element={<AddRecipePage />} />
          <Route path='/browse-recipes' element={<BrowseRecipePage />} />
          <Route path='/add-ingredient' element={<AddIngPage />} />
          <Route path='/browse-ingredients' element={<BrowseIngPage />} />
          <Route path='/friends' element={<FriendPage />} />
          {/* snapshots.filter(el => ((el.type === "dataFinal") && (el.message === "Ingredients"))).map((el, i) => JSON.parse(el.content)) */}
          <Route path='/recipe/:recipeId' element={<RecipePage {...sampleProps} />} />
          {/* // {
            //   name: parsed[0].infoForm.name,
            //   author: user.uid,
            //   date: sample.created,
            //   ingredients: parsed[0].ingForm,
            //   method: parsed[0].method,

            // } */}
          <Route path='/dbtest' element={<DbTest />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}


