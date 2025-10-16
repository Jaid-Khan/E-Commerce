import { Link } from "react-router-dom";

const DiscoverMore = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Discover More</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {discoverCategories.map((category, index) => (
          <Link
            key={index}
            to={category.href}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors duration-200 hover:shadow-md"
          >
            <span className="text-gray-700 text-sm font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const discoverCategories = [
  // Men's Categories
  { name: 'Men Kurtas', href: '/mensproduct/kurtas' },
  { name: 'Men Jeans', href: '/mensproduct/jeans' },
  { name: 'Men T-shirts', href: '/mensproduct/tshirts' },
  { name: 'Men Shirts', href: '/mensproduct/shirts' },
  { name: 'Men Pants', href: '/mensproduct/pants' },
  { name: 'Men Sweaters', href: '/mensproduct/sweaters' },
  { name: 'Men Jackets', href: '/mensproduct/jackets' },
  { name: 'Men Track Pants', href: '/mensproduct/track-pants' },

  // Women's Categories
  { name: 'Women Kurtis', href: '/womensproduct/kurtis' },
  { name: 'Women Tops', href: '/womensproduct/tops' },
  { name: 'Women Dresses', href: '/womensproduct/dresses' },
  { name: 'Women Jeans', href: '/womensproduct/jeans' },
  { name: 'Women T-shirts', href: '/womensproduct/tshirts' },
  { name: 'Women Pants', href: '/womensproduct/pants' },
  { name: 'Women Sweaters', href: '/womensproduct/sweaters' },
  { name: 'Women Jackets', href: '/womensproduct/jackets' },

  // Ethnic Wear
  { name: 'Sarees', href: '/womensproduct/sarees' },
  { name: 'Ethnic Wear', href: '/womensproduct/ethnic-wear' },
  { name: 'Lahanga Cholis', href: '/womensproduct/lahenga-cholis' },
  { name: 'Salwar Suits', href: '/womensproduct/salwar-suits' },
  { name: 'Shararas', href: '/womensproduct/shararas' },

  // Search-based categories (for generic search)
  { name: 'All Kurtas', href: '/search?q=kurta' },
  { name: 'All Jeans', href: '/search?q=jeans' },
  { name: 'All T-shirts', href: '/search?q=t-shirt' },
  { name: 'All Dresses', href: '/search?q=dress' },

  // Brand Categories
  { name: 'Zara', href: '/brand/zara' },
  { name: 'H&M', href: '/brand/hm' },
  { name: 'Nike', href: '/brand/nike' },
  { name: 'Adidas', href: '/brand/adidas' },
  { name: 'Levi\'s', href: '/brand/levis' },
  { name: 'Forever 21', href: '/brand/forever21' },

  // Featured Categories
  // { name: 'New Arrivals', href: '/featured/new-arrivals' },
  // { name: 'Best Sellers', href: '/featured/best-sellers' },
  // { name: 'Trending Now', href: '/featured/trending' },
  // { name: 'Sale', href: '/search?q=&discount=50' }, // You can modify this based on your discount filter
];

export default DiscoverMore;