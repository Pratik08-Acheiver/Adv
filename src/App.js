import React from 'react';
import Navbar from './Component/Navbar';
import './App.css';
import Home from './Component/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Component/pages/Services';
import Products from './Component/pages/Products';
import SignUp from './Component/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' exact element={<Services/>} />
          <Route path='/products' exact element={<Products/>} />
          <Route path='/sign-up' exact element={<SignUp/>} />
        </Routes>
      </Router>
      
    
    </>
  );
}

export default App;