import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileInfo from '../components/UserProfile/ProfileInfo';
import AddressBook from '../components/UserProfile/AddressBook';
import ChangePassword from '../components/UserProfile/ChangePassword';
import OrderHistory from '../components/UserProfile/OrderHistory';
import { User, MapPin, Key, ShoppingBag, LogOut } from 'lucide-react';

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();

  const tabs = [
    { id: 'profile', name: 'Profile Info', icon: User },
    { id: 'addresses', name: 'Saved Addresses', icon: MapPin },
    { id: 'orders', name: 'Order History', icon: ShoppingBag },
    { id: 'password', name: 'Change Password', icon: Key },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem('userToken');
    localStorage.removeItem('userProfile');
    navigate('/');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileInfo />;
      case 'addresses':
        return <AddressBook />;
      case 'orders':
        return <OrderHistory />;
      case 'password':
        return <ChangePassword />;
      default:
        return <ProfileInfo />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600 mt-2">Manage your profile, addresses, and orders</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* User Summary */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                    R
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rahul Sharma</h3>
                    <p className="text-sm text-gray-500">rahul.sharma@example.com</p>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <nav className="p-4">
                <ul className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <li key={tab.id}>
                        <button
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                            activeTab === tab.id
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{tab.name}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Logout Button */}
              <div className="p-4 border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;