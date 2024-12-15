import React, { useState } from 'react';
import products from '../data/categories';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
      <div className="flex gap-2 w-full">
        <input
          type="text"
          placeholder="Search for a product category..."
          className="text-black w-[100%] p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-green"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          onClick={handleSearch}
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-custom-green hover:text-white transition duration-300"
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
