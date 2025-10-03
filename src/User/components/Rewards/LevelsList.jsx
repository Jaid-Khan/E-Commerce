import React from 'react';
import { Crown, CheckCircle } from 'lucide-react';

const LevelsList = ({ levels, currentLevel, userPoints }) => {
  return (
    <div className="space-y-6">
      {levels.map((level, index) => (
        <div
          key={level.name}
          className={`border rounded-lg p-6 ${
            currentLevel === level.name
              ? 'bg-blue-50 border-blue-200'
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  currentLevel === level.name
                    ? 'bg-blue-100 text-blue-600'
                    : userPoints >= level.points
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{level.name}</h3>
                <p className="text-gray-600">{level.points} points required</p>
              </div>
            </div>
            {currentLevel === level.name && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Current Level
              </span>
            )}
            {userPoints >= level.points && currentLevel !== level.name && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Achieved
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {level.benefits.map((benefit, benefitIndex) => (
              <div key={benefitIndex} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LevelsList;