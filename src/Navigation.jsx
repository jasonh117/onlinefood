import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import Login from './components/login';
import NavBar from './components/common/navbar';

const Navigation = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default Navigation;
