import React from 'react';

import chrismas from '../images/chrismas1.jpg';
import ProductCard from '../components/ProductCard';

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
        <ProductCard />
        
      </div>
    </div>
  );
}

export default Home;
