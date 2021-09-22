import React from 'react';

import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/AppBar/Header';
import Contact from './components/Layout/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
