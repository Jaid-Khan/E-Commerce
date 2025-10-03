export const mockOrdersData = [
  {
    id: 'ORD-123456',
    date: '2024-01-15',
    status: 'delivered',
    total: 145.97,
    trackingNumber: 'TRK789456123',
    estimatedDelivery: '2024-01-20',
    deliveredDate: '2024-01-19',
    items: [
      {
        id: 'PROD-001',
        name: 'Wireless Bluetooth Headphones',
        quantity: 1,
        price: 99.99,
        rating: 4
      },
      {
        id: 'PROD-002',
        name: 'Phone Case',
        quantity: 2,
        price: 22.99,
        rating: 0
      }
    ]
  },
  {
    id: 'ORD-123457',
    date: '2024-01-10',
    status: 'shipped',
    total: 89.50,
    trackingNumber: 'TRK789456124',
    estimatedDelivery: '2024-01-18',
    items: [
      {
        id: 'PROD-003',
        name: 'Smart Watch',
        quantity: 1,
        price: 89.50,
        rating: 0
      }
    ]
  },
  {
    id: 'ORD-123458',
    date: '2024-01-05',
    status: 'confirmed',
    total: 45.75,
    trackingNumber: null,
    estimatedDelivery: '2024-01-12',
    items: [
      {
        id: 'PROD-004',
        name: 'USB-C Cable',
        quantity: 3,
        price: 15.25,
        rating: 0
      }
    ]
  }
];

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
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