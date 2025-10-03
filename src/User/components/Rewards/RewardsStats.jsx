import React from 'react';
import { Star, Crown, CheckCircle } from 'lucide-react';

const RewardsStats = ({ userStats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Points Card */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Your Points</h3>
          <Star className="w-6 h-6" />
        </div>
        <div className="text-3xl font-bold mb-2">{userStats.points}</div>
        <p className="text-blue-100">Available points</p>
      </div>

      {/* Level Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Current Level</h3>
          <Crown className="w-6 h-6 text-yellow-500" />
        </div>
        <div className="text-2xl font-bold text-gray-900 mb-2">{userStats.level}</div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div
            className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${userStats.progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          {userStats.pointsToNextLevel} points to {userStats.nextLevel}
        </p>
      </div>

      {/* Member Since */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Member Since</h3>
          <CheckCircle className="w-6 h-6 text-green-500" />
        </div>
        <div className="text-2xl font-bold text-gray-900 mb-2">
          {new Date(userStats.memberSince).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </div>
        <p className="text-sm text-gray-600">Loyal customer for 7 months</p>
      </div>
    </div>
  );
};

export default RewardsStats;