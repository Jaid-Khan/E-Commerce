import React from 'react';

const OffersBanner = () => {
  return (
    <div className="w-full font-['Inter', 'Helvetica Neue', sans-serif]">
      {/* Main Offers Banner */}
      <div className="bg-gradient-to-r from-[#ff4e50] to-[#f9d423] text-white py-4 text-center font-semibold text-lg tracking-wide relative overflow-hidden">
        <div className="flex justify-center items-center gap-3 animate-pulse">
          <span className="text-xl">🔥</span>
          <span>SALE IS LIVE: UP TO 50% OFF ON GLOBAL LUXURY BRANDS</span>
          <span className="text-xl">🔥</span>
        </div>
        
        {/* Animated border for extra emphasis */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-30">
          <div className="h-full w-1/4 bg-white animate-moveLine"></div>
        </div>
      </div>

      {/* Additional offer highlights */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <span className="text-green-600">✓</span>
            <span>Free Shipping on Orders Over $50</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <span className="text-green-600">✓</span>
            <span>30-Day Money Back Guarantee</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <span className="text-green-600">✓</span>
            <span>Secure Payment Options</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersBanner;