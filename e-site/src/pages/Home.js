import React from 'react';
import chrismas from '../images/bg1.jpeg';
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
        backgroundAttachment: 'fixed',  // This keeps the background fixed while scrolling
        minHeight: '100vh',  // Ensures the background covers the full screen height
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
