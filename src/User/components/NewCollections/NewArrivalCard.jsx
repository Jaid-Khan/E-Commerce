// NewArrivalCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewArrivalCard = ({ item }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div 
      className="newArrivalCard bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 m-2"
      onClick={handleCardClick}
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
          src={item.imageUrl || item.image} 
          alt={item.title || item.name}
        />
        {item.discountPercent > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {item.discountPercent}% OFF
          </div>
        )}
      </div>
      
      <div className="p-3 sm:p-4">
        <div className="mb-2">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            {item.brand || item.category}
          </p>
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">
            {item.title || item.name}
          </h3>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ₹{item.discountedPrice || item.price}
            </span>
            {item.price && item.discountedPrice && (
              <span className="text-sm text-gray-500 line-through">
                ₹{item.price}
              </span>
            )}
          </div>
          
          {item.color && (
            <div className="flex items-center gap-1">
              <div 
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: item.color.toLowerCase() }}
                title={item.color}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewArrivalCard;