import React from 'react';
import { Package, Download, Star } from 'lucide-react';
import { formatCurrency, formatDeliveryDate } from '../../../Data/MyOrderData';
import OrderStatus from './MyOrderStatus';
import OrderItem from './MyOrderItem';

const MyOrderCard = ({ 
  order, 
  onViewDetails, 
  onTrackOrder, 
  onReorder, 
  onDownloadInvoice, 
  onWriteReview 
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Order Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
            <p className="text-sm text-gray-500">
              Ordered on {new Date(order.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <OrderStatus status={order.status} />
            <button
              onClick={() => onDownloadInvoice(order.id)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm">Invoice</span>
            </button>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="p-6">
        <div className="space-y-4">
          {order.items.map((item) => (
            <OrderItem 
              key={item.id} 
              item={item} 
              orderStatus={order.status}
              onWriteReview={onWriteReview}
            />
          ))}
        </div>

        {/* Order Summary */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="space-y-2">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Total: </span>
                <span className="text-lg font-semibold text-gray-900 ml-2">
                  {formatCurrency(order.total)}
                </span>
              </div>
              {order.trackingNumber && (
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Tracking: </span>
                  <span className="font-mono">{order.trackingNumber}</span>
                </div>
              )}
              <div className="text-sm text-gray-600">
                <span className="font-medium">Delivery: </span>
                <span>
                  {order.status === 'delivered' 
                    ? `Delivered on ${new Date(order.deliveredDate).toLocaleDateString()}`
                    : `Expected by ${formatDeliveryDate(new Date(order.estimatedDelivery))}`
                  }
                </span>
              </div>
            </div>

            <div className="flex space-x-3 mt-4 md:mt-0">
              <button
                onClick={() => onViewDetails(order.id)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                View Details
              </button>
              {order.status !== 'delivered' && (
                <button
                  onClick={() => onTrackOrder(order.id)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Track Order
                </button>
              )}
              {order.status === 'delivered' && (
                <button
                  onClick={() => onReorder(order.id)}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Reorder
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderCard;