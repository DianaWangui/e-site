// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetails from './components/ProductDetails';
import CartPage from './pages/CartPage';
import Profile from './pages/Profile';
import MyOrders from './pages/MyOrders';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      {/* Pass setSearchResults to Navbar for updating results */}
      <Navbar setSearchQuery={setSearchQuery}  />
      <Routes>
        {/* Pass searchResults to Home to display searched products */}
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<MyOrders />} />
      </Routes>
    </Router>
  );
}

export default App;