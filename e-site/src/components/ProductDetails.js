import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import the cart context
import categories from '../data/categories';

function ProductDetails() {
  const { id } = useParams();
  const { dispatch } = useCart(); // Access the cart dispatch method

  // Find the product by ID
  let product;
  let categoryName;
  for (const category of categories) {
    product = category.products.find((prod) => prod.id === parseInt(id));
    if (product) {
      categoryName = category.name;
      break;
    }
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  // Function to handle adding product to the cart
  const handleAddToCart = () => {
    console.log('im here');
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    });
  };

  return (
    <div className="bg-gray-300 min-h-screen mt-16">
      <div className="container p-4">
        <nav className="mx-[10%] py-2 px-4 rounded text-sm">
          <ul className="flex flex-wrap items-center gap-2 text-gray-600">
            <li>
              <Link to="/" className="hover:underline text-custom-green">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to={`/category/${categoryName}`} className="hover:underline text-custom-green">{categoryName}</Link>
            </li>
            <li>/</li>
            <li className="text-gray-600">{product.name}</li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-direction-column gap-10 mx-[10%] py-8 px-8 w-3/4 bg-white rounded shadow h-1/2">
        <div className="w-1/3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover my-4"
          />
          {/* Product Details */}
          <div className="mt-4 ml-[10%] mr-[10%]">
            <div className="flex flex-col items-start gap-2">
              <p className="text-gray-700 text-sm">
                <span className="font-bold text-gray-800">39</span> items left
              </p>
              <div className="w-full h-2 bg-gray-300 rounded-full relative">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${(39 / 100) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-2xl text-orange-600 font-semibold">
              Cedis {product.price}
            </p>
          </div>

          <p className="mt-6 text-gray-700">{product.description}</p>

          <div className="mt-8">
            <button
              className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 active:bg-orange-400"
              onClick={handleAddToCart} // Call the add-to-cart function
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
