import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2 rounded" />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-700">{product.price}</p>
    </div>
  );
}

export default ProductCard;
