import React from 'react';
import BrandPageCard from '../components/Brand/BrandPageCard';
import featuredBrands from '../../Data/BrandData';

const BrandsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Brand</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your favorite brands and explore their latest collections with exclusive discounts
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredBrands.map((brand) => (
            <BrandPageCard key={brand.id} brand={brand} />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl shadow-sm p-8 max-w-4xl mx-auto border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Premium Brands, Unbeatable Prices
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Explore our curated collection of top fashion brands. From high-street favorites to luxury labels, 
              we bring you the best of fashion with exclusive discounts and latest trends.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-base text-gray-500">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Free Shipping</h3>
                <p>On orders over $50</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy Returns</h3>
                <p>30-day return policy</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Payment</h3>
                <p>100% secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;