export const shippingMethods = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    description: '4-10 business days',
    price: 49,
    delivery: 'Free delivery on orders above ₹999',
  },
  {
    id: 'express',
    name: 'Express Shipping',
    description: '2-5 business days',
    price: 99,
    delivery: 'Guaranteed delivery within 5 days',
  },
  {
    id: 'next-day',
    name: 'Next Day Delivery',
    description: 'Next business day',
    price: 199,
    delivery: 'Order before 2PM for next day delivery',
  },
];

export const paymentMethods = [
  {
    id: 'credit-card',
    name: 'Credit Card',
    description: 'Pay with Visa, Mastercard, or American Express',
    icon: 'CreditCard',
  },
  {
    id: 'debit-card',
    name: 'Debit Card',
    description: 'Pay with your debit card',
    icon: 'CreditCard',
  },
  {
    id: 'upi',
    name: 'UPI',
    description: 'Pay using UPI apps like Google Pay, PhonePe',
    icon: 'Payment',
  },
  {
    id: 'net-banking',
    name: 'Net Banking',
    description: 'Pay directly from your bank account',
    icon: 'AccountBalance',
  },
];

export const initialCartItems = [
  {
    id: 'basic-tee-6-pack',
    name: 'Basic Tee 6-Pack',
    price: 199,
    color: 'White',
    size: 'S',
    quantity: 1,
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
  },
  {
    id: 'premium-cotton-tee',
    name: 'Premium Cotton Tee',
    price: 129,
    color: 'Black',
    size: 'M',
    quantity: 2,
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-01.jpg',
  },
];

export const initialShippingInfo = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  pinCode: '',
  phone: '+91 '
};

export const initialCardDetails = {
  number: '',
  name: '',
  expiry: '',
  cvv: '',
};