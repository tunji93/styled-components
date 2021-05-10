import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import GlobalStyles from './global'
import HomePage from './Pages/HomePage/HomePage'


function App() {
  return (
    <Router>
       <GlobalStyles />
       <Navbar />
       <Switch>
         <Route exact path="/">
           <HomePage />
         </Route>
       </Switch>
       
    </Router>
    
  );
}

export default App;
