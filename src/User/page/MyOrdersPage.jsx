import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package } from 'lucide-react';
import { mockOrdersData } from '../../Data/MyOrderData';
import OrderFilters from '../components/MyOrders/MyOrderFilters';
import OrderCard from '../components/MyOrders/MyOrderCard';
import OrderStatistics from '../components/MyOrders/MyOrderStatistics';
import EmptyOrders from '../components/MyOrders/MyEmptyOrders';

const MyOrdersPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('all');

  const orders = mockOrdersData;

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    // Time filter logic
    const orderDate = new Date(order.date);
    const now = new Date();
    const daysDiff = Math.floor((now - orderDate) / (1000 * 60 * 60 * 24));
    
    let matchesTime = true;
    if (timeFilter === 'last30') {
      matchesTime = daysDiff <= 30;
    } else if (timeFilter === 'last6months') {
      matchesTime = daysDiff <= 180;
    } else if (timeFilter === '2024') {
      matchesTime = orderDate.getFullYear() === 2024;
    } else if (timeFilter === '2023') {
      matchesTime = orderDate.getFullYear() === 2023;
    }
    
    return matchesSearch && matchesStatus && matchesTime;
  });

  const handleViewDetails = (orderId) => {
    navigate('/order-confirmation', { state: { orderId } });
  };

  const handleTrackOrder = (orderId) => {
    navigate('/track-order', { state: { orderId } });
  };

  const handleWriteReview = (productId) => {
    navigate(`/product/${productId}/review`);
  };

  const handleReorder = (orderId) => {
    console.log('Reorder:', orderId);
  };

  const handleDownloadInvoice = (orderId) => {
    console.log('Download invoice for:', orderId);
  };

  const handleStartShopping = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
          <p className="text-gray-600 mt-2">Track and manage your orders</p>
        </div>

        {/* Filters */}
        <OrderFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          timeFilter={timeFilter}
          setTimeFilter={setTimeFilter}
        />

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onViewDetails={handleViewDetails}
              onTrackOrder={handleTrackOrder}
              onReorder={handleReorder}
              onDownloadInvoice={handleDownloadInvoice}
              onWriteReview={handleWriteReview}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <EmptyOrders
            searchTerm={searchTerm}
            statusFilter={statusFilter}
            timeFilter={timeFilter}
            onStartShopping={handleStartShopping}
          />
        )}

        {/* Order Statistics */}
        <OrderStatistics orders={orders} />
      </div>
    </div>
  );
};

export default MyOrdersPage;