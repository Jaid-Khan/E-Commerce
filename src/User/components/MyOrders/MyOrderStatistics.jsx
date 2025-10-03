import React from 'react';

const MyOrderStatistics = ({ orders }) => {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
        <div className="text-2xl font-bold text-blue-600 mb-1">{orders.length}</div>
        <div className="text-sm text-gray-600">Total Orders</div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
        <div className="text-2xl font-bold text-green-600 mb-1">
          {orders.filter(o => o.status === 'delivered').length}
        </div>
        <div className="text-sm text-gray-600">Delivered</div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
        <div className="text-2xl font-bold text-orange-600 mb-1">
          {orders.filter(o => o.status === 'shipped').length}
        </div>
        <div className="text-sm text-gray-600">In Transit</div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
        <div className="text-2xl font-bold text-blue-600 mb-1">
          {orders.filter(o => o.status === 'confirmed').length}
        </div>
        <div className="text-sm text-gray-600">Processing</div>
      </div>
    </div>
  );
};

export default MyOrderStatistics;