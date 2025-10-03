import React from 'react';
import { Truck } from 'lucide-react';
import { formatCurrency } from '../../../Data/OrderData';

const ShippingPaymentInfo = ({ orderDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Shipping Address */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="font-medium text-gray-900 mb-4 flex items-center">
          <Truck className="w-5 h-5 text-gray-400 mr-2" />
          Shipping Address
        </h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p className="font-medium text-gray-900">{orderDetails.shippingAddress.name}</p>
          <p>{orderDetails.shippingAddress.street}</p>
          <p>
            {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zipCode}
          </p>
          <p>{orderDetails.shippingAddress.country}</p>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="font-medium text-gray-900 mb-4">Payment Method</h3>
        <div className="text-sm text-gray-600">
          <p className="font-medium text-gray-900">{orderDetails.paymentMethod.type}</p>
          <p>Ending in {orderDetails.paymentMethod.lastFour}</p>
          <p className="text-green-600 font-medium mt-2">Paid {formatCurrency(orderDetails.total)}</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPaymentInfo;