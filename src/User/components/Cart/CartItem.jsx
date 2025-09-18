// CartItem.jsx
import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <li className="flex py-6">
      {/* Product Image */}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{item.name}</h3>
            <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item.color}</p>
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm">
          {/* Quantity Controls */}
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Qty:</span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-2 py-1 border rounded-l-md border-gray-300 hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-3 py-1 border-t border-b border-gray-300">
              {item.quantity}
            </span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 border rounded-r-md border-gray-300 hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button 
            type="button" 
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={() => removeItem(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;