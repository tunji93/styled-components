import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import GlobalStyles from './global'


function App() {
  return (
    <Router>
       <GlobalStyles />
       <Navbar />
    </Router>
    
  );
}

export default App;
