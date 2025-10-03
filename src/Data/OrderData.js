// Mock data for clothing orders
export const mockOrdersData = [
  {
    id: 'ORD-123456789',
    date: '2024-01-15',
    status: 'delivered',
    items: [
      { 
        id: 1, 
        name: 'Men Solid Pure Cotton Straight Kurta (White)', 
        quantity: 1, 
        price: 799,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/a/s/o/l-krt-btn06-apektra-original-imahdmq3fsfc6efu.jpeg?q=70',
        rating: 5,
        size: 'L',
        color: 'White'
      },
      { 
        id: 2, 
        name: 'Men Chikan Embroidery Cotton Rayon Straight Kurta (Pink)', 
        quantity: 2, 
        price: 1599,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/v/7/c/s-lakhnawi-rose-romj-original-imahfyfk4dyfh4y2.jpeg?q=70',
        rating: 4,
        size: 'M',
        color: 'Pink'
      }
    ],
    subtotal: 3997,
    shipping: 0,
    tax: 319.76,
    total: 4316.76,
    trackingNumber: 'TRK123456789',
    estimatedDelivery: '2024-01-18',
    deliveredDate: '2024-01-17',
    shippingAddress: {
      name: 'Rahul Sharma',
      street: '123 Main Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      country: 'India'
    },
    paymentMethod: {
      type: 'Credit Card',
      lastFour: '4242'
    }
  },
  {
    id: 'ORD-987654321',
    date: '2024-01-10',
    status: 'shipped',
    items: [
      { 
        id: 3, 
        name: 'Women Floral Print Georgette Saree (Blue)', 
        quantity: 1, 
        price: 2499,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/6/f/g/free-sequin-embellished-saree-with-blouse-sequin-embellished-original-imahfyy8bh8hzr2f.jpeg?q=70',
        rating: null,
        size: 'Free Size',
        color: 'Blue'
      },
      { 
        id: 4, 
        name: 'Women Embroidered Kurta Set (Green)', 
        quantity: 1, 
        price: 1899,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/p/j/m/m-aw22dts-ghs-2201-1-samoh-original-imahfyy8g4syygzh.jpeg?q=70',
        rating: null,
        size: 'M',
        color: 'Green'
      }
    ],
    subtotal: 4398,
    shipping: 99,
    tax: 359.76,
    total: 4856.76,
    trackingNumber: 'TRK987654321',
    estimatedDelivery: '2024-01-14',
    shippingAddress: {
      name: 'Priya Patel',
      street: '456 Park Avenue',
      city: 'Delhi',
      state: 'Delhi',
      zipCode: '110001',
      country: 'India'
    },
    paymentMethod: {
      type: 'UPI',
      lastFour: '7890'
    }
  },
  {
    id: 'ORD-456789123',
    date: '2024-01-05',
    status: 'confirmed',
    items: [
      { 
        id: 5, 
        name: 'Men Slim Fit Denim Jeans (Dark Blue)', 
        quantity: 1, 
        price: 1999,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/u/n/3/30-mj-bk-02-urbano-fashion-original-imahd4gbsh6r2hqk.jpeg?q=70',
        rating: null,
        size: '32',
        color: 'Dark Blue'
      },
      { 
        id: 6, 
        name: 'Men Casual Checkered Shirt (Red)', 
        quantity: 2, 
        price: 899,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/v/7/k/xl-cb-02-vebnor-original-imahf2n8w9snzuba.jpeg?q=70',
        rating: null,
        size: 'XL',
        color: 'Red'
      },
      { 
        id: 7, 
        name: 'Men Sports T-Shirt (Black)', 
        quantity: 3, 
        price: 499,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/9/k/m-901-black-one-nb-nicky-boy-original-imahd3qzjczjdy5h.jpeg?q=70',
        rating: null,
        size: 'M',
        color: 'Black'
      }
    ],
    subtotal: 6594,
    shipping: 99,
    tax: 535.44,
    total: 7228.44,
    trackingNumber: 'TRK456789123',
    estimatedDelivery: '2024-01-09',
    shippingAddress: {
      name: 'Amit Kumar',
      street: '789 Gandhi Road',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560001',
      country: 'India'
    },
    paymentMethod: {
      type: 'Debit Card',
      lastFour: '5678'
    }
  },
  {
    id: 'ORD-789123456',
    date: '2024-01-20',
    status: 'delivered',
    items: [
      { 
        id: 8, 
        name: 'Women Party Wear Dress (Black)', 
        quantity: 1, 
        price: 3499,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/l/2/k/s-22eud1c79696-supernova-original-imahfyy9hqfbhegz.jpeg?q=70',
        rating: 5,
        size: 'S',
        color: 'Black'
      },
      { 
        id: 9, 
        name: 'Women Handbag (Brown)', 
        quantity: 1, 
        price: 1299,
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/5/k/h/na-premium-synthetic-leather-laptop-bag-15-6-inch-backpack-original-imahfyy9haxzehgy.jpeg?q=70',
        rating: 4,
        size: 'One Size',
        color: 'Brown'
      }
    ],
    subtotal: 4798,
    shipping: 0,
    tax: 383.84,
    total: 5181.84,
    trackingNumber: 'TRK789123456',
    estimatedDelivery: '2024-01-23',
    deliveredDate: '2024-01-22',
    shippingAddress: {
      name: 'Neha Singh',
      street: '321 MG Road',
      city: 'Chennai',
      state: 'Tamil Nadu',
      zipCode: '600001',
      country: 'India'
    },
    paymentMethod: {
      type: 'Credit Card',
      lastFour: '1234'
    }
  }
];

