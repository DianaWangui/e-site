// // Dynamically import all images from the 'images' folder
// const importAll = (requireContext) => {
//   const images = {};
//   requireContext.keys().forEach((key) => {
//     const imageName = key.replace('./', ''); // Get image file name
//     images[imageName] = requireContext(key);
//   });
//   return images;
// };

// // Import all images
// const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const importAll = (requireContext) => {
  const images = {};
  try {
    requireContext.keys().forEach((key) => {
      const imageName = key.replace('./', '');
      images[imageName] = requireContext(key);
    });
  } catch (error) {
    console.error('Error loading images:', error);
  }
  return images;
};

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const categories = [
  {
    id: 1, // Unique category ID
    name: 'Best Selling',
    products: [
      { 
        id: 101, 
        name: 'Headphones', 
        price: 149, 
        stock: 12, 
        image: images['headphone2.jpg'], 
        description: 'Immerse yourself in crystal-clear sound with our noise-canceling headphones. Designed by SonicTech, these headphones deliver deep bass and premium audio. Ideal for music, gaming, or work, they come with a comfortable, adjustable fit.' 
      },
      { 
        id: 102, 
        name: 'Smart Watch', 
        price: 499, 
        stock: 15, 
        image: images['watch1.jpg'], 
        description: 'Stay connected and active with this smartwatch by TechGear. Track your fitness, receive notifications, and monitor your health. Durable and water-resistant, it’s perfect for your busy lifestyle.' 
      },
      { 
        id: 103, 
        name: 'Laptop', 
        price: 899, 
        stock: 10, 
        image: images['laptop.jpg'], 
        description: 'Experience powerful performance with the latest UltraBook by Innovate. This lightweight laptop is equipped with a high-speed processor, vibrant display, and all-day battery life for work or entertainment.' 
      },
    ],
  },
  {
    id: 2,
    name: 'On Offer',
    products: [
      { 
        id: 104, 
        name: 'Camera', 
        price: 599, 
        stock: 8, 
        image: images['camera1.jpg'], 
        description: 'Capture your best moments with this high-definition camera by PhotoPro. Featuring advanced image stabilization and low-light capabilities, it’s perfect for professionals and beginners.' 
      },
      { 
        id: 105, 
        name: 'Drone', 
        price: 1299, 
        stock: 5, 
        image: images['drone1.jpg'], 
        description: 'Take your photography to new heights with this easy-to-fly drone by SkyZoom. Equipped with 4K Ultra HD cameras and intelligent flight modes.' 
      },
      { 
        id: 102, // Same Smart Watch but shared with 'Best Selling'
        name: 'Smart Watch', 
        price: 499, 
        stock: 15, 
        image: images['watch2.jpg'], 
        description: 'Monitor your health, fitness, and notifications with this smartwatch by NextGen. Durable, stylish, and packed with features to keep you on track.' 
      },
    ],
  },
  {
    id: 3,
    name: 'Electronics',
    products: [
      { 
        id: 106, 
        name: 'Television', 
        price: 1200, 
        stock: 7, 
        image: images['tv.jpg'], 
        description: 'Watch your favorite shows and movies in stunning 4K resolution with the new UltraHD Smart TV. With built-in apps and a sleek design, it’s the perfect addition to your living room.' 
      },
      { 
        id: 107, 
        name: 'Camera', 
        price: 349, 
        stock: 10, 
        image: images['camera1.jpg'], 
        description: 'Elevate your home theater experience with this high-quality soundbar. Offering powerful bass and crystal-clear audio for movies, music, and more.' 
      },
      { 
        id: 105, // Same Drone shared with 'On Offer'
        name: 'Drone', 
        price: 1299, 
        stock: 5, 
        image: images['drone1.jpg'], 
        description: 'Take your photography to new heights with this easy-to-fly drone by SkyZoom. Equipped with 4K Ultra HD cameras and intelligent flight modes.' 
      },
    ],
  },
  {
    id: 4,
    name: 'Home Essentials',
    products: [
      { 
        id: 108, 
        name: 'Washing Machine', 
        price: 750, 
        stock: 4, 
        image: images['washingmachine.jpg'], 
        description: 'Make laundry a breeze with this energy-efficient washing machine. Designed for large loads and gentle care for your clothes.' 
      },
      { 
        id: 109, 
        name: 'Microwave', 
        price: 199, 
        stock: 9, 
        image: images['microwave.jpg'], 
        description: 'Prepare meals quickly and easily with this high-capacity microwave. Featuring multiple cooking modes and a sleek design.' 
      },
      { 
        id: 110, 
        name: 'Refrigerator', 
        price: 1200, 
        stock: 3, 
        image: images['fridge.jpg'], 
        description: 'Keep your food fresh and organized with this spacious refrigerator. Energy-efficient with smart cooling technology.' 
      },
    ],
  },
  {
    id: 5,
    name: 'Holiday Specials',
    products: [
      { 
        id: 111, 
        name: 'Christmas Tree', 
        price: 79, 
        stock: 20, 
        image: images['chrismastree.jpg'], 
        description: 'Celebrate the holiday season with this beautiful, pre-lit Christmas tree. Easy to assemble and perfect for any home.' 
      },
      { 
        id: 112, 
        name: 'Gift Hamper', 
        price: 59, 
        stock: 25, 
        image: images['flashsale2.png'], 
        description: 'A perfect gift for your loved ones, filled with delicious treats and holiday surprises.' 
      },
    ],
  },
];

export default categories;
