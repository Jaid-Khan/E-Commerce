import React from 'react';
import categories from '../../Data/ShopByCategory';
import ShopByCategoryCard from './ShopByCategoryCard';

const ShopByCategory = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 md:text-4xl">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((category) => (
            <ShopByCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;