import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Theses from './pages/Theses';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />                
        <Route path="/theses" element={<Theses />} />                
        </Routes>
      </BrowserRouter>
  );
}

export default App;
