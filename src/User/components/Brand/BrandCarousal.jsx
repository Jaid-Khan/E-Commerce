import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import BrandCard from "./BrandCard";
import BrandData from "../../../Data/BrandData";

const BrandCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);
  const transitionDuration = 300;

  // Create duplicated slides for infinite effect
  const duplicatedItems = [
    ...BrandData,
    ...BrandData,
    ...BrandData,
  ];

  const totalSlides = duplicatedItems.length;
  const actualItemsCount = BrandData.length;

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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;

      if (newIndex >= totalSlides - itemsPerView) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(actualItemsCount); // Reset to first set of duplicates
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
          setCurrentIndex(actualItemsCount * 2 - itemsPerView); // Reset to last set of duplicates
          setTimeout(() => setIsTransitioning(true), 50);
        }, transitionDuration);
      }

      return newIndex;
    });
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
          POPULAR BRANDS{" "}
          <span className="text-xl sm:text-2xl md:text-3xl text-black block mt-1 sm:mt-2 font-bold">
            SHOP BY BRAND
          </span>
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none transition-all duration-200
                      md:p-2 p-1 md:left-0 border border-gray-200"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="md:h-5 md:w-5 h-4 w-4 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none transition-all duration-200
                      md:p-2 p-1 md:right-0 border border-gray-200"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="md:h-5 md:w-5 h-4 w-4 text-gray-700" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden md:px-8 px-4">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                transition: isTransitioning
                  ? `transform ${transitionDuration}ms ease-in-out`
                  : "none",
              }}
            >
              {duplicatedItems.map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="flex-shrink-0"
                  style={{ 
                    width: `${100 / itemsPerView}%`,
                    padding: '0 8px' // Consistent spacing
                  }}
                >
                  <BrandCard brand={brand} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousal;