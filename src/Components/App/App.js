import React from 'react';
import './App.css';
import LoginScreen from '../../Components/LoginScreen/LoginScreen.jsx'
import { AuthProvider } from '../../Contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <div className="loginWrapper">
          <LoginScreen />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
