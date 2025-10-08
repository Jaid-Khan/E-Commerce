import React from "react";
import { Link } from "react-router-dom";

const WomensProductShopByCategoryCard = ({ 
  category, 
  hoveredItem, 
  setHoveredItem
}) => {
  return (
    <div 
      key={category.id}
      className="relative group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200"
      onMouseEnter={() => setHoveredItem(category.id)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Hover Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <h3 className="text-xl font-bold text-white text-center mb-3">{category.name}</h3>
        <Link 
          to={category.url}
          className="px-6 py-2 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200 shadow-md"
        >
          Explore Collection
        </Link>
      </div>
      
      {/* Bottom Content */}
      <div className="p-5 bg-white border-t border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{category.items} items</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-xs font-medium text-gray-500 mb-1">WOMEN'S</div>
            <Link 
              to={category.url}
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Category Badge */}
      <div className="absolute top-3 left-3">
        <span className="px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded">
          WOMEN
        </span>
      </div>
    </div>
  );
};

export default WomensProductShopByCategoryCard;