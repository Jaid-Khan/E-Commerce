import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrandPageCard = ({ brand }) => {
  const navigate = useNavigate();

  const handleBrandClick = () => {
    const brandSlug = brand.href?.split('/').pop() || brand.brand.toLowerCase().replace(/\s+/g, '-');
    navigate(`/brand/${brandSlug}`);
  };

  const handleShopNowClick = (e) => {
    e.stopPropagation();
    handleBrandClick();
  };

  return (
    <div className="w-full px-3 mb-8 group">
      <div 
        className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer border border-gray-100 overflow-hidden hover:border-gray-200"
        onClick={handleBrandClick}
      >
        {/* Image Container */}
        <div className="h-48 sm:h-56 bg-white overflow-hidden flex items-center justify-center p-4 relative">
          <img 
            src={brand.image} 
            alt={brand.brand}
            className="max-h-24 max-w-full object-scale-down transform group-hover:scale-105 transition-transform duration-500"
            style={{ 
              filter: 'brightness(1.1) contrast(1.1)',
              mixBlendMode: 'multiply'
            }}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
            }}
          />
        </div>
        
        {/* Content */}
        <div className="p-6 text-center flex flex-col flex-grow justify-between">
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200 tracking-tight">
              {brand.brand}
            </h3>
            <p className="text-red-600 font-semibold text-lg mb-1">
              {brand.discount}
            </p>
            {brand.description && (
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {brand.description}
              </p>
            )}
          </div>
          
          <button 
            className="mt-4 bg-black text-white py-3 px-6 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 hover:shadow-md w-full"
            onClick={handleShopNowClick}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandPageCard;