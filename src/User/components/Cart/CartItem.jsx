// CartItem.jsx
import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  const handleRemove = () => {
    console.log('Remove button clicked for item:', item.id, item.name);
    removeItem(item.id);
  };

  const handleDecrease = () => {
    console.log('Decrease quantity for item:', item.id);
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleIncrease = () => {
    console.log('Increase quantity for item:', item.id);
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <li className="flex py-6 border-b border-gray-200 last:border-b-0">
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
            <h3 className="text-lg">{item.name}</h3>
            <p className="ml-4 text-lg">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Color: {item.color}</p>
          <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
          <p className="mt-1 text-sm text-gray-500">Price: ${item.price} each</p>
          <p className="mt-1 text-sm text-gray-500">ID: {item.id}</p> {/* Debug: Show item ID */}
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm">
          {/* Quantity Controls */}
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Qty:</span>
            <button 
              onClick={handleDecrease}
              className="px-3 py-1 border rounded-l-md border-gray-300 hover:bg-gray-100 transition-colors duration-200"
            >
              -
            </button>
            <span className="px-4 py-1 border-t border-b border-gray-300 bg-gray-50 min-w-[40px] text-center">
              {item.quantity}
            </span>
            <button 
              onClick={handleIncrease}
              className="px-3 py-1 border rounded-r-md border-gray-300 hover:bg-gray-100 transition-colors duration-200"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button 
            type="button" 
            className="font-medium text-red-600 hover:text-red-800 transition-colors duration-200 px-3 py-1 border border-red-200 rounded-md hover:bg-red-50"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;