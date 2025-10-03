import React from 'react';
import { formatCurrency } from '../../../Data/OrderData';

const OrderTotal = ({ orderDetails, onTrackOrder, onContinueShopping }) => {
  return (
    <div className="space-y-6">
      {/* Order Total */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="font-medium text-gray-900 mb-4">Order Total</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900">{formatCurrency(orderDetails.subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="text-green-600">
              {orderDetails.shipping === 0 ? 'Free' : formatCurrency(orderDetails.shipping)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tax</span>
            <span className="text-gray-900">{formatCurrency(orderDetails.tax)}</span>
          </div>
          <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
            <span className="text-gray-900">Total</span>
            <span className="text-gray-900">{formatCurrency(orderDetails.total)}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="space-y-3">
          <button
            onClick={onTrackOrder}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Track Your Order
          </button>
          <button
            onClick={onContinueShopping}
            className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Continue Shopping
          </button>
        </div>
      </div>

      {/* Support Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">Need help with your order?</h4>
        <p className="text-sm text-blue-700 mb-3">
          Our customer support team is here to help with any questions.
        </p>
        <div className="space-y-1 text-sm text-blue-600">
          <p>📧 support@example.com</p>
          <p>📞 1-800-ORDER-NOW</p>
        </div>
      </div>
    </div>
  );
};

export default OrderTotal;