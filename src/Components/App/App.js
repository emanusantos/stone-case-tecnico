import React from 'react';
import './App.css';
import LoginScreen from '../../Components/LoginScreen/LoginScreen.jsx'
import { AuthProvider } from '../../Contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <div className="App">
              <div className="loginWrapper">
                <Route path="/signup" component={LoginScreen} />
              </div>
          </div>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
