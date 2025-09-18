import { Link } from "react-router-dom";
import discoverCategories from '../../../Data/DiscoverMoreSearchPage';

const DiscoverMore = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Discover More</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {discoverCategories.map((category, index) => (
          <Link
            key={index}
            to={category.href}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors duration-200"
          >
            <span className="text-gray-700 text-sm font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DiscoverMore;