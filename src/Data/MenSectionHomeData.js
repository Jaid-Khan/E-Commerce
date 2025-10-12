// MenData.js
import { products } from './AllProductsData';

// Get men's products for the men's section
const getMenProducts = () => {
  // Select specific men's product IDs from the main products array
  const menProductIds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, // Men's Kurtas
    // 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, // Men's Jeans
    56, 57, 58, 59, 60, 61, 62, 63, 64, 65, // Men's T-Shirts
    76, 77, 78, 79, 80, 81, 82, 83, 84, 85, // Men's Shirts
    109, 110, 111, 112, 113, 114, 115, 116, // Men's Sweaters
    125, 126, 127, 128, 129, 130, 131, 132, // Men's Jackets
    141, 142, 143, 144, // Men's Pants
    163, 164, 165, 166 // Track Pants
  ];
  
  const validProducts = menProductIds.map(id => {
    const product = products.find(p => p.id === id);
    if (!product) {
      console.warn(`Product with id ${id} not found in products array`);
      return null;
    }
    
    // Ensure we have a valid image URL - use placeholder if missing
    let imageUrl = product.imageUrl;
    if (!imageUrl || imageUrl === '' || imageUrl.includes('placeholder')) {
      imageUrl = 'https://via.placeholder.com/300x400/4A90E2/FFFFFF?text=Men+Fashion';
    }
    
    return {
      id: product.id,
      name: product.title || product.brand || 'Men Fashion',
      description: product.description || 'Stylish men fashion product',
      price: `₹${product.discountedPrice || product.price || 999}`,
      originalPrice: product.price > (product.discountedPrice || product.price) ? `₹${product.price}` : null,
      discount: product.discountPercent || Math.round(((product.price - (product.discountedPrice || product.price)) / product.price) * 100) || 0,
      image: imageUrl,
      isNew: (product.quantity || 0) > 20,
      productData: product
    };
  }).filter(Boolean); // Remove any null entries

  console.log(`Found ${validProducts.length} valid men's products`);
  
  return validProducts;
};

// Export men data directly
export default getMenProducts();