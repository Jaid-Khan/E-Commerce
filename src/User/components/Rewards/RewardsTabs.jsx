import React from 'react';

const RewardsTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'rewards', label: 'Available Rewards' },
    { id: 'activities', label: 'Points History' },
    { id: 'levels', label: 'Membership Levels' }
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex -mb-px">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default RewardsTabs;