import React from 'react';
import './App.css';
import SignUp from '../SignUp/SignUp.jsx'
import { AuthProvider } from '../../Contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute';
import Comics from '../Comics/Comics';
import Characters from '../Characters';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <div className="App">
              <div className="loginWrapper">
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
              </div>
              <Route exact path='/' render={() =>
              (<Redirect to="/profile"/>)} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/comics" component={Comics} />
              <PrivateRoute exact path="/characters" component={Characters} />
          </div>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
