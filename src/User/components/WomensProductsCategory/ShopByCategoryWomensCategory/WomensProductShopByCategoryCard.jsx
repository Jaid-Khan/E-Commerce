import React from "react";
import { Link } from "react-router-dom";

const WomensProductShopByCategoryCard = ({ 
  category, 
  hoveredItem, 
  setHoveredItem
}) => {
  return (
    <Link 
      to={category.url}
      className="block relative group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200"
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
      </div>
      
      {/* Bottom Content - Simplified */}
      <div className="p-5 bg-white border-t border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default WomensProductShopByCategoryCard;