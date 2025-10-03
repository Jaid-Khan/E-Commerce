import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Truck, CheckCircle, Clock, Search, Filter } from 'lucide-react';
import { formatCurrency } from '../../../Data/OrderData';

const OrderHistory = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock orders data - in real app, this would come from your OrderContext or API
  const orders = [
    {
      id: 'ORD-123456789',
      date: '2024-01-15',
      status: 'delivered',
      items: [
        { id: 1, name: 'Wireless Bluetooth Headphones', quantity: 1, price: 79.99 },
        { id: 2, name: 'Phone Case', quantity: 2, price: 15.99 }
      ],
      total: 111.97,
      trackingNumber: 'TRK123456789',
      estimatedDelivery: '2024-01-18'
    },
    {
      id: 'ORD-987654321',
      date: '2024-01-10',
      status: 'shipped',
      items: [
        { id: 3, name: 'Smart Watch', quantity: 1, price: 199.99 }
      ],
      total: 199.99,
      trackingNumber: 'TRK987654321',
      estimatedDelivery: '2024-01-14'
    },
    {
      id: 'ORD-456789123',
      date: '2024-01-05',
      status: 'confirmed',
      items: [
        { id: 4, name: 'Laptop Bag', quantity: 1, price: 49.99 },
        { id: 5, name: 'USB-C Cable', quantity: 3, price: 12.99 }
      ],
      total: 88.96,
      trackingNumber: 'TRK456789123',
      estimatedDelivery: '2024-01-09'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-orange-600" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      default:
        return <Package className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-orange-100 text-orange-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmed';
      case 'shipped':
        return 'Shipped';
      case 'delivered':
        return 'Delivered';
      default:
        return status;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleViewDetails = (orderId) => {
    navigate('/order-confirmation', { state: { orderId } });
  };

  const handleTrackOrder = (orderId) => {
    navigate('/track-order', { state: { orderId } });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Order History</h2>
        <p className="text-gray-600 mt-2">View and manage your recent orders</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search orders or products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
            >
              <option value="all">All Statuses</option>
              <option value="confirmed">Confirmed</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
            {/* Order Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
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
              <div className="flex items-center space-x-2 mt-2 md:mt-0">
                {getStatusIcon(order.status)}
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                  {getStatusText(order.status)}
                </span>
              </div>
            </div>

            {/* Order Items */}
            <div className="border-t border-b border-gray-200 py-4 mb-4">
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-medium text-gray-900">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Footer */}
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="space-y-2 md:space-y-0 md:space-x-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="font-medium">Total:</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {formatCurrency(order.total)}
                  </span>
                </div>
                {order.trackingNumber && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="font-medium">Tracking:</span>
                    <span className="font-mono">{order.trackingNumber}</span>
                  </div>
                )}
              </div>

              <div className="flex space-x-3 mt-4 md:mt-0">
                <button
                  onClick={() => handleViewDetails(order.id)}
                  className="text-blue-600 hover:text-blue-800 font-medium px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  View Details
                </button>
                {order.status !== 'delivered' && (
                  <button
                    onClick={() => handleTrackOrder(order.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Track Order
                  </button>
                )}
                {order.status === 'delivered' && (
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    Buy Again
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || statusFilter !== 'all' 
              ? 'Try adjusting your search or filters'
              : 'Start shopping to see your orders here'
            }
          </p>
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Start Shopping
          </button>
        </div>
      )}

      {/* Order Statistics */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">{orders.length}</div>
          <div className="text-sm text-blue-700">Total Orders</div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {orders.filter(o => o.status === 'delivered').length}
          </div>
          <div className="text-sm text-green-700">Delivered</div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-600 mb-1">
            {orders.filter(o => o.status === 'shipped').length}
          </div>
          <div className="text-sm text-orange-700">In Transit</div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;