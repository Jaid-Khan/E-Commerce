import React from 'react';

const MenCard = ({ item }) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm overflow-hidden mx-2 transition-all duration-300 hover:shadow-md">
      <div className="relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.isNew && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
            NEW
          </div>
        )}
        {item.discount && (
          <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {item.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-red-600 font-bold">{item.price}</span>
            {item.originalPrice && (
              <span className="text-gray-400 text-sm line-through ml-2">{item.originalPrice}</span>
            )}
          </div>
          <button className="text-xs bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenCard;