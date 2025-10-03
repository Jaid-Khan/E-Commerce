import React from 'react';
import { TrendingUp, Zap, Gift, Sparkles, Star, Clock } from 'lucide-react';

const RewardCard = ({ reward, userPoints, onClaimReward }) => {
  const getRewardIcon = (type) => {
    switch (type) {
      case 'shipping':
        return <TrendingUp className="w-6 h-6" />;
      case 'discount':
        return <Zap className="w-6 h-6" />;
      case 'gift':
        return <Gift className="w-6 h-6" />;
      case 'access':
        return <Sparkles className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  const getRewardColor = (type) => {
    switch (type) {
      case 'shipping':
        return 'bg-blue-100 text-blue-600';
      case 'discount':
        return 'bg-green-100 text-green-600';
      case 'gift':
        return 'bg-purple-100 text-purple-600';
      case 'access':
        return 'bg-yellow-100 text-yellow-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div
      className={`border rounded-lg p-6 ${
        reward.claimed
          ? 'bg-gray-50 border-gray-200'
          : 'bg-white border-gray-200 hover:shadow-md transition-shadow duration-200'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-full ${getRewardColor(reward.type)}`}>
          {getRewardIcon(reward.type)}
        </div>
        {reward.claimed && (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
            Claimed
          </span>
        )}
      </div>

      <h3 className="font-semibold text-gray-900 text-lg mb-2">
        {reward.title}
      </h3>
      <p className="text-gray-600 mb-4">{reward.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {reward.points > 0 ? (
            <span className="flex items-center space-x-1 text-orange-600 font-semibold">
              <Star className="w-4 h-4 fill-current" />
              <span>{reward.points} points</span>
            </span>
          ) : (
            <span className="text-green-600 font-semibold">FREE</span>
          )}
          <span className="flex items-center space-x-1 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>Expires {new Date(reward.expires).toLocaleDateString()}</span>
          </span>
        </div>

        {!reward.claimed && (
          <button
            onClick={() => onClaimReward(reward.id)}
            disabled={userPoints < reward.points}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Claim Reward
          </button>
        )}
      </div>
    </div>
  );
};

export default RewardCard;