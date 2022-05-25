import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import { Register } from './pages/shop/register/register.component';
import ShopPage from './pages/shop/shop.component';



function App() {
  return (
    <div>

      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/shop"
          element={<ShopPage />}
        />
        <Route
          path="/register"
          element={<Register />}
        />


      </Routes>


    </div>
  );
}

export default App;
