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
    name: 'Best Selling',
    products: [
      { id: 19, name: 'Headphones', price: 149, stock: 12, image: images['headphone2.jpg'], description: 'Immerse yourself in crystal-clear sound with our noise-canceling headphones. Designed by SonicTech, these headphones deliver deep bass and premium audio. Ideal for music, gaming, or work, they come with a comfortable, adjustable fit.' },
      { id: 1, name: 'Smart Watch', price: 499, stock: 15, image: images['watch1.jpg'], description: 'Stay connected and active with this smartwatch by TechGear. Track your fitness, receive notifications, and monitor your health. Durable and water-resistant, it’s perfect for your busy lifestyle.' },
      { id: 2, name: 'Laptop', price: 899, stock: 10, image: images['laptop.jpg'], description: 'Experience powerful performance with the latest UltraBook by Innovate. This lightweight laptop is equipped with a high-speed processor, vibrant display, and all-day battery life for work or entertainment.' },
      { id: 6, name: 'Drone', price: 599, stock: 8, image: images['drone1.jpg'], description: 'Capture breathtaking aerial shots with this compact drone from SkyView. Equipped with a 4K camera and easy-to-use controls, it’s ideal for professionals and hobbyists alike.' },
      { id: 3, name: 'Tablet', price: 299, stock: 20, image: images['tablet1.jpg'], description: 'Enjoy seamless browsing and entertainment on this high-resolution tablet by StreamLine. Lightweight and versatile, it’s perfect for reading, streaming, or work on the go.' },
    ],
  },
  {
    name: 'On Offer',
    products: [
      { id: 6, name: 'Camera', price: 599, stock: 8, image: images['camera1.jpg'], description: 'Capture your best moments with this high-definition camera by PhotoPro. Featuring advanced image stabilization and low-light capabilities, it’s perfect for professionals and beginners.' },
      { id: 1, name: 'Smart Watch', price: 499, stock: 15, image: images['watch2.jpg'], description: 'Monitor your health, fitness, and notifications with this smartwatch by NextGen. Durable, stylish, and packed with features to keep you on track.' },
      { id: 12, name: 'Sneakers', price: 79, stock: 30, image: images['shoe3.jpg'], description: 'Step into comfort with these premium sneakers from FlexWear. Designed for durability and everyday use, they’re perfect for both casual and active lifestyles.' },
      { id: 13, name: 'Hat', price: 19, stock: 60, image: images['shoe5.jpg'], description: 'Stay stylish with this classic hat by ChicTrend. Made from high-quality materials, it’s perfect for any outfit and season.' },
    ],
  },
  {
    name: 'Christmas Deals',
    products: [
      { id: 25, name: 'Christmas Tree', price: 49, stock: 20, image: images['chrismastree.jpg'], description: 'Celebrate the holidays with this beautifully crafted Christmas tree by FestiDecor. Easy to assemble and perfect for all your seasonal decorations.' },
      { id: 26, name: 'Christmas Decor', price: 19, stock: 50, image: images['cdecor.jpg'], description: 'Add a festive touch to your home with this elegant Christmas decor set by BrightLights. Includes energy-efficient LED lights and ornaments.' },
      { id: 27, name: 'Gift Hampers', price: 89, stock: 10, image: images['cgift.jpg'], description: 'Delight your loved ones with these thoughtfully curated gift hampers from PresentCo. Packed with premium treats and surprises.' },
    ],
  },
  {
    name: 'Electronics',
    products: [
      { id: 6, name: 'Camera', price: 599, stock: 8, image: images['camera1.jpg'], description: 'High-resolution digital camera by VisionCraft, featuring advanced optics for professional-quality photos and videos.' },
      { id: 1, name: 'Smartphone', price: 499, stock: 15, image: images['watch1.jpg'], description: 'Stay ahead with the latest smartphone by InfinityTech. Sleek design, long battery life, and powerful performance for all your needs.' },
      { id: 2, name: 'Laptop', price: 899, stock: 10, image: images['laptop.jpg'], description: 'Innovative and efficient, this laptop from PrimeTech offers smooth multitasking and a stunning display for all your projects.' },
      { id: 6, name: 'Drone', price: 599, stock: 8, image: images['drone1.jpg'], description: 'Navigate the skies with ease using this advanced drone by AeroVision. Features a 4K camera for capturing cinematic footage.' },
      { id: 3, name: 'Tablet', price: 299, stock: 20, image: images['tablet1.jpg'], description: 'Versatile tablet by DigiGo, perfect for streaming, gaming, and productivity with its vivid display and smooth performance.' },
      { id: 4, name: 'Smartwatch', price: 199, stock: 25, image: images['watch2.jpg'], description: 'Track your fitness and stay connected with this premium smartwatch by ActiveTime. Stylish and feature-rich for everyday use.' },
      { id: 5, name: 'Headphones', price: 129, stock: 30, image: images['headphone1.jpg'], description: 'Experience immersive sound with these premium headphones by SoundPulse. Noise-canceling and lightweight for long-term comfort.' },
      { id: 7, name: 'Drone', price: 799, stock: 5, image: images['drone2.jpg'], description: 'Capture stunning aerial videos with this compact drone from SkyZoom. Equipped with HD recording and easy-to-use controls.' },
      { id: 8, name: 'Smart TV', price: 999, stock: 7, image: images['tv.jpg'], description: 'Transform your viewing experience with this 4K Smart TV by VisionPlus. Stunning clarity, vibrant colors, and built-in streaming apps.' },
    ],
  },
  {
    name: 'Shoes & Clothing',
    products: [
      { id: 9, name: 'T-Shirt', price: 29, stock: 50, image: images['shoe1.jpg'], description: 'Stay comfortable and stylish with this breathable cotton t-shirt from CasualWear. Perfect for everyday wear and easy to pair with jeans.' },
      { id: 10, name: 'Jeans', price: 59, stock: 40, image: images['shoe4.jpg'], description: 'Durable and trendy jeans by DenimPro, designed for style and comfort. Ideal for casual outings and versatile enough for any wardrobe.' },
      { id: 11, name: 'Jacket', price: 89, stock: 20, image: images['shoe2.jpg'], description: 'Stay warm and fashionable with this winter jacket from ArcticLine. Perfect for cold weather and built with high-quality materials for durability.' },
      { id: 12, name: 'Sneakers', price: 79, stock: 30, image: images['shoe3.jpg'], description: 'Enjoy comfort and support with these athletic sneakers from MoveMax. Ideal for running, walking, or casual outings.' },
      { id: 13, name: 'Hat', price: 19, stock: 60, image: images['shoe5.jpg'], description: 'Add a stylish finishing touch to your outfit with this classic hat by UrbanStyle. Lightweight and perfect for any season.' },
    ],
  },
  {
    name: 'Home Appliances',
    products: [
      { id: 14, name: 'Blender', price: 49, stock: 25, image: images['blender.jpg'], description: 'Create delicious smoothies and more with this powerful blender from KitchenEase. Featuring multiple speed settings for all your blending needs.' },
      { id: 15, name: 'Microwave', price: 199, stock: 10, image: images['microwave.jpg'], description: 'Prepare meals in minutes with this compact microwave by HeatMaster. Easy-to-use controls and energy-efficient performance.' },
      { id: 16, name: 'Vacuum Cleaner', price: 299, stock: 15, image: images['washingmachine.jpg'], description: 'Keep your home spotless with this high-performance vacuum cleaner from DustAway. Lightweight and equipped with advanced suction technology.' },
      { id: 17, name: 'Refrigerator', price: 499, stock: 5, image: images['fridge.jpg'], description: 'Keep your food fresh and organized with this energy-efficient refrigerator by ChillZone. Spacious interior and modern design.' },
      { id: 18, name: 'Washing Machine', price: 599, stock: 8, image: images['washingm.jpg'], description: 'Save time on laundry with this advanced washing machine by CleanPro. Features multiple wash settings and a large drum capacity.' },
    ],
  },
];

export default categories;
