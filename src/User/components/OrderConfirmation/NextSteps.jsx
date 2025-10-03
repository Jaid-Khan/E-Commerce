import React from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';
import { formatDeliveryDate } from '../../../Data/OrderData';

const NextSteps = ({ orderDetails }) => {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="font-medium text-gray-900 mb-4">What happens next?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Package className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="font-medium text-gray-900 mb-2">Order Processing</h4>
          <p className="text-sm text-gray-600">
            We're preparing your items for shipment. This usually takes 1-2 business days.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Truck className="w-6 h-6 text-green-600" />
          </div>
          <h4 className="font-medium text-gray-900 mb-2">Shipping</h4>
          <p className="text-sm text-gray-600">
            Your order will be shipped via standard delivery. You'll get tracking info via email.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-6 h-6 text-purple-600" />
          </div>
          <h4 className="font-medium text-gray-900 mb-2">Delivery</h4>
          <p className="text-sm text-gray-600">
            Your order will arrive by {formatDeliveryDate(orderDetails.estimatedDelivery)}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextSteps;