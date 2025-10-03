import React from 'react';
import { Calendar, Package } from 'lucide-react';
import { formatCurrency, formatDeliveryDate } from '../../../Data/OrderData';

const OrderSummary = ({ orderDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
        <div className="text-right">
          <p className="text-sm text-gray-500">Order ID</p>
          <p className="font-mono font-medium text-gray-900">{orderDetails.orderId}</p>
        </div>
      </div>

      {/* Delivery Estimate */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start space-x-3">
          <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900">Estimated Delivery</h3>
            <p className="text-lg font-semibold text-blue-800">
              {formatDeliveryDate(orderDetails.estimatedDelivery)}
            </p>
            <p className="text-sm text-blue-600 mt-1">
              You will receive tracking information via email once your order ships.
            </p>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Items in your order</h3>
        {orderDetails.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 py-3 border-b border-gray-100 last:border-0">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-gray-400" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">{formatCurrency(item.price)}</p>
              <p className="text-sm text-gray-500">
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;