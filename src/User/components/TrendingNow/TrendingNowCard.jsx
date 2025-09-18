// TrendingNowCard.js
import React from "react";

const TrendingNowCard = ({ category }) => {
  return (
    <div className="flex-shrink-0 px-2 w-1/2 sm:w-1/3 md:w-1/4">
      <div className="bg-white rounded-none overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
        <div className="h-48 sm:h-56 md:h-64 overflow-hidden relative">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-16"></div>
        </div>
        <div className="p-4 text-center">
          <h3 className="text-md font-bold text-gray-900 uppercase tracking-tight mb-1">
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