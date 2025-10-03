import React, { useState } from 'react';
import { Heart, ShoppingCart, Trash2, Share2, Eye, Star } from 'lucide-react';
import { 
  wishlistItemsData, 
  sortWishlistItems, 
  getWishlistStats, 
  getDiscountPercentage,
  formatCurrency 
} from '../../../Data/WishListData';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState(wishlistItemsData);
  const [sortBy, setSortBy] = useState('recent');

  const handleRemoveFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const handleMoveToCart = (id) => {
    // Add move to cart logic here
    console.log('Move to cart:', id);
  };

  const handleShareProduct = (product) => {
    // Add share logic here
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} on UrbanEase`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  const handleViewProduct = (id) => {
    // Navigate to product page
    console.log('View product:', id);
  };

  const sortedItems = sortWishlistItems(wishlistItems, sortBy);
  const stats = getWishlistStats(wishlistItems);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
              <p className="text-gray-600 mt-2">Your saved items ({wishlistItems.length})</p>
            </div>
            
            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="recent">Recently Added</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Product Name</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>
        </div>

        {/* Wishlist Items */}
        {sortedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Product Image */}
                <div className="relative">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Discount Badge */}
                  {item.originalPrice > item.price && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {getDiscountPercentage(item.price, item.originalPrice)}% OFF
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-12 right-3 flex flex-col space-y-2">
                    <button
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="bg-white p-2 rounded-full shadow-md hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShareProduct(item)}
                      className="bg-white p-2 rounded-full shadow-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Out of Stock Overlay */}
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">{item.brand}</span>
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
                      {item.name}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {renderStars(item.rating)}
                    </div>
                    <span className="text-xs text-gray-500">({item.reviewCount})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-lg font-bold text-gray-900">
                      {formatCurrency(item.price)}
                    </span>
                    {item.originalPrice > item.price && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatCurrency(item.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Size and Color (for clothing items) */}
                  {(item.size || item.color) && (
                    <div className="flex space-x-2 mb-3 text-xs text-gray-600">
                      {item.size && <span>Size: {item.size}</span>}
                      {item.color && <span>Color: {item.color}</span>}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewProduct(item.id)}
                      className="flex-1 flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </button>
                    <button
                      onClick={() => handleMoveToCart(item.id)}
                      disabled={!item.inStock}
                      className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>

                  {/* Added Date */}
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      Added on {new Date(item.addedDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Wishlist */
          <div className="text-center py-12 bg-white border border-gray-200 rounded-lg">
            <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-600 mb-6">Start adding items you love to your wishlist</p>
            <button
              onClick={() => window.location.href = '/products'}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Start Shopping
            </button>
          </div>
        )}

        {/* Wishlist Stats */}
        {sortedItems.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{stats.totalItems}</div>
              <div className="text-sm text-gray-600">Total Items</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {stats.inStock}
              </div>
              <div className="text-sm text-gray-600">In Stock</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">
                {stats.outOfStock}
              </div>
              <div className="text-sm text-gray-600">Out of Stock</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {stats.categories.length}
              </div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;