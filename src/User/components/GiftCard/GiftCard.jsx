import React from 'react';
import { Gift, CreditCard, Download, Share2, Calendar } from 'lucide-react';
import { formatCurrency } from '../../../Data/OrderData';

const GiftCard = ({ card, onShare, onDownload, getStatusColor, getStatusText }) => {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-6 text-white relative overflow-hidden">
      {/* Card Design */}
      <div className="absolute top-4 right-4 opacity-20">
        <Gift className="w-16 h-16" />
      </div>

      <div className="relative z-10">
        {/* Card Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-purple-200 text-sm">Gift Card</span>
            <h3 className="font-semibold text-xl">{card.id}</h3>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(card.status)}`}>
            {getStatusText(card.status)}
          </span>
        </div>

        {/* Card Amount */}
        <div className="mb-6">
          <div className="text-2xl font-bold mb-1">
            {formatCurrency(card.balance)}
          </div>
          <div className="text-purple-200 text-sm">
            Original: {formatCurrency(card.amount)}
          </div>
        </div>

        {/* Card Details */}
        <div className="space-y-2 text-sm text-purple-200">
          <div className="flex items-center space-x-2">
            <CreditCard className="w-4 h-4" />
            <span>PIN: {card.pin}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Expires: {new Date(card.expires).toLocaleDateString()}</span>
          </div>
          <div>
            <span className="font-medium">From: </span>
            <span>{card.from}</span>
          </div>
        </div>

        {/* Message */}
        {card.message && (
          <div className="mt-4 p-3 bg-white bg-opacity-20 rounded-lg">
            <p className="text-sm">{card.message}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-2 mt-6">
          <button
            onClick={() => onShare(card)}
            className="flex-1 flex items-center justify-center space-x-2 bg-white bg-opacity-20 py-2 px-3 rounded-lg hover:bg-opacity-30 transition-all duration-200 text-sm"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          <button
            onClick={() => onDownload(card)}
            className="flex-1 flex items-center justify-center space-x-2 bg-white bg-opacity-20 py-2 px-3 rounded-lg hover:bg-opacity-30 transition-all duration-200 text-sm"
          >
            <Download className="w-4 h-4" />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;