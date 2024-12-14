import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [user, setUser] = useState(null); // Tracks user login status
  const navigate = useNavigate();

  // On component mount, check if user is logged in
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedIn'));
    if (loggedInUser) {
      setUser(loggedInUser); // If user is logged in, set user state
    }
  }, []);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle account dropdown visibility
  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  // Navigate to restricted page or login if not logged in
  const handleRestrictedAccess = (path) => {
    if (!user) {
      navigate('/login'); // Redirect to login if not logged in
    } else {
      navigate(path); // Navigate to the requested path if logged in
    }
  };

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem('loggedIn'); // Remove user data from localStorage
    setUser(null); // Set user state to null
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-orange-500 bg-white p-4 z-50">
      {/* Navbar Container */}
      <div className="mr-[10%] ml-[10%] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-orange-500">
          MyStore
        </Link>

        {/* Search Bar */}
        <div className="hidden md:block w-1/3">
          <SearchBar />
        </div>

        {/* Account, Login, and Cart */}
        <div className="hidden md:flex items-center gap-6">
          {user ? (
            // Account Dropdown when user is logged in
            <div className="relative">
              <button
                onClick={toggleAccountDropdown}
                className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
                <span>Account</span>
              </button>
              {isAccountDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg p-4 w-48">
                  <button
                    onClick={() => handleRestrictedAccess('/profile')}
                    className="block text-gray-500 hover:text-orange-600 px-4 py-2 rounded-md text-left w-full hover:text-white transition duration-300"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => handleRestrictedAccess('/orders')}
                    className="block text-gray-500 hover:text-orange-600 px-4 py-2 rounded-md text-left w-full hover:text-white transition duration-300"
                  >
                    My Orders
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block text-gray-500 hover:text-orange-600 px-4 py-2 rounded-md text-left w-full hover:text-white transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Login Button when user is not logged in
            <Link to="/login" className="text-gray-500 hover:text-orange-500">
              Login
            </Link>
          )}

          {/* Cart */}
          <button className="relative flex items-center text-gray-500 hover:text-orange-500">
            <FontAwesomeIcon icon={faShoppingCart} className="text-3xl" />
            <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex justify-center items-center">
              3
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="block md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col gap-4">
          <SearchBar />
          {!user ? (
            <Link to="/login" className="hover:text-gray-500">
              Login
            </Link>
          ) : (
            <>
              <button
                onClick={() => handleRestrictedAccess('/profile')}
                className="hover:text-gray-500 text-left"
              >
                Profile
              </button>
              <button
                onClick={() => handleRestrictedAccess('/orders')}
                className="hover:text-gray-500 text-left"
              >
                My Orders
              </button>
              <button
                onClick={handleLogout}
                className="hover:text-gray-500 text-left"
              >
                Logout
              </button>
            </>
          )}
          <button className="relative flex items-center hover:text-gray-200">
            <FontAwesomeIcon icon={faShoppingCart} className="text-3xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
              3
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
