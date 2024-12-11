// src/components/SearchBar.js

import React, { useState } from 'react';
import products from '../data/categories'; // Import dummy product data

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle the search button click
  const handleSearch = () => {
    const query = searchTerm.toLowerCase();
    const results = products.filter((product) =>
      product.category.toLowerCase().includes(query)
    );
    
    if (results.length > 0) {
      setFilteredProducts(results);
      setIsPopupVisible(false);
    } else {
      setIsPopupVisible(true); // Show popup if no results
      setFilteredProducts([]);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Search Bar */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search by category (e.g., Shoes)"
          className="text-black w-full max-w-lg p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Show Popup if No Results */}
      {isPopupVisible && (
        <div className="bg-red-500 text-white p-4 rounded-md shadow-lg">
          <p>Sorry, no products found in this category. It's sold out!</p>
        </div>
      )}

      {/* Display Filtered Products */}
      {filteredProducts.length > 0 && (
        <div className="mt-4 p-4">
          <h2 className="text-xl font-bold text-gray-800">Search Results:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-md shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.category}</p>
                <p className="text-xl font-bold text-gray-800">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;