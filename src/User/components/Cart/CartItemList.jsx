// CartItemsList.jsx
import React from 'react';
import CartItem from './CartItem';

const CartItemsList = ({ cartItems, updateQuantity, removeItem }) => {
  return (
    <div className="px-4 py-5 sm:px-6">
      <div className="flow-root">
        <ul className="-my-6 divide-y divide-gray-200">
          {cartItems.map((item) => (
            <CartItem 
              key={item.id} 
              item={item} 
              updateQuantity={updateQuantity} 
              removeItem={removeItem} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartItemsList;