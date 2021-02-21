import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavbarComponent from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <>
        <NavbarComponent />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;