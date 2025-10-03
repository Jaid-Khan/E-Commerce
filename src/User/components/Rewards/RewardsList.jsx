import React from 'react';
import RewardCard from './RewardCard';

const RewardsList = ({ rewards, userPoints, onClaimReward }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {rewards.map((reward) => (
        <RewardCard
          key={reward.id}
          reward={reward}
          userPoints={userPoints}
          onClaimReward={onClaimReward}
        />
      ))}
    </div>
  );
};

export default RewardsList;