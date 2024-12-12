import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../data/categories';
import chrismas from '../images/chrismas1.jpg';

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${chrismas})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white ml-[10%] mr-[10%]">
        {/* Promotional Banner */}
        <section className="bg-green-600 text-white p-4">
          <h2 className="text-2xl font-bold mb-2">Daily Finds | Live Now</h2>
          <p className="text-sm">Explore</p>
        </section>

        {/* Product Sections */}
        <div className="p-4">
          {categories.map((category) => (
            <div key={category.name} className="mb-10">
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.products.map((product, index) => (
                  <Link
                    to={`/product/${product.id}`}
                    key={index}
                    className="block border rounded-lg shadow hover:shadow-lg"
                  >
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    <div className="p-2">
                      <h4 className="font-bold text-lg">{product.name}</h4>
                      <p className="text-sm text-gray-500">KSh {product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
