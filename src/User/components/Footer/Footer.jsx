import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Men's Fashion</h3>
          <p className="text-gray-400">Premium quality clothing for the modern mens and womens.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/new-arrivals" className="hover:text-white">New Arrivals</Link></li>
            <li><Link to="/trending" className="hover:text-white">Trending Now</Link></li>
            <li><Link to="/mensproduct" className="hover:text-white">Mens Clothing</Link></li>
            <li><Link to="/womensproduct" className="hover:text-white">Womens Clothing</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/stores" className="hover:text-white">Stores</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <address className="not-italic text-gray-400">
            <p>123 Fashion Street</p>
            <p>New York, NY 10001</p>
            <p className="mt-2">Email: info@mensfashion.com</p>
            <p>Phone: (123) 456-7890</p>
          </address>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>© 2025 Men's & Women's Fashion. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;