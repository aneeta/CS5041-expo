import { Component } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import HomePage from './src/pages/home';
import RecipePage from './src/pages/recipe';
import ProfilePage from './src/pages/profile';
import AddRecipePage from './src/pages/addRecipe';
import AddIngPage from './src/pages/addIngredient';
import IngPage from './src/pages/ingredients';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={HomePage()} />
          <Route path='/profile' element={ProfilePage()} />
          <Route path='/add-recipe' element={AddRecipePage()} />
          <Route path='/browse-recipes' element={RecipePage()} />
          <Route path='/add-ingredient' element={AddIngPage()} />
          <Route path='/browse-ingredients' element={IngPage()} />
        </Routes>
      </BrowserRouter>

    )
  }
}

export default App;
