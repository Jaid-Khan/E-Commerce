// FeaturedProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProductCard = ({ product, onImageError }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x400/4A90E2/FFFFFF?text=Featured+Product';
    if (onImageError) {
      onImageError(e);
    }
  };

  return (
    <div className="px-3 h-full">
      <Link 
        to={`/product/${product.id}`} // Using your existing route: /product/:productId
        className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 h-full"
      >
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            onError={handleImageError}
            loading="lazy"
          />
          {/* Product Badges */}
          {product.isNew && (
            <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </div>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedProductCard;