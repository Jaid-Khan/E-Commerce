import React, { useState } from 'react';
import { 
  userStats, 
  rewards, 
  activities, 
  levels, 
  earningMethods 
} from '../../Data/RewardsData';
import RewardsStats from '../components/Rewards/RewardsStats';
import RewardsTabs from '../components/Rewards/RewardsTabs';
import RewardsList from '../components/Rewards/RewardsList';
import ActivityList from '../components/Rewards/ActivityList';
import LevelsList from '../components/Rewards/LevelsList';
import EarningMethods from '../components/Rewards/EarningMethods';

const MyRewardsPage = () => {
  const [activeTab, setActiveTab] = useState('rewards');

  const handleClaimReward = (rewardId) => {
    console.log('Claim reward:', rewardId);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'rewards':
        return (
          <RewardsList
            rewards={rewards}
            userPoints={userStats.points}
            onClaimReward={handleClaimReward}
          />
        );
      case 'activities':
        return <ActivityList activities={activities} />;
      case 'levels':
        return (
          <LevelsList
            levels={levels}
            currentLevel={userStats.level}
            userPoints={userStats.points}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Rewards</h1>
          <p className="text-gray-600 mt-2">Earn points and unlock exclusive benefits</p>
        </div>

        {/* Stats Overview */}
        <RewardsStats userStats={userStats} />

        {/* Tabs */}
        <div className="bg-white border border-gray-200 rounded-lg mb-6">
          <RewardsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>

        {/* How to Earn Points */}
        <EarningMethods earningMethods={earningMethods} />
      </div>
    </div>
  );
};

export default MyRewardsPage;