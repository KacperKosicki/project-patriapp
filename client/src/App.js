// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/features/Login/Login';
import WorkerPanel from './components/features/WorkerPanel/WorkerPanel';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/worker/:login"
          element={loggedIn ? <WorkerPanel currentUser={currentUser} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;