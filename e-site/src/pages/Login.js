import React from 'react';

function Login() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="w-full border-gray-300 rounded-md p-2"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full border-gray-300 rounded-md p-2"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
