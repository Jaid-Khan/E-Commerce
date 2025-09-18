import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import FeaturedCategoryCard from './FeaturedCategoryCard';
import featuredCategories from '../../../Data/FeaturedCategoryData';

const FeaturedCategoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const itemsPerView = 4; // Number of items visible at once
  const transitionDuration = 300; // Match this with CSS transition duration

  // Create duplicated slides for infinite effect
  const duplicatedCategories = [
    ...featuredCategories,
    ...featuredCategories,
    ...featuredCategories
  ];

  const totalSlides = duplicatedCategories.length;
  const actualItemsCount = featuredCategories.length;

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex + 1;
      
      // If we're at the end of the duplicated array, reset to beginning without animation
      if (newIndex >= totalSlides - itemsPerView) {
        // Wait for transition to complete before resetting
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
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex - 1;
      
      // If we're at the beginning, jump to the end of the original set
      if (newIndex < 0) {
        // Wait for transition to complete before resetting
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

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 50000); // 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xs sm:text-sm text-red-600 font-semibold text-center mb-6 sm:mb-10 tracking-wide">
          ALL EYES ON <span className="text-xl sm:text-2xl md:text-3xl text-black block mt-1 sm:mt-2 font-bold">OUR FEATURED BRANDS</span>
        </h2>
        
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile, visible on md and up */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700" />
          </button>
          
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 4)}%)`,
                transition: isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : 'none'
              }}
            >
              {duplicatedCategories.map((category, index) => (
                <FeaturedCategoryCard key={`${category.id}-${index}`} category={category} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Dots Indicator - Hidden on mobile, visible on md and up */}
        {/* <div className="flex justify-center mt-6 hidden md:flex">
          {featuredCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === currentIndex % actualItemsCount ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedCategoriesCarousel;