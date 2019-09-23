import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components'
import SignUp from './components'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            CS21 Build Week 1 - MUD - Team L
          </p>
        </header>
        <>
        <Route exact path={} component={Login} />
        <Route exact path={} component={SignUp} />
        
        </>
      </div>
    </Router>
  );
}

export default App;
