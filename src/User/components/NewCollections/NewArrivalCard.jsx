// NewArrivalCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewArrivalCard = ({ category }) => {
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
      className="flex-shrink-0 px-2 cursor-pointer group"
      onClick={handleCardClick}
    >
      <div className="bg-white rounded-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        <div className="h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden relative flex-grow">
          <img
            src={category.imageUrl || category.image}
            alt={category.title || category.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-12"></div>
          
          {/* Quick View Button */}
          <button
            onClick={handleQuickView}
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1.5 rounded-full hover:bg-opacity-70 transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
            title="Quick View"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>

          {/* Discount Badge */}
          {category.discountPercent > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {category.discountPercent}% OFF
            </div>
          )}
        </div>
        
        <div className="p-3 sm:p-4 text-center flex-shrink-0">
          <div className="mb-1">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
              {category.brand || category.category}
            </p>
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-tight group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
              {category.title || category.name}
            </h3>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-sm font-bold text-gray-900">
              ₹{category.discountedPrice || category.price}
            </span>
            {category.price && category.discountedPrice && (
              <span className="text-xs text-gray-500 line-through">
                ₹{category.price}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalCard;