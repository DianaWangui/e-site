// src/data/categories.js

// Import the image at the top
import pwaniImage from '../images/pwani.jpg';  // Adjust the path if needed

const categories = [
  {
    name: 'Electronics',
    products: [
      { name: 'Phone', price: '$499', image: pwaniImage },
      { name: 'Laptop', price: '$899', image: pwaniImage },
      { name: 'Tablet', price: '$299', image: pwaniImage },
      { name: 'Smartwatch', price: '$199', image: pwaniImage },
      { name: 'Headphones', price: '$129', image: pwaniImage },
      { name: 'Camera', price: '$599', image: pwaniImage },
      { name: 'Drone', price: '$799', image: pwaniImage },
      { name: 'Smart TV', price: '$999', image: pwaniImage },
      { name: 'Bluetooth Speaker', price: '$89', image: pwaniImage },
      { name: 'External Hard Drive', price: '$159', image: pwaniImage }
    ]
  },
  {
    name: 'Clothing',
    products: [
      { name: 'T-Shirt', price: '$29', image: pwaniImage },
      { name: 'Jeans', price: '$59', image: pwaniImage },
      { name: 'Jacket', price: '$79', image: pwaniImage },
      { name: 'Sweater', price: '$49', image: pwaniImage },
      { name: 'Hoodie', price: '$69', image: pwaniImage },
      { name: 'Shorts', price: '$39', image: pwaniImage },
      { name: 'Dress', price: '$89', image: pwaniImage },
      { name: 'Skirt', price: '$49', image: pwaniImage },
      { name: 'Blouse', price: '$59', image: pwaniImage },
      { name: 'Cardigan', price: '$69', image: pwaniImage }
    ]
  },
  {
    name: 'Shoes',
    products: [
      { name: 'Sneakers', price: '$79', image: pwaniImage },
      { name: 'Boots', price: '$129', image: pwaniImage },
      { name: 'Sandals', price: '$49', image: pwaniImage },
      { name: 'Slippers', price: '$19', image: pwaniImage },
      { name: 'Running Shoes', price: '$99', image: pwaniImage },
      { name: 'Formal Shoes', price: '$119', image: pwaniImage },
      { name: 'Flip Flops', price: '$15', image: pwaniImage },
      { name: 'Loafers', price: '$89', image: pwaniImage },
      { name: 'Wedges', price: '$79', image: pwaniImage },
      { name: 'High Heels', price: '$139', image: pwaniImage }
    ]
  }
];

export default categories;
