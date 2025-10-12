// WomenCarousal.js
import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import WomenCard from "./WomenSectionCard";
import WomenData from "../../../Data/WomenSectionHomeData";

const WomenCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Responsive itemsPerView
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 768) {
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

  // Filter out any invalid data
  const validWomenData = WomenData.filter(item => item && item.id && item.image);
  
  // If no valid data, don't render
  if (validWomenData.length === 0) {
    return (
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xs sm:text-sm text-red-600 font-semibold text-center mb-6 sm:mb-10 tracking-wide">
            WOMEN'S COLLECTION
            <span className="text-xl sm:text-2xl md:text-3xl text-black block mt-1 sm:mt-2 font-bold">
              TRENDING NOW
            </span>
          </h2>
          <p className="text-gray-500">No women's products available at the moment.</p>
        </div>
      </section>
    );
  }

  // Infinite effect (duplicated categories)
  const duplicatedCategories = [
    ...validWomenData,
    ...validWomenData,
    ...validWomenData,
  ];

  const totalSlides = duplicatedCategories.length;
  const actualItemsCount = validWomenData.length;

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
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView]);

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xs sm:text-sm text-red-600 font-semibold text-center mb-6 sm:mb-10 tracking-wide">
          {/* WOMEN'S COLLECTION */}
          <span className="text-xl sm:text-2xl md:text-3xl text-black block mt-1 sm:mt-2 font-bold">
            Discover The Women's Collection
          </span>
        </h2>

        <div className="relative">
          {/* Desktop Navigation */}
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

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
                transition: isTransitioning
                  ? `transform ${transitionDuration}ms ease-in-out`
                  : "none",
              }}
            >
              {duplicatedCategories.map((category, index) => (
                <WomenCard
                  key={`${category.id}-${index}`}
                  item={category}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        {/* <div className="flex justify-center mt-4 sm:mt-6 hidden md:flex">          
          {validWomenData
            .slice(0, Math.ceil(validWomenData.length / itemsPerView))
            .map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * itemsPerView)}
                className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full mx-1 ${
                  Math.floor(currentIndex / itemsPerView) %
                    Math.ceil(actualItemsCount / itemsPerView) ===
                  index
                    ? "bg-black"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
        </div> */}
      </div>
    </section>
  );
};

export default WomenCarousal;