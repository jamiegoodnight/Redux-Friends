import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Friends from './components/Friends';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';



class App extends Component {
  render() {
    return (
      <div className="App">
        <PrivateRoute path="/friends" component={Friends} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;

