// TrendingNowData.js
import { products } from './AllProductsData';

// Get actual products for trending section
const getTrendingProducts = () => {
  // Select popular products from the main products array
  const trendingProductIds = [8, 18, 28, 38, 48, 58];
  
  return trendingProductIds.map(id => {
    const product = products.find(p => p.id === id);
    return {
      id: product.id,
      name: product.brand,
      discount: `Up to ${product.discountPercent}% off`,
      image: product.imageUrl,
      productData: product
    };
  });
};

// Export trending data directly
export default getTrendingProducts();