// src/components/ProductList.js

import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.length === 0 ? (
        <p className="text-red-500">Sorry, no products found in this category.</p>
      ) : (
        products.map((product) => (
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
        ))
      )}
    </div>
  );
};

export default ProductList;
