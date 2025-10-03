import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const OrderHeader = ({ orderDetails, onBackToHome }) => {
  return (
    <div className="text-center mb-8">
      <button
        onClick={onBackToHome}
        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to home
      </button>
      
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Order Confirmed!
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Thank you for your purchase. Your order has been successfully processed and will be shipped soon.
      </p>
    </div>
  );
};

export default OrderHeader;