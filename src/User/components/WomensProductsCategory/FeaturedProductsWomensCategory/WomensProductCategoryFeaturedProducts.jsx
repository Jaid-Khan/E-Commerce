// WomensProductCategoryFeaturedProducts.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import getWomenProducts from '../../../../Data/WomenSectionHomeData'; // Updated import to use WomenData
import FeaturedProductsCarousel from './FeaturedProductsCarousel';

const WomensProductCategoryFeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  // Load featured products - updated to use getWomenProducts
  useEffect(() => {
    const productsData = getWomenProducts;
    setFeaturedProducts(productsData);
  }, []);

  // Responsive itemsPerView
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const transitionDuration = 300;

  // Infinite effect (duplicated products)
  const duplicatedProducts = [
    ...featuredProducts,
    ...featuredProducts,
    ...featuredProducts,
  ];

  const totalSlides = duplicatedProducts.length;
  const actualItemsCount = featuredProducts.length;

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;

      if (newIndex >= totalSlides - itemsPerView) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0);
          setTimeout(() => setIsTransitioning(true), 50);
        }, transitionDuration);
      }

      return newIndex;
    });
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;

      if (newIndex < 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(totalSlides - itemsPerView - 1);
          setTimeout(() => setIsTransitioning(true), 50);
        }, transitionDuration);
      }

      return newIndex;
    });
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // Auto-scroll
  useEffect(() => {
    if (featuredProducts.length > 0) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, itemsPerView, featuredProducts.length]);

  // Add error handling for images - updated placeholder color for women's section
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x400/FF6B6B/FFFFFF?text=Featured+Product';
  };

  // If no valid data, render fallback - updated text for women's section
  if (featuredProducts.length === 0) {
    return (
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium women's products
            </p>
          </div>
          <p className="text-gray-500 text-center">No featured products available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium women's products
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none hidden md:block border border-gray-200"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none hidden md:block border border-gray-200"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-700" />
          </button>

          {/* Carousel Container */}
          <FeaturedProductsCarousel
            products={duplicatedProducts}
            currentIndex={currentIndex}
            itemsPerView={itemsPerView}
            isTransitioning={isTransitioning}
            transitionDuration={transitionDuration}
            onImageError={handleImageError}
          />
        </div>

        {/* Dots Indicator
        <div className="flex justify-center mt-8">
          {featuredProducts
            .slice(0, Math.ceil(featuredProducts.length / itemsPerView))
            .map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * itemsPerView)}
                className={`h-3 w-3 rounded-full mx-1 transition-colors duration-200 ${
                  Math.floor(currentIndex / itemsPerView) %
                    Math.ceil(actualItemsCount / itemsPerView) ===
                  index
                    ? "bg-gray-900"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
        </div> */}

        {/* View All Products Button - updated for women's section */}
        {/* <div className="text-center mt-12">
          <Link 
            to="/women"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View All Women's Products
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default WomensProductCategoryFeaturedProducts;