import React from 'react';
import { featuredProducts } from '../../../../Data/WomensProductCategoryData';
import WomensProductCategoryFeaturedProductsCard from './WomensProductCategoryFeaturedProductsCard';

const WomensProductCategoryFeaturedProducts = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium women's products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <WomensProductCategoryFeaturedProductsCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default WomensProductCategoryFeaturedProducts;