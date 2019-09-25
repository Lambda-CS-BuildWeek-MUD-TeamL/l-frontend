import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'
import './App.scss';
import Unauthorized from './components/Unauthorized'
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <>
        <Route path='/unauthorized' component={Unauthorized} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path ='/home' component={HomePage} />
        </>
      </div>
    </Router>
  );
}

export default App;
