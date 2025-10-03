import React from 'react';
import { Gift, Zap, Calendar, CreditCard } from 'lucide-react';
import { formatCurrency } from '../../../Data/OrderData';

const BuyGiftCard = ({ 
  selectedAmount, 
  setSelectedAmount, 
  onBuyGiftCard, 
  popularAmounts, 
  customAmounts 
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Amount Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Select Amount</h3>

          {/* Popular Amounts */}
          <div className="mb-8">
            <h4 className="font-medium text-gray-900 mb-4">Popular Amounts</h4>
            <div className="grid grid-cols-3 gap-3">
              {popularAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`p-4 border-2 rounded-lg text-center transition-all duration-200 ${
                    selectedAmount === amount
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="font-semibold">{formatCurrency(amount)}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-4">Custom Amount</h4>
            <div className="grid grid-cols-4 gap-2">
              {customAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`p-3 border rounded-lg text-center transition-all duration-200 ${
                    selectedAmount === amount
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="text-sm font-medium">{formatCurrency(amount)}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Enter Custom Amount */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Or enter custom amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="5"
                max="1000"
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Gift Card Amount</span>
              <span className="font-semibold text-gray-900">{formatCurrency(selectedAmount)}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Processing Fee</span>
              <span className="font-semibold text-green-600">FREE</span>
            </div>
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-gray-900">{formatCurrency(selectedAmount)}</span>
              </div>
            </div>

            <button
              onClick={onBuyGiftCard}
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Gift className="w-5 h-5" />
              <span>Buy Gift Card - {formatCurrency(selectedAmount)}</span>
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Gift card will be delivered instantly via email
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Zap className="w-4 h-4 text-green-500" />
              <span>Instant delivery via email</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Calendar className="w-4 h-4 text-green-500" />
              <span>Valid for 1 year</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <CreditCard className="w-4 h-4 text-green-500" />
              <span>Use anywhere on UrbanEase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyGiftCard;