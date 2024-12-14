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
    <div className='bg-gray-300 h-screen'>
      <div className="flex flex-direction-column gap-10 mr-[10%] ml-[10%] mt-[5%] p-4 h-full w-3/4">
        <div className='w-1/3'>
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover my-4" />
        </div>
        <div className='w-1/2'>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-700">Price: KSh {product.price}</p>
          <p className="mt-4">{product.description}</p>
          <p className="mt-2 text-sm text-gray-500">Items in stock: {product.stock}</p>
        </div>
        
      </div>
    </div>
  );
}

export default ProductDetails;
