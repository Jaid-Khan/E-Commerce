import React from 'react';
import { TrendingUp, Star, Sparkles, Gift } from 'lucide-react';

const EarningMethods = ({ earningMethods }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'trendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'star':
        return <Star className="w-6 h-6" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'gift':
        return <Gift className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  const getColorClass = (color) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-600';
      case 'green':
        return 'bg-green-100 text-green-600';
      case 'purple':
        return 'bg-purple-100 text-purple-600';
      case 'yellow':
        return 'bg-yellow-100 text-yellow-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Earn Points</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {earningMethods.map((method) => (
          <div key={method.id} className="text-center">
            <div className={`w-12 h-12 ${getColorClass(method.color)} rounded-full flex items-center justify-center mx-auto mb-3`}>
              {getIcon(method.icon)}
            </div>
            <h4 className="font-medium text-gray-900 mb-1">{method.title}</h4>
            <p className="text-sm text-gray-600">{method.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningMethods;