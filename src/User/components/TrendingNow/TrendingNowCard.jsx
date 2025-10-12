// TrendingNowCard.js
import React from "react";
import { useNavigate } from 'react-router-dom';

const TrendingNowCard = ({ category }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (category.productData) {
      // If we have actual product data, navigate to product details
      navigate(`/product/${category.id}`);
    } else {
      // Fallback: navigate to products page with brand filter
      navigate(`/products?brand=${encodeURIComponent(category.name)}`);
    }
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    
    if (category.productData) {
      // Open quick view modal or navigate to quick view page
      console.log('Quick view product:', category.productData.title);
      // You can implement a modal here or navigate to a quick view route
    } else {
      console.log('Quick view brand:', category.name);
    }
  };

  return (
    <div 
      className="flex-shrink-0 px-2 w-1/2 sm:w-1/3 md:w-1/4 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="bg-white rounded-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative">
        <div className="h-48 sm:h-56 md:h-64 overflow-hidden relative">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-16"></div>
          
          {/* Quick View Button */}
          <button
            onClick={handleQuickView}
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
            title="Quick View"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>

          {/* Discount Badge */}
          {category.discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {category.discount.includes('%') ? category.discount : 'Sale'}
            </div>
          )}
        </div>
        
        <div className="p-4 text-center">
          <h3 className="text-md font-bold text-gray-900 uppercase tracking-tight mb-1 group-hover:text-red-600 transition-colors duration-200">
            {category.name}
          </h3>
          <p className="text-sm text-gray-700 font-medium">
            {category.discount || "Special offers"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrendingNowCard;