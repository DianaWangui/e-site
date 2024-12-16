import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import { useCart } from '../context/CartContext';

function Navbar({ setSearchQuery }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { state } = useCart();
  const cartCount = state.cartItems.length;
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedIn'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById('account-dropdown');
      const button = document.getElementById('account-button');
      if (dropdown && button && !dropdown.contains(event.target) && !button.contains(event.target)) {
        setIsAccountDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const handleRestrictedAccess = (path) => {
    if (!user) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-orange-500 bg-white p-4 z-50 bg-white rounded shadow">
      <div className="mr-[10%] ml-[10%] flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-orange-500">
          MyStore
        </Link>
        {/* SearchBar only in the navbar */}
        <div className="hidden md:block w-1/3">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <div className="hidden md:flex items-center gap-6">
          {user ? (
            <div className="relative">
              <button
                id="account-button"
                onClick={toggleAccountDropdown}
                className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
                <span>Account</span>
              </button>
              {isAccountDropdownOpen && (
                <div id="account-dropdown" className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg p-4 w-48">
                  <Link
                    to="/profile"
                    className="block text-gray-500 hover:text-orange-600 px-4 py-2 rounded-md text-left w-full transition duration-300"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block text-gray-500 hover:text-orange-600 px-4 py-2 rounded-md text-left w-full transition duration-300"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block text-gray-500 hover:text-orange-600 px-4 py-2 rounded-md text-left w-full transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="text-gray-500 hover:text-orange-500">
              Login
            </Link>
          )}
          <Link
            to="/cart"
            className="relative flex items-center text-gray-500 hover:text-orange-500"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-3xl" />
            <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex justify-center items-center">
              {cartCount}
            </span>
          </Link>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="block md:hidden text-3xl"
        >
          ☰
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col gap-4">
          {/* SearchBar for mobile */}
          <SearchBar onSearch={setSearchQuery} />
          {!user ? (
            <Link to="/login" className="hover:text-gray-500">
              Login
            </Link>
          ) : (
            <>
              <Link
                to="/profile"
                className="block text-gray-500 hover:text-orange-600 px-4 py-2 rounded-md text-left w-full transition duration-300"
              >
                Profile
              </Link>
              <Link
                to="/orders"
                className="block text-gray-500 hover:text-orange-600 px-4 py-2 rounded-md text-left w-full transition duration-300"
              >
                My Orders
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-gray-500 text-left"
              >
                Logout
              </button>
            </>
          )}
          <Link
            to="/cart"
            className="flex items-center text-gray-500 hover:text-orange-500"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-3xl" />
            <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex justify-center items-center">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
