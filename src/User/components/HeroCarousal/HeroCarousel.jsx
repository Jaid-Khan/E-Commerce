// HeroCarousel.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import HeroCarouselData from '../../../Data/HeroCarouselData';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Initialize navigate function
  const slides = HeroCarouselData;

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      const promises = slides.map(slide => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.backgroundImage;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      
      Promise.all(promises)
        .then(() => setIsLoading(false))
        .catch(err => {
          console.error("Error preloading images", err);
          setIsLoading(false);
        });
    };
    
    preloadImages();
  }, [slides]);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Handle CTA button click
  const handleCtaClick = (targetPage) => {
    navigate(targetPage);
  };

  return (
    <div className="w-full font-['Inter', 'Helvetica Neue', sans-serif]">
      {/* Notification bar */}
      <div className="bg-gradient-to-r from-[#ff4e50] to-[#f9d423] text-white py-2 md:py-3 text-center font-semibold text-xs sm:text-sm md:text-base tracking-wide">
        <div className="flex justify-center items-center gap-2 sm:gap-2.5">
          <span>SALE IS LIVE: UP TO 50% OFF ON GLOBAL LUXURY BRANDS</span>
          <span className="text-sm sm:text-base animate-pulse">▶</span>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-30">
            <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}
        
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-800 ease-in-out text-white text-center px-4 sm:px-5 ${
              index === currentSlide ? 'opacity-100' : ''
            } ${slide.bgColor}`}
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="max-w-[90%] sm:max-w-[800px] px-3 sm:px-5 animate-fade-in-up z-10 relative">
              {/* Main Title - Responsive sizes */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-2.5 text-shadow-md leading-tight sm:leading-normal">
                {slide.title}
              </h1>
              
              {/* Subtitle - Responsive sizes */}
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 md:mb-5 text-shadow-sm leading-tight sm:leading-normal">
                {slide.subtitle}
              </h3>
              
              {/* Description - Responsive sizes */}
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5 md:mb-6 lg:mb-7 max-w-[90%] sm:max-w-[600px] mx-auto leading-relaxed sm:leading-loose">
                {slide.description}
              </p>
              
              {/* CTA Button - Responsive sizes */}
              <button 
                className="bg-white text-gray-800 border-none py-2.5 px-6 sm:py-3 sm:px-8 md:py-3.5 md:px-10 lg:py-4 lg:px-12 text-sm sm:text-base md:text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg"
                onClick={() => handleCtaClick(slide.targetPage)}
              >
                {slide.ctaText}
              </button>
            </div>
          </div>
        ))}
        
        {/* Navigation arrows - hidden on mobile, visible on medium screens and up */}
        <button 
          className="hidden sm:flex absolute top-1/2 left-2 sm:left-3 md:left-5 transform -translate-y-1/2 bg-white/20 border-none text-white text-xl sm:text-2xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full cursor-pointer transition-all duration-300 ease-in-out items-center justify-center hover:bg-white/40 z-20"
          onClick={goToPrevSlide}
        >
          &#8249;
        </button>
        <button 
          className="hidden sm:flex absolute top-1/2 right-2 sm:right-3 md:right-5 transform -translate-y-1/2 bg-white/20 border-none text-white text-xl sm:text-2xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full cursor-pointer transition-all duration-300 ease-in-out items-center justify-center hover:bg-white/40 z-20"
          onClick={goToNextSlide}
        >
          &#8250;
        </button>
        
        {/* Indicators - Responsive sizes */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-2.5 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-1 sm:h-1 md:w-3 md:h-3 rounded-full border-none cursor-pointer transition-all duration-300 ease-in-out ${
                index === currentSlide ? 'bg-white scale-110 sm:scale-120' : 'bg-white/50'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;