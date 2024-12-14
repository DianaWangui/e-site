// ProductCard.js
import React from "react";
import { Link } from "react-router-dom";
import categories from "../data/categories";

function ProductCard() {
  // Function to get remaining stock for a product
  const getRemainingStock = (productId) => {
    for (const category of categories) {
      for (const product of category.products) {
        if (product.id === productId) {
          console.log(product.id); 
          return product.stock || 0;
        }
      }
    }
    return 0;
  };

  return (
    <div className="p-4 bg-gray-100 ml-[10%] mr-[10%] pt-16">
      {categories.map((category) => (
        <div key={category.name} className="mb-10 bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4 bg-custom-green py-4 px-4 text-gray-900">{category.name}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {category.products.map((product, index) => (
              <Link
                to={`/product/${product.id}`}
                key={index}
                className="block border rounded-lg shadow hover:shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2">
                  <h4 className="font-bold text-lg">{product.name}</h4>
                  <p className="text-lg text-gray-600">Cedis {product.price}</p>
                  <p className="text-xs text-orange-600 mt-1">
                    {getRemainingStock(product.id)} items remaining
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
