import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ClockIcon, XMarkIcon } from '@heroicons/react/24/outline';
import SearchBox from '../components/SearchProduct/SearchBox';
import DiscoverMore from '../components/SearchProduct/DiscoverMore';

const SearchProductPage = () => {
  const [recentSearches, setRecentSearches] = useState([]);
  const navigate = useNavigate();

  // Load recent searches from localStorage
  useEffect(() => {
    const searches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    setRecentSearches(searches);
  }, []);

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim()) {
      // Save to recent searches
      const updatedSearches = [
        searchQuery,
        ...recentSearches.filter(item => item !== searchQuery)
      ].slice(0, 5); // Keep only 5 most recent
      
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      
      // Navigate to search results page
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.setItem('recentSearches', JSON.stringify([]));
  };

  const removeRecentSearch = (index) => {
    const updatedSearches = [...recentSearches];
    updatedSearches.splice(index, 1);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  return (
    <div className="bg-white min-h-screen">
      <SearchBox onSearch={handleSearch} showBackButton={true} />
      
      <div className="max-w-4xl mx-auto p-4">
        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Searches</h2>
              <button 
                onClick={clearRecentSearches}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Clear All
              </button>
            </div>
            <ul className="space-y-2">
              {recentSearches.map((search, index) => (
                <li key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                  <button 
                    onClick={() => handleSearch(search)}
                    className="flex items-center flex-1 text-left"
                  >
                    <ClockIcon className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-700">{search}</span>
                  </button>
                  <button 
                    onClick={() => removeRecentSearch(index)}
                    className="p-1 text-gray-400 hover:text-gray-600"
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Discover More Section */}
        <DiscoverMore />
      </div>
    </div>
  );
};

export default SearchProductPage;