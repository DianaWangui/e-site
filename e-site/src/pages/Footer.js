import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 w-full">
      <div className="container mx-auto px-4 px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Need Help Section */}
          <div>
            <h4 className="font-semibold text-orange-400 mb-4">Need Help?</h4>
            <ul>
              <li><a href="#" className="hover:text-orange-400">Chat with us</a></li>
              <li><a href="#" className="hover:text-orange-400">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="font-semibold text-orange-400 mb-4">Useful Links</h4>
            <ul>
              <li><a href="#" className="hover:text-orange-400">Track Your Order</a></li>
              <li><a href="#" className="hover:text-orange-400">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-orange-400">Return Policy</a></li>
              <li><a href="#" className="hover:text-orange-400">How to Order</a></li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="font-semibold text-orange-400 mb-4">About Us</h4>
            <ul>
              <li><a href="#" className="hover:text-orange-400">Our Story</a></li>
              <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="font-semibold text-orange-400 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400"><i className="fab fa-facebook"></i> Facebook</a>
              <a href="#" className="hover:text-orange-400"><i className="fab fa-twitter"></i> Twitter</a>
              <a href="#" className="hover:text-orange-400"><i className="fab fa-instagram"></i> Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MyStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
