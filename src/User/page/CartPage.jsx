// CartPage.jsx
import React, { useState, useEffect } from 'react';
import { initialCartItems } from '../../Data/CartData';
import CartItemsList from '../components/Cart/CartItemList';
import OrderSummary from '../components/Cart/OrderSummary';
// import {Outlet} from react-router-dom

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to dispatch cart update event
  const dispatchCartUpdate = () => {
    window.dispatchEvent(new Event('cartUpdated'));
  };

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || initialCartItems;
    setCartItems(savedCartItems);
  }, []);

  // Listen for cart updates from other components
  useEffect(() => {
    const handleCartUpdate = () => {
      const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || initialCartItems;
      setCartItems(savedCartItems);
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Remove item from cart - FIXED: Properly filter by ID
  const removeItem = (id) => {
    console.log('Removing item with ID:', id);
    console.log('Current cart items:', cartItems);
    
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    console.log('Updated cart items:', updatedCartItems);
    
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    dispatchCartUpdate();
  };

  // Update item quantity - FIXED: Properly find by ID
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      // If quantity becomes 0, remove the item
      removeItem(id);
      return;
    }
    
    const updatedCartItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    dispatchCartUpdate();
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
    dispatchCartUpdate();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in cart</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cartItems.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some items to your cart to get started.</p>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* Clear Cart Button */}
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Total: {cartItems.reduce((total, item) => total + item.quantity, 0)} items
              </span>
              <button
                onClick={clearCart}
                className="text-sm text-red-600 hover:text-red-800 font-medium"
              >
                Clear Cart
              </button>
            </div>
            
            <CartItemsList 
              cartItems={cartItems} 
              updateQuantity={updateQuantity} 
              removeItem={removeItem} 
            />
            
            <OrderSummary subtotal={subtotal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;