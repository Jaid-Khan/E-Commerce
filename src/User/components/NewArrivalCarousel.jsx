import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import NewArrivalCard from './NewArrivalCard';
import newArrivalsData from '../../Data/NewArrivalData';

const NewArrivalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);
  const transitionDuration = 300;

  // Create duplicated slides for infinite effect
  const duplicatedItems = [
    ...newArrivalsData,
    ...newArrivalsData,
    ...newArrivalsData
  ];

  const totalSlides = duplicatedItems.length;
  const actualItemsCount = newArrivalsData.length;

  // Handle responsive items per view
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => {
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
    setCurrentIndex(prevIndex => {
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

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView]);

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xs sm:text-sm text-red-600 font-semibold text-center mb-6 sm:mb-10 tracking-wide">
          JUST ARRIVED <span className="text-xl sm:text-2xl md:text-3xl text-black block mt-1 sm:mt-2 font-bold">NEW COLLECTIONS</span>
        </h2>
        
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-700" />
          </button>
          
          {/* Carousel Container */}
          <div className="overflow-hidden px-8">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                transition: isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : 'none'
              }}
            >
              {duplicatedItems.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`} 
                  className="flex-shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <NewArrivalCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Dots Indicator */}
        {/* <div className="flex justify-center mt-6">
          {newArrivalsData.slice(0, Math.ceil(actualItemsCount / itemsPerView)).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * itemsPerView)}
              className={`h-2 w-2 rounded-full mx-1 ${
                Math.floor(currentIndex % actualItemsCount / itemsPerView) === index ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default NewArrivalCarousel;