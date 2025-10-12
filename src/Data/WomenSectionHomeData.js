// WomenData.js
import { products } from './AllProductsData';

// Get women's products for the women's section
const getWomenProducts = () => {
  // Select specific women's product IDs from the main products array
  const womenProductIds = [
    // 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, // Kurtis
    // 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, // Women's Jeans
    66, 67, 68, 69, 70, 71, 72, 73, 74, 75, // Women's Tops
    86, 87, 88, 89, 90, 91, 92, 93, 94, 95, // Women's Dresses
    96, 97, 98, 99, 100, // Sarees
    101, 102, 103, 104, // Women Pants
    105, 106, 107, 108, // Women's T-shirts
    117, 118, 119, 120, 121, 122, 123, 124, // Women's Sweaters
    133, 134, 135, 136, 137, 138, 139, 140, // Women's Jackets
    145, 146, 147, 148, // Ethnic Wear
    // 149, 150, 151, 152, // Lehenga Cholis
    153, 154, 155, 156, 157, // Salwar Suits
    158, 159, 160, 161, 162 // Shararas
  ];
  
  const validProducts = womenProductIds.map(id => {
    const product = products.find(p => p.id === id);
    if (!product) {
      console.warn(`Product with id ${id} not found in products array`);
      return null;
    }
    
    // Ensure we have a valid image URL - use placeholder if missing
    let imageUrl = product.imageUrl;
    if (!imageUrl || imageUrl === '' || imageUrl.includes('placeholder')) {
      imageUrl = 'https://via.placeholder.com/300x400/FF6B6B/FFFFFF?text=Women+Fashion';
    }
    
    return {
      id: product.id,
      name: product.title || product.brand || 'Women Fashion',
      description: product.description || 'Stylish women fashion product',
      price: `₹${product.discountedPrice || product.price || 999}`,
      originalPrice: product.price > (product.discountedPrice || product.price) ? `₹${product.price}` : null,
      discount: product.discountPercent || Math.round(((product.price - (product.discountedPrice || product.price)) / product.price) * 100) || 0,
      image: imageUrl,
      isNew: (product.quantity || 0) > 20,
      productData: product
    };
  }).filter(Boolean); // Remove any null entries

  console.log(`Found ${validProducts.length} valid women's products`);
  
  return validProducts;
};

// Export women data directly
export default getWomenProducts();