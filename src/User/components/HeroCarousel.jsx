import React, { useState, useEffect } from 'react';
import HeroCarouselData from '../../Data/HeroCarouselData';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = HeroCarouselData;

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

  return (
    <div className="w-full font-['Inter', 'Helvetica Neue', sans-serif]">
      {/* Notification bar */}
      <div className="bg-gradient-to-r from-[#ff4e50] to-[#f9d423] text-white py-3 text-center font-semibold text-sm tracking-wide">
        <div className="flex justify-center items-center gap-2.5">
          <span>SALE IS LIVE: UP TO 50% OFF ON GLOBAL LUXURY BRANDS</span>
          <span className="text-base animate-pulse">▶</span>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-800 ease-in-out text-white text-center px-5 ${slide.bgColor} ${
              index === currentSlide ? 'opacity-100' : ''
            }`}
          >
            <div className="max-w-[800px] px-5 animate-fade-in-up">
              <h2 className="text-3.5xl font-bold mb-2.5 text-shadow-md">{slide.title}</h2>
              <h3 className="text-2.2xl font-semibold mb-5 text-shadow-sm">{slide.subtitle}</h3>
              <p className="text-xl mb-7 max-w-[600px] mx-auto leading-relaxed">{slide.description}</p>
              <button className="bg-white text-gray-800 border-none py-3.5 px-10 text-base font-semibold rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg">
                {slide.ctaText}
              </button>
            </div>
          </div>
        ))}
        
        {/* Navigation arrows - hidden on mobile, visible on medium screens and up */}
        <button 
          className="hidden md:flex absolute top-1/2 left-5 transform -translate-y-1/2 bg-white/20 border-none text-white text-2xl w-12 h-12 rounded-full cursor-pointer transition-all duration-300 ease-in-out items-center justify-center hover:bg-white/40"
          onClick={goToPrevSlide}
        >
          &#8249;
        </button>
        <button 
          className="hidden md:flex absolute top-1/2 right-5 transform -translate-y-1/2 bg-white/20 border-none text-white text-2xl w-12 h-12 rounded-full cursor-pointer transition-all duration-300 ease-in-out items-center justify-center hover:bg-white/40"
          onClick={goToNextSlide}
        >
          &#8250;
        </button>
        
        {/* Indicators */}
        {/* <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ease-in-out ${
                index === currentSlide ? 'bg-white scale-120' : 'bg-white/50'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default HeroCarousel;