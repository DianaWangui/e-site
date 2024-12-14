import React from 'react';

import chrismas from '../images/chrismas1.jpg';
import ProductCard from '../components/ProductCard';
import Footer from './Footer';

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
      <div className="bg-gray-100 ml-[10%] mr-[10%] pt-16">
        <section className="bg-red-600 text-white p-4">
          <h2 className="text-2xl font-bold mb-2">Daily Finds | Live Now</h2>
          <p className="text-sm">Explore</p>
        </section>
               
      </div>
      <ProductCard />
      <Footer />
    </div>
  );
}

export default Home;
