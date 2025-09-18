import React from 'react';
import WomensProductCategoryHeroSection from '../components/WomensProductsCategory/HeroSectionWomensCategory/WomensProductCategoryHeroSection';
import WomensProductsShopByCategory from '../components/WomensProductsCategory/ShopByCategoryWomensCategory/WomensProductsShopByCategory';
import WomensProductCategoryFeaturedProducts from '../components/WomensProductsCategory/FeaturedProductsWomensCategory/WomensProductCategoryFeaturedProducts';

const WomensProductCategoryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header (commented out) */}
      
      {/* Hero Section */}
      <WomensProductCategoryHeroSection />

      {/* Categories Grid */}
      <WomensProductsShopByCategory />

      {/* Featured Products */}
      <WomensProductCategoryFeaturedProducts />
    </div>
  );
};

export default WomensProductCategoryPage;