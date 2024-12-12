// Dynamically import all images from the 'images' folder
const importAll = (requireContext) => {
  const images = {};
  requireContext.keys().forEach((key) => {
    const imageName = key.replace('./', ''); // Get image file name
    images[imageName] = requireContext(key);
  });
  return images;
};

// Import all images
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

// Define categories
const categories = [
  {
    name: 'Electronics',
    products: [
      { id: 1, name: 'Smartphone', price: 499, stock: 15, image: images['pwani.jpg'], description: 'A high-performance smartphone with great features.' },
      { id: 2, name: 'Laptop', price: 899, stock: 10, image: images['shoe1.jpg'], description: 'A sleek and powerful laptop for work and play.' },
      { id: 3, name: 'Tablet', price: 299, stock: 20, image: images['shoe2.jpg'], description: 'A portable tablet for entertainment on the go.' },
      { id: 4, name: 'Smartwatch', price: 199, stock: 25, image: images['shoe3.jpg'], description: 'A stylish smartwatch with advanced features.' },
      { id: 5, name: 'Headphones', price: 129, stock: 30, image: images['shoe4.jpg'], description: 'Noise-canceling headphones for immersive sound.' },
      { id: 6, name: 'Camera', price: 599, stock: 8, image: images['shoe5.jpg'], description: 'A professional-grade camera for stunning photos.' },
      { id: 7, name: 'Drone', price: 799, stock: 5, image: images['shoe6.jpg'], description: 'A compact drone with HD video recording.' },
      { id: 8, name: 'Smart TV', price: 999, stock: 7, image: images['shoe7.jpg'], description: 'A 4K Smart TV for an amazing viewing experience.' },
    ],
  },
  {
    name: 'Clothing',
    products: [
      { id: 9, name: 'T-Shirt', price: 29, stock: 50, image: images['pwani1.jpg'], description: 'A comfortable and stylish t-shirt.' },
      { id: 10, name: 'Jeans', price: 59, stock: 40, image: images['shoe1.jpg'], description: 'Durable and trendy jeans for all occasions.' },
      { id: 11, name: 'Jacket', price: 89, stock: 20, image: images['shoe2.jpg'], description: 'A warm and fashionable jacket for cold weather.' },
      { id: 12, name: 'Sneakers', price: 79, stock: 30, image: images['shoe3.jpg'], description: 'Comfortable and durable sneakers for daily wear.' },
      { id: 13, name: 'Hat', price: 19, stock: 60, image: images['shoe4.jpg'], description: 'A stylish hat to complete your look.' },
    ],
  },
  {
    name: 'Home Appliances',
    products: [
      { id: 14, name: 'Blender', price: 49, stock: 25, image: images['pwani2.jpg'], description: 'A powerful blender for smoothies and more.' },
      { id: 15, name: 'Microwave', price: 199, stock: 10, image: images['shoe5.jpg'], description: 'A compact microwave for quick meals.' },
      { id: 16, name: 'Vacuum Cleaner', price: 299, stock: 15, image: images['shoe6.jpg'], description: 'A high-performance vacuum cleaner.' },
      { id: 17, name: 'Refrigerator', price: 499, stock: 5, image: images['shoe7.jpg'], description: 'A spacious and energy-efficient refrigerator.' },
      { id: 18, name: 'Washing Machine', price: 599, stock: 8, image: images['pwani3.jpg'], description: 'A reliable washing machine with advanced features.' },
    ],
  },
];

export default categories;
