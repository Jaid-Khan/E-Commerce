// CartPage.jsx
import React, { useState } from 'react';
import { initialCartItems } from '../../Data/CartData';
import CartItemsList from '../components/Cart/CartItemList';
import OrderSummary from '../components/Cart/OrderSummary';

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <CartItemsList 
            cartItems={cartItems} 
            updateQuantity={updateQuantity} 
            removeItem={removeItem} 
          />
          
          <OrderSummary subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;