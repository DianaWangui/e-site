import React from 'react';
import chrismas from '../images/bg1.jpeg';
import ProductCard from '../components/ProductCard';
import Footer from './Footer';
import categories from '../data/categories'; // Import categories data

function Home({ searchQuery }) {
  // Flatten the products from all categories
  const allProducts = categories.flatMap((category) => category.products);

  // Function to filter products based on search query
  const getFilteredProducts = (query) => {
    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  // If there's a search query, filter the products; otherwise, show all products
  const filteredProducts = searchQuery ? getFilteredProducts(searchQuery) : allProducts;

  // Group filtered products back by category
  const filteredCategories = categories.map((category) => ({
    ...category,
    products: category.products.filter((product) =>
      filteredProducts.includes(product)
    ),
  }));

  return (
    <div
      style={{
        backgroundImage: `url(${chrismas})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      <div className="bg-gray-100 ml-[10%] mr-[10%] pt-16">
        <section className="bg-red-600 text-white p-4">
          <h2 className="text-2xl font-bold mb-2">Daily Finds | Live Now</h2>
          <p className="text-sm">Explore</p>
        </section>

        {/* Display Filtered Products */}
        <ProductCard categories={filteredCategories} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
