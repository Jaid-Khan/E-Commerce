import React from 'react';
import categories from '../../../Data/ShopByCategory';
import ShopByCategoryCard from './ShopByCategoryCard';

const CategorySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {categories.map(category => (
        <ShopByCategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategorySection;