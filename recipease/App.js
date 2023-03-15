import { Component } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import HomePage from './src/pages/home';
import RecipePage from './src/pages/recipe';
import ProfilePage from './src/pages/profile';
import FriendPage from './src/pages/friend';
import AddIngPage from './src/pages/addIngredient';
import AddRecipePage from './src/pages/addRecipe';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={HomePage()} />
          <Route path='/profile' element={ProfilePage()} />
          <Route path='/add-recipe' element={AddRecipePage()} />
          <Route path='/browse-recipes' element={AddRecipePage()} />
          <Route path='/add-ingredient' element={AddIngPage()} />
          <Route path='/browse-ingredients' element={AddIngPage()} />
          <Route path='/friends' element={FriendPage()} />
          <Route path='/recipe' element={RecipePage()} />

        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
