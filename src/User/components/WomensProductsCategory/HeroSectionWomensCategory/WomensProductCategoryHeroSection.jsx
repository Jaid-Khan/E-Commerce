import React from 'react';

const WomensProductCategoryHeroSection = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMHdvbWVufGVufDB8fDB8fHww"
          alt="Women's Fashion"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">New Arrivals</h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Discover the latest trends in Women's fashion. Premium quality and style for every occasion.
        </p>
      </div>
    </div>
  );
};

export default WomensProductCategoryHeroSection;