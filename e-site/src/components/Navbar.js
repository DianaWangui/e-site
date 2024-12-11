import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

function Navbar() {
  // Used for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-8">
      {/* Navbar Container */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-400">
          MyStore
        </Link>

        {/* Search Bar */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

       {/* Login and Cart */}
        <div className="hidden md:flex items-center gap-6">
          {/* Login */}
          <Link to="/login" className="hover:text-gray-400">
            Login
          </Link>
          
          {/* Cart */}
          <button className="relative flex items-center">
            {/* Cart Icon */}
            <FontAwesomeIcon icon={faShoppingCart} className="text-3xl" />
            {/* Notification Badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex justify-center items-center">
              3
            </span>
          </button>
        </div>


        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="block md:hidden material-icons text-3xl"
        >
          menu
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 rounded-md border border-gray-300 focus:outline-none"
          />
          <Link to="/login" className="hover:text-gray-400">
            Login
          </Link>
          <button className="relative">
            <span className="material-icons">shopping_cart</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
              3
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
