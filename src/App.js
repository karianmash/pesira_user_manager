import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import AddUser from './pages/AddUser/AddUser';
import Home from './pages/Home/Home';

function App() {
  const showUpdateUserModal = (userId) => {
  }

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/create-user" element={<AddUser />} />
    </Routes>
  );
}

export default App;
