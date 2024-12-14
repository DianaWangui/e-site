import React from 'react';
import { useParams } from 'react-router-dom';
import categories from '../data/categories';

function ProductDetails() {
  const { id } = useParams();

  // Find product by ID
  let product;
  for (const category of categories) {
    product = category.products.find((prod) => prod.id === parseInt(id));
    if (product) break;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className='bg-gray-300 min-h-screen mt-16'>
      <div className='container'></div>
      <div className="flex flex-direction-column mt-32 gap-10 mr-[10%] ml-[10%] py-32 px-8 w-3/4 bg-white rounded shadow h-1/2">
        <div className='w-1/3'>
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover my-4" />
          <div className="flex gap-2 mt-4">
            {product.images && product.images.map((img, index) => (
              <img key={index} src={img} alt={`Thumbnail ${index}`} className="w-16 h-16 object-cover border border-gray-400 rounded" />
            ))}
          </div>
          <div className="ml-[10%] mr-[10%] mt-4 flex items-center gap-6">
            <h3 className="text-lg font-semibold">Share this product:</h3>
            <button className="text-blue-600 hover:text-blue-800"><i className="fab fa-facebook-square text-2xl"></i></button>
            <button className="text-blue-400 hover:text-blue-600"><i className="fab fa-twitter-square text-2xl"></i></button>
          </div>
        </div>

        {/* Product Details */}
        <div className='w-1/2'>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-2xl text-orange-600 font-semibold">KSh {product.price}</p>
            {product.discount && (
              <p className="text-xl text-gray-500 line-through">KSh {product.originalPrice}</p>
            )}
            {product.discount && (
              <p className="text-lg text-green-600">-{product.discount}%</p>
            )}
          </div>

          <p className="mt-2 text-sm text-gray-600">In stock</p>
          <p className="mt-6 text-gray-700">{product.description}</p>

          <div className="mt-8">
            <button className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600">ADD TO CART</button>
          </div>
          {/* Promotions Section */}
          <div className="mt-8 bg-white">
            <h2 className="text-xl font-bold mb-4">Promotions</h2>
            <ul className="list-disc ml-4 text-custom-green px-4">
              <li>Free delivery for orders above KSh 1999 in selected major cities.</li>
              <li>Easy and safer payments via the JumiaPay App.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
