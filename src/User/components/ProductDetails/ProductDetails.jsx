import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../../Data/AllProductsData';
import newArrivalsData from '../../../Data/NewArrivalData';
import { StarIcon } from '@heroicons/react/20/solid';
import { HeartIcon, ShoppingBagIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Function to get product by ID from both datasets
  const getProductById = (id) => {
    // First check in main products
    const mainProduct = products.find(p => p.id === parseInt(id));
    if (mainProduct) return mainProduct;
    
    // If not found in main products, check in new arrivals
    const newArrivalProduct = newArrivalsData.find(p => p.id === parseInt(id));
    return newArrivalProduct;
  };

  // Find the product by ID
  const product = getProductById(productId);

  // If product not found, show error
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button 
            onClick={() => navigate(-1)}
            className="text-indigo-600 hover:text-indigo-500"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Get similar products based on category
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToBag = (e) => {
    e.preventDefault();
    
    if (!selectedSize && product.size && product.size.length > 0) {
      alert('Please select a size');
      return;
    }

    const currentCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    const existingItemIndex = currentCartItems.findIndex(item =>
      item.id === product.id && item.size === selectedSize
    );

    let updatedCartItems;

    if (existingItemIndex > -1) {
      updatedCartItems = currentCartItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      const newItem = {
        id: `${product.id}-${selectedSize}`,
        productId: product.id,
        name: product.title || product.name,
        price: product.discountedPrice || product.price,
        color: product.color,
        size: selectedSize,
        quantity: 1,
        image: product.imageUrl || product.image,
        brand: product.brand || product.category
      };
      updatedCartItems = [...currentCartItems, newItem];
    }

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleQuickAdd = (quickProduct) => {
    const currentCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const defaultSize = quickProduct.size && quickProduct.size.length > 0 ? quickProduct.size[0] : 'One Size';

    const newItem = {
      id: `${quickProduct.id}-${defaultSize}`,
      productId: quickProduct.id,
      name: quickProduct.title || quickProduct.name,
      price: quickProduct.discountedPrice || quickProduct.price,
      color: quickProduct.color,
      size: defaultSize,
      quantity: 1,
      image: quickProduct.imageUrl || quickProduct.image,
      brand: quickProduct.brand || quickProduct.category
    };

    const updatedCartItems = [...currentCartItems, newItem];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    window.dispatchEvent(new Event('cartUpdated'));

    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Success Message */}
        {showSuccessMessage && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Item added to cart successfully!</span>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-6"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to products
          </button>
        </div>

        {/* Product Details */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 sm:px-6 lg:px-8">
          {/* Product Image */}
          <div className="flex flex-col items-center">
            <div className="aspect-square w-full max-w-md overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.imageUrl || product.image}
                alt={product.title || product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <div className="lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.title || product.name}
              </h1>
              <p className="mt-2 text-lg text-gray-600">{product.brand || product.category}</p>
            </div>

            {/* Price */}
            <div className="mt-6">
              <h2 className="sr-only">Product information</h2>
              <div className="flex items-center gap-4">
                <p className="text-3xl tracking-tight text-gray-900">
                  {product.discountedPrice || product.price}
                </p>
                {product.price && product.discountedPrice && (
                  <>
                    <p className="text-xl text-gray-500 line-through">₹{product.price}</p>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                      {product.discountPercent}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Color */}
            {product.color && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="mt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {product.color}
                  </span>
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.size && product.size.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <div className="grid grid-cols-4 gap-3 mt-4">
                  {product.size.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={classNames(
                        selectedSize === size
                          ? 'border-indigo-600 bg-indigo-600 text-white'
                          : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                        "flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <form className="mt-8" onSubmit={handleAddToBag}>
              <button
                type="submit"
                disabled={product.quantity === 0}
                className={classNames(
                  product.quantity === 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700',
                  "flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                )}
              >
                {product.quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </form>

            {/* Product Details */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <div className="mt-4">
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>

            {/* Product Highlights */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-sm font-medium text-gray-900">Product Details</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.brand && (
                    <li className="text-gray-600">
                      <span className="text-gray-900">Brand:</span> {product.brand}
                    </li>
                  )}
                  {product.category && (
                    <li className="text-gray-600">
                      <span className="text-gray-900">Category:</span> {product.category}
                    </li>
                  )}
                  {product.gender && (
                    <li className="text-gray-600">
                      <span className="text-gray-900">Gender:</span> {product.gender}
                    </li>
                  )}
                  <li className="text-gray-600">
                    <span className="text-gray-900">In Stock:</span> {product.quantity || 'Available'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">You may also like</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {similarProducts.map((similarProduct) => (
                <div key={similarProduct.id} className="group relative">
                  <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                    <img
                      src={similarProduct.imageUrl}
                      alt={similarProduct.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(`/product/${similarProduct.id}`);
                            window.scrollTo(0, 0);
                          }}
                          className="hover:text-gray-900"
                        >
                          {similarProduct.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{similarProduct.brand}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">₹{similarProduct.discountedPrice}</p>
                      {similarProduct.discountPercent > 0 && (
                        <p className="text-sm text-gray-500 line-through">₹{similarProduct.price}</p>
                      )}
                    </div>
                  </div>
                  <div className="mt-2">
                    <button
                      onClick={() => handleQuickAdd(similarProduct)}
                      disabled={similarProduct.quantity === 0}
                      className={classNames(
                        similarProduct.quantity === 0
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-indigo-600 hover:bg-indigo-700',
                        "w-full rounded-md px-3 py-2 text-sm font-medium text-white transition-colors"
                      )}
                    >
                      {similarProduct.quantity === 0 ? 'Out of Stock' : 'Quick Add'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}