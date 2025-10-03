import React from 'react';
import { Package } from 'lucide-react';

const MyEmptyOrders = ({ searchTerm, statusFilter, timeFilter, onStartShopping }) => {
  return (
    <div className="text-center py-12 bg-white border border-gray-200 rounded-lg">
      <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders found</h3>
      <p className="text-gray-600 mb-6">
        {searchTerm || statusFilter !== 'all' || timeFilter !== 'all'
          ? 'Try adjusting your search or filters'
          : 'Start shopping to see your orders here'
        }
      </p>
      <button
        onClick={onStartShopping}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Start Shopping
      </button>
    </div>
  );
};

export default MyEmptyOrders;