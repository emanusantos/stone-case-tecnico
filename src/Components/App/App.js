import React from 'react';
import './App.css';
import SignUp from '../../Pages/SignUp/SignUp'
import { AuthProvider } from '../../Contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Profile from '../../Pages/Profile/Profile';
import Login from '../../Pages/Login/Login';
import PrivateRoute from '../PrivateRoute';
import Comics from '../../Pages/Comics/Comics';
import Characters from '../../Pages/Characters';

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
