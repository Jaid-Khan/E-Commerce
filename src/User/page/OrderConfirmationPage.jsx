import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockOrderData } from '../../Data/OrderData';
import OrderHeader from '../components/OrderConfirmation/OrderHeader';
import OrderSummary from '../components/OrderConfirmation/OrderSummary';
import ShippingPaymentInfo from '../components/OrderConfirmation/ShippingPaymentInfo';
import OrderTotal from '../components/OrderConfirmation/OrderTotal';
import NextSteps from '../components/OrderConfirmation/NextSteps';
import LoadingSpinner from '../components/OrderConfirmation/LoadingSpinner';

const OrderConfirmationPage = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setOrderDetails(mockOrderData);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleTrackOrder = () => {
    navigate('/track-order', { state: { orderId: orderDetails?.orderId } });
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <OrderHeader 
          orderDetails={orderDetails} 
          onBackToHome={handleBackToHome} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <OrderSummary orderDetails={orderDetails} />
            <ShippingPaymentInfo orderDetails={orderDetails} />
          </div>

          {/* Sidebar */}
          <OrderTotal 
            orderDetails={orderDetails}
            onTrackOrder={handleTrackOrder}
            onContinueShopping={handleContinueShopping}
          />
        </div>

        <NextSteps orderDetails={orderDetails} />
      </div>
    </div>
  );
};

export default OrderConfirmationPage;