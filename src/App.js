import React from 'react';
import Home from './pages/Home';
import './App.css';
import UserState from './context/user/UserState';

const App = () => {
  return (
    <UserState>
      <Home />
    </UserState>
  );
};

export default App;
