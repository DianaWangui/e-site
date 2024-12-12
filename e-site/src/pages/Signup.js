import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new user object
    const newUser = { username, email, password };

    // Save the user to localStorage (or any other storage method)
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    savedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(savedUsers));

    // Redirect to login page after successful signup
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600">
      <div className="p-8 w-full max-w-md bg-white shadow-lg rounded-lg">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Join us today and explore our services.
        </p>

        {/* Signup Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="mt-1 w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 shadow-sm"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 shadow-sm"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 shadow-sm"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-green-500 hover:text-green-600 font-medium">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
