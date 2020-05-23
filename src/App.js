import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserList from './Components/UserList'
import UserInfoById from './Components/UserInfoById'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/user/:id" component={UserInfoById} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
