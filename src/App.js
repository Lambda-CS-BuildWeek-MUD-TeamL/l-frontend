import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            CS21 Build Week 1 - MUD - Team L
          </p>
        </header>
        <>
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/signup'} component={SignUp} />
        
        </>
      </div>
    </Router>
  );
}

export default App;
