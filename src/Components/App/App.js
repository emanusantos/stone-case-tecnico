import React from 'react';
import './App.css';
import SignUp from '../SignUp/SignUp.jsx'
import { AuthProvider } from '../../Contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';

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
              <>
                <Navbar />
                <Route exact path="/" component={Dashboard} />
              </>
          </div>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
