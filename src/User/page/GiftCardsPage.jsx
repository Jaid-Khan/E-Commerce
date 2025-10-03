import React, { useState } from 'react';
import { Gift, Zap, CreditCard, Plus } from 'lucide-react';
import { formatCurrency } from '../../Data/OrderData';
import { myGiftCards, popularAmounts, customAmounts } from '../../Data/GiftCardData';
import GiftCard from '../components/GiftCard/GiftCard';
import GiftCardTabs from '../components/GiftCard/GiftCardTabs';
import BuyGiftCard from '../components/GiftCard/BuyGiftCard';
import RedeemGiftCard from '../components/GiftCard/RedeemGiftCard';

const GiftCardsPage = () => {
  const [activeTab, setActiveTab] = useState('my-cards');
  const [selectedAmount, setSelectedAmount] = useState(50);

  const handleBuyGiftCard = () => {
    console.log('Buy gift card:', selectedAmount);
  };

  const handleShareGiftCard = (giftCard) => {
    if (navigator.share) {
      navigator.share({
        title: 'UrbanEase Gift Card',
        text: `You've received a ${formatCurrency(giftCard.amount)} gift card from ${giftCard.from}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`Gift Card: ${giftCard.id}, PIN: ${giftCard.pin}`);
      alert('Gift card details copied to clipboard!');
    }
  };

  const handleDownloadGiftCard = (giftCard) => {
    console.log('Download gift card:', giftCard.id);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'used':
        return 'bg-gray-100 text-gray-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'used':
        return 'Used';
      case 'expired':
        return 'Expired';
      default:
        return status;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'my-cards':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">My Gift Cards</h3>
              <div className="text-sm text-gray-600">
                Total Balance: <span className="font-semibold text-green-600">
                  {formatCurrency(myGiftCards.reduce((total, card) => total + card.balance, 0))}
                </span>
              </div>
            </div>

            {myGiftCards.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myGiftCards.map((card) => (
                  <GiftCard
                    key={card.id}
                    card={card}
                    onShare={handleShareGiftCard}
                    onDownload={handleDownloadGiftCard}
                    getStatusColor={getStatusColor}
                    getStatusText={getStatusText}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Gift className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No gift cards yet</h3>
                <p className="text-gray-600 mb-6">You haven't received any gift cards yet</p>
                <button
                  onClick={() => setActiveTab('buy')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Buy Your First Gift Card
                </button>
              </div>
            )}
          </div>
        );

      case 'buy':
        return (
          <BuyGiftCard
            selectedAmount={selectedAmount}
            setSelectedAmount={setSelectedAmount}
            onBuyGiftCard={handleBuyGiftCard}
            popularAmounts={popularAmounts}
            customAmounts={customAmounts}
          />
        );

      case 'redeem':
        return <RedeemGiftCard />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Gift Cards</h1>
          <p className="text-gray-600 mt-2">Give the perfect gift every time</p>
        </div>

        {/* Tabs */}
        <div className="bg-white border border-gray-200 rounded-lg mb-6">
          <GiftCardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>

        {/* Gift Card Benefits */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Why Choose UrbanEase Gift Cards?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-1">Instant Delivery</h4>
              <p className="text-sm text-gray-600">Delivered via email in minutes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-1">No Expiration</h4>
              <p className="text-sm text-gray-600">Valid for 1 full year</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-1">Perfect Gift</h4>
              <p className="text-sm text-gray-600">Something for everyone</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Plus className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-1">Easy to Redeem</h4>
              <p className="text-sm text-gray-600">Simple checkout process</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCardsPage;