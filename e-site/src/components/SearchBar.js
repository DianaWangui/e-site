import React, { useState } from 'react';
import products from '../data/categories';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm); // Pass the search term to the parent component (Home)
  };

  return (
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
        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-custom-green transition duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
