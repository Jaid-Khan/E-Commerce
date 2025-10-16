import React from 'react';
import { Package, Star } from 'lucide-react';
import { formatCurrency } from '../../../Data/MyOrderData';
import { useNavigate } from 'react-router-dom';

const OrderItem = ({ item, orderStatus, onWriteReview }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${item.id}`);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
      <div className="flex items-center space-x-4 flex-1">
        {/* Product Image - Make it clickable */}
        <div 
          className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleProductClick}
        >
          {item.imageUrl ? (
            <img 
              src={item.imageUrl} 
              alt={item.name}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <Package className="w-8 h-8 text-gray-400" />
          )}
        </div>
        
        <div className="flex-1">
          {/* Product Name - Make it clickable */}
          <h4 
            className="font-medium text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
            onClick={handleProductClick}
          >
            {item.name}
          </h4>
          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
          <p className="text-lg font-semibold text-gray-900 mt-1">
            {formatCurrency(item.price * item.quantity)}
          </p>
          
          {/* Rating Section for Delivered Items */}
          {orderStatus === 'delivered' && (
            <div className="mt-3">
              {item.rating ? (
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {renderStars(item.rating)}
                  </div>
                  <span className="text-sm text-gray-600">Rated</span>
                </div>
              ) : (
                <button
                  onClick={() => onWriteReview(item.id)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Write a Review
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;