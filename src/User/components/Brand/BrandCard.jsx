import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  const navigate = useNavigate();

  const handleBrandClick = () => {
    // Extract brand slug from the href and navigate to the brand page
    const brandSlug = brand.href.split('/').pop(); // Gets 'zara', 'hm', etc.
    
    // Navigate to the brand products page
    navigate(`/brand/${brandSlug}`);
  };

  return (
    <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 sm:px-3 flex-shrink-0 mb-6">
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col cursor-pointer"
        onClick={handleBrandClick}
      >
        <div className="h-32 sm:h-36 md:h-40 lg:h-48 bg-gray-100 overflow-hidden flex items-center justify-center">
          <img 
            src={brand.image} 
            alt={brand.brand}
            className="w-3/4 h-3/4 object-contain p-4 bg-white"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
            }}
          />
        </div>
        <div className="p-2 sm:p-3 md:p-4 text-center flex flex-col flex-grow justify-between">
          <div>
            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1">{brand.brand}</h3>
            <p className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">{brand.discount}</p>
          </div>
          <button 
            className="mt-2 sm:mt-3 bg-black text-white py-1 sm:py-2 px-2 sm:px-4 rounded text-xs sm:text-sm hover:bg-gray-800 transition-colors duration-200"
            onClick={handleBrandClick}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;