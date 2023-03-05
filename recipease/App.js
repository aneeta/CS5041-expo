import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './src/pages/layout';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';


import BaseLayout from './src/components/base/Layout';
import HomePage from './src/pages/home';
// import { Router } from 'react-router-dom';
// import { Switch } from 'react-native-paper';
import { Component } from 'react';
import RecipePage from './src/pages/recipe';
import ProfilePage from './src/pages/profile';

// export default function App() {
//   return (
//     <Router>
//         {/* <HomePage/> */}
//         <Switch>
//           <Route exact path="/" component={HomePage}/>
//         </Switch>
//     </Router>
//   );
// }

// export default function App() {
//   return (
//     <HomePage/>
//     // <Router>
//     //   <Switch>
//     //     <Route exact path="/" component={HomePage}/>
//     //   </Switch>
//     // </Router>
    
//     // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Layout>Hello!</Layout>} />
    //   </Routes>
    // </BrowserRouter>

//   );
// }


class App extends Component {
  render() {
    return (
      // <HomePage/>
      // <Router>
      //   {/* <HomePage/> */}
      //   <Switch>
      //     <Route exact path="/" component={HomePage}/>
      //   </Switch>
      // </Router>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={HomePage()} />
        <Route path='/profile' element={ProfilePage()} />
        <Route path='/add-recipe' element={RecipePage()} />
        <Route path='/browse-recipes' element={ProfilePage()} />
        <Route path='/add-ingredient' element={RecipePage()} />
        <Route path='/browse-ingredients' element={RecipePage()} />
      </Routes>
    </BrowserRouter>
      
    )
  }
}

export default App;