// Single order mock data (for order confirmation page)
export const mockOrderData = {
  orderId: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
  orderDate: new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  items: [
    { 
      id: 1, 
      name: 'Men Solid Pure Cotton Straight Kurta (White)', 
      quantity: 1, 
      price: 799,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/a/s/o/l-krt-btn06-apektra-original-imahdmq3fsfc6efu.jpeg?q=70',
      size: 'L',
      color: 'White'
    },
    { 
      id: 2, 
      name: 'Men Chikan Embroidery Cotton Rayon Straight Kurta (Pink)', 
      quantity: 2, 
      price: 1599,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/v/7/c/s-lakhnawi-rose-romj-original-imahfyfk4dyfh4y2.jpeg?q=70',
      size: 'M',
      color: 'Pink'
    },
    { 
      id: 3, 
      name: 'Men Solid Cotton Blend Straight Kurta (Maroon)', 
      quantity: 1, 
      price: 1999,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/k/w/w/l-hdmn97-maroon-hoodler-original-imahdduzhawkxfv4.jpeg?q=70',
      size: 'L',
      color: 'Maroon'
    }
  ],
  subtotal: 5996,
  shipping: 0, // Free shipping
  tax: 479.68,
  total: 6475.68,
  shippingAddress: {
    name: 'John Doe',
    street: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States'
  },
  paymentMethod: {
    type: 'Credit Card',
    lastFour: '4242'
  },
  estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now
};

// Utility functions
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
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

// Helper function to get order by ID
export const getOrderById = (orderId) => {
  return mockOrdersData.find(order => order.id === orderId) || mockOrderData;
};

// Clothing specific utility functions
export const getClothingCategories = () => {
  const categories = new Set();
  mockOrdersData.forEach(order => {
    order.items.forEach(item => {
      if (item.name.toLowerCase().includes('kurta')) categories.add('Kurtas');
      if (item.name.toLowerCase().includes('saree')) categories.add('Sarees');
      if (item.name.toLowerCase().includes('jean')) categories.add('Jeans');
      if (item.name.toLowerCase().includes('shirt')) categories.add('Shirts');
      if (item.name.toLowerCase().includes('dress')) categories.add('Dresses');
      if (item.name.toLowerCase().includes('t-shirt')) categories.add('T-Shirts');
    });
  });
  return Array.from(categories);
};

export const getAvailableSizes = () => {
  const sizes = new Set();
  mockOrdersData.forEach(order => {
    order.items.forEach(item => {
      if (item.size) sizes.add(item.size);
    });
  });
  return Array.from(sizes);
};

export const getAvailableColors = () => {
  const colors = new Set();
  mockOrdersData.forEach(order => {
    order.items.forEach(item => {
      if (item.color) colors.add(item.color);
    });
  });
  return Array.from(colors);
};