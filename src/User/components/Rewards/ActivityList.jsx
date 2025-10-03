import React from 'react';
import { TrendingUp } from 'lucide-react';

const ActivityList = ({ activities }) => {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{activity.description}</h4>
              <p className="text-sm text-gray-500">
                {new Date(activity.date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-green-600 font-semibold">
              <span>+{activity.points}</span>
            </div>
            <span className="text-sm text-gray-500 capitalize">{activity.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;