import React from 'react';
import './App.css';
import SignUp from '../SignUp/SignUp.jsx'
import { AuthProvider } from '../../Contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute';
import Comics from '../Comics/Comics';

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
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute exact path="/comics" component={Comics} />
          </div>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
