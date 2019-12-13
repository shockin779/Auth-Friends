import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend.js';
import FriendsList from './components/FriendsList';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute path='/add-friend' component={AddFriend} />
        <PrivateRoute path ='/friends-list' component={FriendsList} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
