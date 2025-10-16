import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  const navigate = useNavigate();

  const handleBrandClick = () => {
    const brandSlug = brand.href.split('/').pop();
    navigate(`/brand/${brandSlug}`);
  };

  return (
    // REMOVED fixed width classes - let carousel control the width
    <div className="px-2 sm:px-3 flex-shrink-0 h-full">
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer group"
        onClick={handleBrandClick}
      >
        <div className="h-32 sm:h-36 md:h-40 lg:h-48 bg-gray-100 overflow-hidden flex items-center justify-center p-4">
          <img 
            src={brand.image} 
            alt={brand.brand}
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
            }}
          />
        </div>
        <div className="p-3 sm:p-4 text-center flex flex-col flex-grow justify-between">
          <div>
            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 group-hover:text-red-600 transition-colors duration-200">
              {brand.brand}
            </h3>
            <p className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">
              {brand.discount}
            </p>
          </div>
          <button 
            className="mt-2 sm:mt-3 bg-black text-white py-2 px-4 rounded text-xs sm:text-sm hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
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