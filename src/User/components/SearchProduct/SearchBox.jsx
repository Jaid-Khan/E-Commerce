import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

const SearchBox = ({ onSearch, initialValue = "", showBackButton = true }) => {
  const [searchQuery, setSearchQuery] = useState(initialValue);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
      <div className="flex items-center max-w-4xl mx-auto">
        {showBackButton && (
          <Link to="/" className="mr-4">
            <XMarkIcon className="h-6 w-6 text-gray-600" />
          </Link>
        )}
        <form onSubmit={handleSubmit} className="flex-1 flex">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, brands and more"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              autoFocus={showBackButton}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;