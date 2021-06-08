import React from 'react';
import './App.css';
import SignUp from '../../Pages/SignUp/SignUp'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Profile from '../../Pages/Profile/Profile';
import Login from '../../Pages/Login/Login';
import Comics from '../../Pages/Comics/Comics';
import Characters from '../../Pages/Characters';

function App() {
  return (
    <Router>
        <Switch>
          <div className="App">
              <div className="loginWrapper">
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
              </div>
              <Route exact path='/' render={() =>
              (<Redirect to="/profile"/>)} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/comics" component={Comics} />
              <Route exact path="/characters" component={Characters} />
          </div>
        </Switch>
    </Router>
  );
}

export default App;
