// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext'; // Ensure correct path
import MainHeader from './components/Header/MainHeader';
import Footer from './components/Footer/Footer';
import MainMenu from './components/Menu/MainMenu';
import Cart from './components/Cart/Cart';
import AdminLogin from './components/Admin/AdminLogin';
import AdminPanel from './components/Admin/AdminPanel';
import { Contact } from './components/Contact/Contact';
import foodItemsData from '../db.json'; // Ensure correct path
import About from './components/About/About';

const App = () => {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    setFoodItems(foodItemsData); // Load data from JSON
  }, []);

  return (
    <CartProvider>
      <Router>
        <MainHeader />
        <Routes>
          <Route path="/" element={<MainMenu menuItems={foodItems} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin-login" element={<AdminLogin setAdminLoggedIn={setAdminLoggedIn} />} />
          <Route path="/admin" element={adminLoggedIn ? <AdminPanel foodItems={foodItems} setFoodItems={setFoodItems} /> : <AdminLogin setAdminLoggedIn={setAdminLoggedIn} />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
