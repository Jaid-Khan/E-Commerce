// Mock data for wishlist items - Men's and Women's Clothing Only
export const wishlistItemsData = [
  {
    id: 1,
    name: 'Men Solid Pure Cotton Straight Kurta (White)',
    price: 799,
    originalPrice: 999,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/a/s/o/l-krt-btn06-apektra-original-imahdmq3fsfc6efu.jpeg?q=70',
    rating: 4.6,
    reviewCount: 234,
    inStock: true,
    brand: 'EthnicWear',
    addedDate: '2024-01-12',
    category: 'Men Clothing',
    size: 'L',
    color: 'White'
  },
  {
    id: 2,
    name: 'Women Floral Print Georgette Saree (Blue)',
    price: 2499,
    originalPrice: 2999,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/6/f/g/free-sequin-embellished-saree-with-blouse-sequin-embellished-original-imahfyy8bh8hzr2f.jpeg?q=70',
    rating: 4.4,
    reviewCount: 156,
    inStock: true,
    brand: 'SareeHouse',
    addedDate: '2024-01-07',
    category: 'Women Clothing',
    size: 'Free Size',
    color: 'Blue'
  },
  {
    id: 3,
    name: 'Men Slim Fit Denim Jeans (Dark Blue)',
    price: 1999,
    originalPrice: 2499,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/u/n/3/30-mj-bk-02-urbano-fashion-original-imahd4gbsh6r2hqk.jpeg?q=70',
    rating: 4.3,
    reviewCount: 189,
    inStock: true,
    brand: 'UrbanDenim',
    addedDate: '2024-01-10',
    category: 'Men Clothing',
    size: '32',
    color: 'Dark Blue'
  },
  {
    id: 4,
    name: 'Women Embroidered Kurta Set (Green)',
    price: 1899,
    originalPrice: 2299,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/p/j/m/m-aw22dts-ghs-2201-1-samoh-original-imahfyy8g4syygzh.jpeg?q=70',
    rating: 4.5,
    reviewCount: 127,
    inStock: true,
    brand: 'EthnicChic',
    addedDate: '2024-01-08',
    category: 'Women Clothing',
    size: 'M',
    color: 'Green'
  },
  {
    id: 5,
    name: 'Men Casual Checkered Shirt (Red)',
    price: 899,
    originalPrice: 1199,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/v/7/k/xl-cb-02-vebnor-original-imahf2n8w9snzuba.jpeg?q=70',
    rating: 4.2,
    reviewCount: 98,
    inStock: false,
    brand: 'CasualWear',
    addedDate: '2024-01-05',
    category: 'Men Clothing',
    size: 'XL',
    color: 'Red'
  },
  {
    id: 6,
    name: 'Women Party Wear Dress (Black)',
    price: 3499,
    originalPrice: 3999,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/l/2/k/s-22eud1c79696-supernova-original-imahfyy9hqfbhegz.jpeg?q=70',
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    brand: 'GlamourFits',
    addedDate: '2024-01-15',
    category: 'Women Clothing',
    size: 'S',
    color: 'Black'
  },
  {
    id: 7,
    name: 'Men Sports T-Shirt (Black)',
    price: 499,
    originalPrice: 699,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/9/k/m-901-black-one-nb-nicky-boy-original-imahd3qzjczjdy5h.jpeg?q=70',
    rating: 4.1,
    reviewCount: 167,
    inStock: true,
    brand: 'ActiveWear',
    addedDate: '2024-01-03',
    category: 'Men Clothing',
    size: 'M',
    color: 'Black'
  },
  {
    id: 8,
    name: 'Women Cotton Palazzo Suit (Pink)',
    price: 1599,
    originalPrice: 1999,
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/6/k/u/free-3-pc-printed-palazzo-suit-001-vastranikhar-original-imahfyf6fzgjf9uh.jpeg?q=70',
    rating: 4.4,
    reviewCount: 145,
    inStock: true,
    brand: 'TraditionalTreasures',
    addedDate: '2024-01-11',
    category: 'Women Clothing',
    size: 'Free Size',
    color: 'Pink'
  }
];

// Utility functions for wishlist
export const getWishlistStats = (items) => {
  return {
    totalItems: items.length,
    inStock: items.filter(item => item.inStock).length,
    outOfStock: items.filter(item => !item.inStock).length,
    totalValue: items.reduce((sum, item) => sum + item.price, 0),
    categories: [...new Set(items.map(item => item.category))]
  };
};

export const sortWishlistItems = (items, sortBy) => {
  const sortedItems = [...items];
  
  switch (sortBy) {
    case 'recent':
      return sortedItems.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
    case 'price-low':
      return sortedItems.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedItems.sort((a, b) => b.price - a.price);
    case 'name':
      return sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    case 'category':
      return sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    default:
      return sortedItems;
  }
};

export const filterWishlistByCategory = (items, category) => {
  if (category === 'all') return items;
  return items.filter(item => item.category === category);
};

export const getDiscountPercentage = (price, originalPrice) => {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
};

// Clothing specific wishlist functions
export const getMensClothingItems = (items) => {
  return items.filter(item => item.category === 'Men Clothing');
};

export const getWomensClothingItems = (items) => {
  return items.filter(item => item.category === 'Women Clothing');
};

export const getAvailableSizesFromWishlist = (items) => {
  const sizes = new Set();
  items.forEach(item => {
    if (item.size) sizes.add(item.size);
  });
  return Array.from(sizes);
};

export const getAvailableColorsFromWishlist = (items) => {
  const colors = new Set();
  items.forEach(item => {
    if (item.color) colors.add(item.color);
  });
  return Array.from(colors);
};

// New utility functions for clothing categories
export const getClothingTypes = (items) => {
  const types = new Set();
  items.forEach(item => {
    if (item.name.toLowerCase().includes('kurta')) types.add('Kurtas');
    if (item.name.toLowerCase().includes('saree')) types.add('Sarees');
    if (item.name.toLowerCase().includes('jean')) types.add('Jeans');
    if (item.name.toLowerCase().includes('shirt')) types.add('Shirts');
    if (item.name.toLowerCase().includes('dress')) types.add('Dresses');
    if (item.name.toLowerCase().includes('t-shirt')) types.add('T-Shirts');
    if (item.name.toLowerCase().includes('suit')) types.add('Suits');
  });
  return Array.from(types);
};

// Export all utility functions together
export const wishlistUtils = {
  getWishlistStats,
  sortWishlistItems,
  filterWishlistByCategory,
  getDiscountPercentage,
  formatCurrency,
  getMensClothingItems,
  getWomensClothingItems,
  getAvailableSizesFromWishlist,
  getAvailableColorsFromWishlist,
  getClothingTypes
};

export default wishlistItemsData;