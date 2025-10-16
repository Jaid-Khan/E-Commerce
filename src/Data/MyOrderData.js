// MyOrderData.js

export const mockOrdersData = [
  {
    id: 'ORD-123456',
    date: '2024-01-15',
    status: 'delivered',
    total: 7497, // Updated total based on actual product prices
    trackingNumber: 'TRK789456123',
    estimatedDelivery: '2024-01-20',
    deliveredDate: '2024-01-19',
    items: [
      {
        id: '1',
        name: "Men's Embroidered Silk Kurta",
        quantity: 1,
        price: 4999, // Actual discounted price from product data
        originalPrice: 9999, // Actual original price
        rating: 4,
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/l/4/r/s-sdes507-306-manyavar-original-imagkkzygvmvkbxr.jpeg?q=70",
        brand: "Manyavar",
        color: "Blue",
        size: "M",
        category: "kurtas"
      },
      {
        id: '16',
        name: "Embroidered Anarkali Kurta",
        quantity: 2,
        price: 1799, // Actual discounted price from product data
        originalPrice: 3599, // Actual original price
        rating: 0,
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/v/7/c/s-lakhnawi-rose-romj-original-imahfyfk4dyfh4y2.jpeg?q=70",
        brand: "Biba",
        color: "Pink",
        size: "S",
        category: "kurtis"
      }
    ]
  },
  {
    id: 'ORD-123457',
    date: '2024-01-10',
    status: 'shipped',
    total: 1999, // Updated total based on actual product price
    trackingNumber: 'TRK789456124',
    estimatedDelivery: '2024-01-18',
    items: [
      {
        id: '31',
        name: "Slim Fit Jeans",
        quantity: 1,
        price: 1999, // Actual discounted price from product data
        originalPrice: 3999, // Actual original price
        rating: 0,
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/p/a/x/32-kjo-91017-slm-slmft-bk-killer-original-imahdfj74ekqybqb.jpeg?q=70",
        brand: "Levi's",
        color: "Black",
        size: "32",
        category: "jeans"
      }
    ]
  },
  {
    id: 'ORD-123458',
    date: '2024-01-05',
    status: 'confirmed',
    total: 1797, // Updated total based on actual product price
    trackingNumber: null,
    estimatedDelivery: '2024-01-12',
    items: [
      {
        id: '56',
        name: "Cotton Regular T-Shirt",
        quantity: 3,
        price: 599, // Actual discounted price from product data
        originalPrice: 1199, // Actual original price
        rating: 0,
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/e/x/r/xxl-white-t72-emerald-apparel-trading-original-imahed7g6hagmd5g.jpeg?q=70",
        brand: "Puma",
        color: "White",
        size: "L",
        category: "tshirts"
      }
    ]
  },
  {
    id: 'ORD-123459',
    date: '2024-01-20',
    status: 'delivered',
    total: 11297, // Updated total
    trackingNumber: 'TRK789456125',
    estimatedDelivery: '2024-01-25',
    deliveredDate: '2024-01-24',
    items: [
      {
        id: '86',
        name: "Summer Floral Dress",
        quantity: 1,
        price: 1499, // Actual discounted price
        originalPrice: 2999, // Actual original price
        rating: 5,
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/k/y/d/s-ds00bk1111-zummer-original-imahghudmv5ffufe.jpeg?q=70",
        brand: "H&M",
        color: "Multicolor",
        size: "M",
        category: "dresses"
      },
      {
        id: '109',
        name: "Men's Wool Blend Sweater",
        quantity: 1,
        price: 1299, // Actual discounted price
        originalPrice: 2599, // Actual original price
        rating: 4,
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/sweater/g/m/m/m-men-sweater-zipper-navy-woolberry-original-imahezf692fmthp9.jpeg?q=70",
        brand: "H&M",
        color: "Navy Blue",
        size: "L",
        category: "sweaters"
      },
      {
        id: '125',
        name: "Men's Denim Jacket",
        quantity: 1,
        price: 1999, // Actual discounted price
        originalPrice: 3999, // Actual original price
        rating: 0,
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/u/o/d/xl-1-no-jakt-denimharg-dblue-urbano-fashion-original-imahfyt32kvvjfuf.jpeg?q=70",
        brand: "H&M",
        color: "Blue",
        size: "XL",
        category: "jackets"
      }
    ]
  },
  {
    id: 'ORD-123460',
    date: '2024-01-18',
    status: 'shipped',
    total: 4598, // Updated total
    trackingNumber: 'TRK789456126',
    estimatedDelivery: '2024-01-23',
    items: [
      {
        id: '46',
        name: "Skinny Fit Jeans",
        quantity: 2,
        price: 1299, // Actual discounted price
        originalPrice: 2599, // Actual original price
        rating: 0,
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/4/v/i/32-women-single-button-high-rise-skinny-fit-stretchable-jeans-original-imagryduunhhqx4p.jpeg?q=70",
        brand: "H&M",
        color: "Black",
        size: "28",
        category: "jeans"
      },
      {
        id: '66',
        name: "Casual Summer Top",
        quantity: 1,
        price: 799, // Actual discounted price
        originalPrice: 1599, // Actual original price
        rating: 0,
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/l3q7jww0/top/r/y/e/xl-flipkart-top-eva-yellow-dream-beauty-fashion-original-images739yxdwqgt.jpeg?q=70",
        brand: "Zara",
        color: "Yellow",
        size: "M",
        category: "tops"
      }
    ]
  },
  {
    id: 'ORD-123461',
    date: '2024-01-12',
    status: 'delivered',
    total: 8999, // Updated total
    trackingNumber: 'TRK789456127',
    estimatedDelivery: '2024-01-17',
    deliveredDate: '2024-01-16',
    items: [
      {
        id: '149',
        name: "Embroidered Silk Lehenga Choli",
        quantity: 1,
        price: 8999, // Actual discounted price
        originalPrice: 17999, // Actual original price
        rating: 5,
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/8/a/y/xl-45pdm2-ts-tasrika-original-imahbyfwyef3zr3m.jpeg?q=70",
        brand: "Manyavar",
        color: "Red",
        size: "M",
        category: "lahenga-cholis"
      }
    ]
  },
  {
    id: 'ORD-123462',
    date: '2024-01-08',
    status: 'confirmed',
    total: 3196, // Updated total
    trackingNumber: null,
    estimatedDelivery: '2024-01-15',
    items: [
      {
        id: '76',
        name: "Formal Cotton Shirt",
        quantity: 2,
        price: 1299, // Actual discounted price
        originalPrice: 2599, // Actual original price
        rating: 0,
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/n/t/l-wh-pl-le-1-clyver-original-imahewa6h2k5xfyp.jpeg?q=70",
        brand: "Van Heusen",
        color: "White",
        size: "L",
        category: "shirts"
      },
      {
        id: '141',
        name: "Men Slim Fit Chinos",
        quantity: 1,
        price: 1299, // Actual discounted price
        originalPrice: 2599, // Actual original price
        rating: 0,
        imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/a/n/d/32-vstfuslfv42985-van-heusen-sport-original-imahekzwf99xggzy.jpeg?q=70",
        brand: "H&M",
        color: "Navy Blue",
        size: "32",
        category: "pants"
      }
    ]
  }
];

// Utility functions
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
};

export const formatDeliveryDate = (date) => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Helper function to get product by ID (useful for order details)
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

// Helper function to calculate order total
export const calculateOrderTotal = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Make sure to export any other utilities you need
export default {
  mockOrdersData,
  formatCurrency,
  formatDeliveryDate,
  getProductById,
  calculateOrderTotal
};