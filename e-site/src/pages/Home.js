import React from 'react';
import ProductCard from '../components/ProductCard';
import categories from '../data/categories';

function Home() {
  return (
    <div className="p-4">
      {/* Daily Products Header */}
      <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-orange-500 text-white rounded-md">
        Daily Products
      </h2>

      {/* Loop through categories */}
      {categories.map((category) => (
        <div key={category.name} className="mb-6">
          <h3 className="text-xl font-bold mb-4">{category.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {category.products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
