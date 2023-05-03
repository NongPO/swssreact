import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomeRegis from './Pages/HomeRegis';
import HomeLogin from './Pages/HomeLogin';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={HomeRegis} />
          <Route exact path="/login" component={HomeLogin} />
          <Redirect to="/" />
        </Switch>
      </Router>
      
    </React.Fragment>

  );
}

export default App;
