import React from 'react';

const Profile = () => {
  // Dummy data for the user
  const user = {
    name: 'Kelvin Uwusu',
    email: 'kelvin@gmail.com',
  };

  return (
    <div className="mt-16 p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Your Profile Info</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <div className="w-24 h-24 bg-blue-300 rounded-full flex justify-center items-center text-white text-3xl">
              {user.name[0]} {/* Displaying the first letter of the name */}
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-semibold text-gray-800">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Information</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-700">Username</p>
              <p className="text-gray-600">{user.name}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-700">Email</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
