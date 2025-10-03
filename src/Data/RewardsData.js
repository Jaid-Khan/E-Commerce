export const userStats = {
  points: 1250,
  level: 'Gold',
  nextLevel: 'Platinum',
  pointsToNextLevel: 750,
  progress: 62,
  memberSince: '2023-06-15'
};

export const rewards = [
  {
    id: 1,
    title: 'Free Shipping',
    description: 'Get free shipping on your next order',
    points: 200,
    type: 'shipping',
    expires: '2024-02-28',
    claimed: false
  },
  {
    id: 2,
    title: '20% Off Entire Order',
    description: 'Enjoy 20% discount on your entire purchase',
    points: 500,
    type: 'discount',
    expires: '2024-03-15',
    claimed: true
  },
  {
    id: 3,
    title: 'Birthday Surprise',
    description: 'Special birthday gift for you',
    points: 0,
    type: 'gift',
    expires: '2024-12-31',
    claimed: false
  },
  {
    id: 4,
    title: 'Early Access Pass',
    description: 'Get early access to new collections',
    points: 300,
    type: 'access',
    expires: '2024-04-30',
    claimed: false
  }
];

export const activities = [
  {
    id: 1,
    type: 'purchase',
    description: 'Order #ORD-123456',
    points: 250,
    date: '2024-01-15',
    status: 'completed'
  },
  {
    id: 2,
    type: 'review',
    description: 'Product review submitted',
    points: 50,
    date: '2024-01-12',
    status: 'completed'
  },
  {
    id: 3,
    type: 'birthday',
    description: 'Birthday bonus points',
    points: 100,
    date: '2024-01-10',
    status: 'completed'
  },
  {
    id: 4,
    type: 'referral',
    description: 'Friend referral - Rahul K.',
    points: 500,
    date: '2024-01-08',
    status: 'completed'
  }
];

export const levels = [
  { name: 'Silver', points: 0, benefits: ['Basic Rewards', 'Email Support'] },
  { name: 'Gold', points: 1000, benefits: ['Free Shipping', 'Early Access', 'Priority Support'] },
  { name: 'Platinum', points: 2000, benefits: ['VIP Events', 'Personal Shopper', 'Extra Discounts'] },
  { name: 'Diamond', points: 5000, benefits: ['Concierge Service', 'Exclusive Products', 'Luxury Gifts'] }
];

export const earningMethods = [
  {
    id: 1,
    title: 'Make Purchases',
    description: '1 point for every $1 spent',
    icon: 'trendingUp',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Write Reviews',
    description: '50 points per review',
    icon: 'star',
    color: 'green'
  },
  {
    id: 3,
    title: 'Refer Friends',
    description: '500 points per referral',
    icon: 'sparkles',
    color: 'purple'
  },
  {
    id: 4,
    title: 'Birthday Bonus',
    description: '100 points on your birthday',
    icon: 'gift',
    color: 'yellow'
  }
];