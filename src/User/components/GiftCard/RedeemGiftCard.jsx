import React from 'react';
import { Gift, CreditCard, Zap, Calendar } from 'lucide-react';

const RedeemGiftCard = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-lg p-8 text-center">
        <Gift className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Redeem Gift Card</h3>
        <p className="text-gray-600 mb-6">
          Enter your gift card code below to add the balance to your account
        </p>

        <div className="max-w-md mx-auto">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                Gift Card Code
              </label>
              <input
                type="text"
                placeholder="Enter 16-digit code"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center font-mono tracking-widest"
                maxLength={19}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                PIN Number
              </label>
              <input
                type="text"
                placeholder="Enter 4-digit PIN"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center font-mono tracking-widest"
                maxLength={4}
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Redeem Gift Card
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900 mb-1">Easy to Use</h4>
            <p className="text-sm text-gray-600">Apply at checkout</p>
          </div>
          <div className="text-center">
            <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900 mb-1">Instant Balance</h4>
            <p className="text-sm text-gray-600">Added immediately</p>
          </div>
          <div className="text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900 mb-1">1 Year Validity</h4>
            <p className="text-sm text-gray-600">Plenty of time to use</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedeemGiftCard;