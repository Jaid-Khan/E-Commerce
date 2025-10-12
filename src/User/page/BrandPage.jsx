import React from 'react';
import BrandCard from '../components/Brand/BrandCard';

const BrandsPage = () => {
  const featuredBrands = [
    {
      id: 1,
      brand: "Zara",
      discount: "UP TO 40% OFF",
      image: "https://www.logo.wine/a/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.svg",
      href: "/brand/zara"
    },
    {
      id: 2,
      brand: "H&M",
      discount: "UP TO 50% OFF",
      image: "https://www.logo.wine/a/logo/H%26M/H%26M-Logo.wine.svg",
      href: "/brand/hm"
    },
    {
      id: 3,
      brand: "Forever 21",
      discount: "UP TO 40% OFF",
      image: "https://cdn.brandfetch.io/idcMH1IHZJ/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1676032240689",
      href: "/brand/forever21"
    },
    {
      id: 4,
      brand: "Nike",
      discount: "UP TO 45% OFF",
      image: "https://www.logo.wine/a/logo/Nike%2C_Inc./Nike%2C_Inc.-Nike-White-Dark-Background-Logo.wine.svg",
      href: "/brand/nike"
    },
    {
      id: 5,
      brand: "Adidas",
      discount: "UP TO 35% OFF",
      image: "https://www.logo.wine/a/logo/Adidas/Adidas-Logo.wine.svg",
      href: "/brand/adidas"
    },
    {
      id: 6,
      brand: "Levi's",
      discount: "UP TO 50% OFF",
      image: "https://cdn.brandfetch.io/id6WkICeID/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1754300713582",
      href: "/brand/levis"
    },
    {
      id: 7,
      brand: "CALVIN KLEIN",
      discount: "UP TO 50% OFF",
      image: "https://www.logo.wine/a/logo/Calvin_Klein_(company)/Calvin_Klein_(company)-Logo.wine.svg",
      href: "/brand/ck"
    },
    {
      id: 8,
      brand: "Tommy Hilfiger",
      discount: "UP TO 50% OFF",
      image: "https://cdn.brandfetch.io/idXzJSRLEO/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667624000097",
      href: "/brand/tommy"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Brand</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your favorite brands and explore their latest collections with exclusive discounts
          </p>
        </div>

        {/* Brands Grid */}
        <div className="flex flex-wrap -mx-2 sm:-mx-3 justify-center">
          {featuredBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Premium Brands, Unbeatable Prices
            </h2>
            <p className="text-gray-600 mb-6">
              Explore our curated collection of top fashion brands. From high-street favorites to luxury labels, 
              we bring you the best of fashion with exclusive discounts and latest trends.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-500">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Free Shipping</h3>
                <p>On orders over $50</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy Returns</h3>
                <p>30-day return policy</p>
              </div>
              <div>
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