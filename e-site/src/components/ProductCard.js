import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, isLoggedIn }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      console.log(`${product.name} added to cart`);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 max-w-sm mx-auto">
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
        />
        <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
          Shipped from abroad
        </span>
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <div className="text-gray-600 mt-2 flex items-center space-x-2">
          <span className="text-xl font-bold text-orange-600">
            KSh {product.price}
          </span>
          {product.originalPrice && (
            <span className="line-through text-sm text-gray-400">
              KSh {product.originalPrice}
            </span>
          )}
          {product.discount && (
            <span className="text-xs bg-green-100 text-green-600 font-medium px-1 py-0.5 rounded">
              -{product.discount}%
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-1">In stock</p>
        <p className="text-sm text-gray-500 mt-1">
          + shipping from KSh {product.shippingPrice} to CBD - UON/Globe/Koja
        </p>
        <p className="text-sm text-gray-500 mt-1">
          ⭐ {product.ratings} stars ({product.reviews} verified ratings)
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-orange-500 text-white text-sm font-semibold py-2 rounded hover:bg-orange-600 transition"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
