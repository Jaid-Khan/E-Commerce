import React from 'react';
import MensProductCategoryHeroSection from '../components/MensProductsCategory/HeroSectionMensCategory/MensProductCategoryHeroSection';
import MensProductsShopByCategory from '../components/MensProductsCategory/ShopByCategoryMensCategory/MensProductsShopByCategory';
import MensProductCategoryFeaturedProducts from '../components/MensProductsCategory/FeaturedProductsMensCategory/MensProductCategoryFeaturedProducts';

const MensProductCategoryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header (commented out) */}
      
      {/* Hero Section */}
      <MensProductCategoryHeroSection />

      {/* Categories Grid */}
      <MensProductsShopByCategory />

      {/* Featured Products */}
      <MensProductCategoryFeaturedProducts />
    </div>
  );
};

export default MensProductCategoryPage;