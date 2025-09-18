import React, { useState } from 'react';
import { categories, } from '../../../../Data/WomensProductCategoryData'; // Fixed import path
import WomensProductShopByCategoryCard from './WomensProductShopBycategoryCard'; // Import the new card component

const WomensProductsShopByCategory = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleCategoryClick = (categoryName) => {
    // In a real application, this would navigate to the category page
    alert(`Navigating to ${categoryName} page`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop By Category</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our curated collection of men's fashion categories
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <WomensProductShopByCategoryCard
            key={category.id}
            category={category}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
            handleCategoryClick={handleCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default WomensProductsShopByCategory;