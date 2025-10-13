// FeaturedProductsCarousel.js
import React from 'react';
import FeaturedProductCard from './FeaturedProductCard';

const FeaturedProductsCarousel = ({ 
  products, 
  currentIndex, 
  itemsPerView, 
  isTransitioning, 
  transitionDuration,
  onImageError 
}) => {
  return (
    <div className="overflow-hidden">
      <div
        className="flex"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          transition: isTransitioning
            ? `transform ${transitionDuration}ms ease-in-out`
            : "none",
        }}
      >
        {products.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="flex-shrink-0"
            style={{ width: `${100 / itemsPerView}%` }}
          >
            <FeaturedProductCard 
              product={product}
              onImageError={onImageError}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsCarousel;