// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import GamePage from './components/GamePage';
import './App.css'

const App = () => {
  const [authorizedUsers, setAuthorizedUsers] = useState([]);
  const [unauthorizedUsers, setUnauthorizedUsers] = useState([]);

  const addToAuthorizedUsers = (user) => {
    setAuthorizedUsers((prevUsers) => [...prevUsers, user]);
  };

  const addToUnauthorizedUsers = (user) => {
    setUnauthorizedUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage addToAuthorizedUsers={addToAuthorizedUsers} addToUnauthorizedUsers={addToUnauthorizedUsers} />}
        />
        <Route
          path="/game"
          element={
            authorizedUsers.length > 0 ? (
              <GamePage />
            ) : (
              <Navigate to="/login" state={{ message: 'Unauthorized access. Please log in first.' }} />
            )
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
