import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const product = {
    id: 'basic-tee-6-pack',
    name: 'Basic Tee 6-Pack',
    price: 199,
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
        { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
        { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
    ],
    sizes: [
        { id: 'xxs', name: 'XXS', inStock: false },
        { id: 'xs', name: 'XS', inStock: true },
        { id: 's', name: 'S', inStock: true },
        { id: 'm', name: 'M', inStock: true },
        { id: 'l', name: 'L', inStock: true },
        { id: 'xl', name: 'XL', inStock: true },
        { id: '2xl', name: '2XL', inStock: true },
        { id: '3xl', name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const reviews = {
    href: '#',
    average: 4.0,
    totalCount: 117,
    breakdown: [
        { rating: 5, label: 'Excellent', count: 19259, percentage: 45, color: 'bg-green-500' },
        { rating: 4, label: 'Very Good', count: 15683, percentage: 37, color: 'bg-green-400' },
        { rating: 3, label: 'Good', count: 5420, percentage: 13, color: 'bg-yellow-500' },
        { rating: 2, label: 'Average', count: 1234, percentage: 3, color: 'bg-orange-500' },
        { rating: 1, label: 'Poor', count: 411, percentage: 1, color: 'bg-red-500' },
    ],
    recentReviews: [
        {
            id: 1,
            name: 'John Doe',
            rating: 5,
            date: '2024-01-15',
            comment: 'Excellent quality! The fabric is super soft and comfortable. Fits perfectly.',
            verified: true
        },
        {
            id: 2,
            name: 'Jane Smith',
            rating: 4,
            date: '2024-01-12',
            comment: 'Very good product. The colors are exactly as shown. Would recommend!',
            verified: true
        },
        {
            id: 3,
            name: 'Mike Johnson',
            rating: 3,
            date: '2024-01-10',
            comment: 'Good basic tees, but the sizing runs a bit small. Consider ordering one size up.',
            verified: false
        }
    ]
}

const similarProducts = [
  {
    id: 'premium-tee-2-pack',
    name: 'Premium Cotton Tee 3-Pack',
    price: 149,
    href: '#',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/r/k/m-2-mario-coffee-combraided-original-imahdgfbke8aycza.jpeg?q=70',
    alt: 'Three cotton t-shirts in black, white, and gray.',
    colors: ['Black', 'White', 'Gray'],
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    category: 'mens-clothing' // Added category
  },
  {
    id: 'organic-tshirt-pack',
    name: 'Organic Cotton T-Shirt Pack',
    price: 179,
    href: '#',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/p/d/a/-original-imagxy7vuktvdzj4.jpeg?q=70',
    alt: 'Pack of organic cotton t-shirts in natural colors.',
    colors: ['Natural', 'Beige', 'Olive'],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    category: 'mens-clothing' // Added category
  },
  {
    id: 'slim-fit-tees',
    name: 'Slim Fit Basic Tees',
    price: 169,
    href: '#',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/5/m/xl-fsmtsrt-2039-kajaru-original-imah8agktsygjfte.jpeg?q=70',
    alt: 'Slim fit t-shirts in various colors.',
    colors: ['Navy', 'Burgundy', 'Charcoal'],
    rating: 4.3,
    reviewCount: 67,
    inStock: false,
    category: 'mens-clothing' // Added category
  },
  {
    id: 'v-neck-collection',
    name: 'V-Neck Tee Collection',
    price: 159,
    href: '#',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/k/b/a/xl-64518810-try-this-original-imahdbmn8mmgabpj.jpeg?q=70',
    alt: 'V-neck t-shirts in a 4-pack collection.',
    colors: ['White', 'Black', 'Navy', 'Red'],
    rating: 4.6,
    reviewCount: 93,
    inStock: true,
    category: 'mens-clothing' // Added category
  },
  // Adding more examples to demonstrate the filtering
  {
    id: 'classic-polo-shirts',
    name: 'Classic Polo Shirts',
    price: 189,
    href: '#',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/6/j/k/s-ts53-vebnor-original-imahfhcqykh8gfag.jpeg?q=70',
    alt: 'Classic polo shirts in various colors.',
    colors: ['Navy', 'White', 'Black'],
    rating: 4.4,
    reviewCount: 78,
    inStock: true,
    category: 'mens-clothing'
  },
  {
    id: 'womens-casual-dress',
    name: 'Casual Summer Dress',
    price: 229,
    href: '#',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/0/k/l/l-ttj6011830-tokyo-talkies-original-imah57dtpgmzth2f.jpeg?q=70',
    alt: 'Casual summer dress for women.',
    colors: ['Floral', 'Blue', 'White'],
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
    category: 'womens-clothing'
  },
  {
    id: 'kids-t-shirt-pack',
    name: 'Kids T-Shirt Pack',
    price: 129,
    href: '#',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/h/x/1/15-16-years-kil-bpolo-c-s-red-g-mil-1pck-killer-original-imahgcuqnykshygq.jpeg?q=70',
    alt: 'T-shirt pack for kids.',
    colors: ['Red', 'Blue', 'Green'],
    rating: 4.2,
    reviewCount: 45,
    inStock: true,
    category: 'kids-clothing' // This will be filtered out
  },
]

// Filter similar products to show only men's and women's clothing
const filteredSimilarProducts = similarProducts.filter(product => 
  product.category === 'mens-clothing' || product.category === 'womens-clothing'
)

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]) // Default to 'S'
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showQuickAddMessage, setShowQuickAddMessage] = useState(false)
    const [quickAddProductName, setQuickAddProductName] = useState('')

    const handleAddToBag = (e) => {
        e.preventDefault()

        // Get current cart items from localStorage or initialize empty array
        const currentCartItems = JSON.parse(localStorage.getItem('cartItems')) || []

        // Check if item with same ID, color, and size already exists in cart
        const existingItemIndex = currentCartItems.findIndex(item =>
            item.id === product.id &&
            item.color === selectedColor.name &&
            item.size === selectedSize.name
        )

        let updatedCartItems

        if (existingItemIndex > -1) {
            // If item exists, update quantity
            updatedCartItems = currentCartItems.map((item, index) =>
                index === existingItemIndex
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        } else {
            // If item doesn't exist, add new item
            const newItem = {
                id: `${product.id}-${selectedColor.id}-${selectedSize.id}`,
                productId: product.id,
                name: product.name,
                price: product.price,
                color: selectedColor.name,
                size: selectedSize.name,
                quantity: 1,
                image: product.images[0].src
            }
            updatedCartItems = [...currentCartItems, newItem]
        }

        // Save to localStorage
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))

        // Show success message
        setShowSuccessMessage(true)

        // Hide success message after 3 seconds
        setTimeout(() => {
            setShowSuccessMessage(false)
        }, 3000)

        // Optional: You can also dispatch an event to update other components
        window.dispatchEvent(new Event('cartUpdated'))
    }

    const handleQuickAdd = (similarProduct, color = 'Black', size = 'M') => {
        const currentCartItems = JSON.parse(localStorage.getItem('cartItems')) || []

        const newItem = {
            id: `${similarProduct.id}-${color.toLowerCase()}-${size.toLowerCase()}`,
            productId: similarProduct.id,
            name: similarProduct.name,
            price: similarProduct.price,
            color: color,
            size: size,
            quantity: 1,
            image: similarProduct.image
        }

        const updatedCartItems = [...currentCartItems, newItem]
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
        window.dispatchEvent(new Event('cartUpdated'))

        // Show success message
        setQuickAddProductName(similarProduct.name)
        setShowQuickAddMessage(true)

        setTimeout(() => {
            setShowQuickAddMessage(false)
        }, 3000)
    }

    const handleColorChange = (color) => {
        setSelectedColor(color)
    }

    const handleSizeChange = (size) => {
        setSelectedSize(size)
    }

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

                {/* Quick Add Success Message */}
                {showQuickAddMessage && (
                    <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{quickAddProductName} added to cart!</span>
                        </div>
                    </div>
                )}

                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
                    {/* Image gallery */}
                    <div className="flex flex-col items-center mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                        <img
                            alt={product.images[0].alt}
                            src={product.images[0].src}
                            className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
                        />
                        <img
                            alt={product.images[1].alt}
                            src={product.images[1].src}
                            className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
                        />
                        <img
                            alt={product.images[2].alt}
                            src={product.images[2].src}
                            className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
                        />
                        <img
                            alt={product.images[3].alt}
                            src={product.images[3].src}
                            className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
                        />
                    </div>

                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">₹{product.price}</p>

                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                aria-hidden="true"
                                                className={classNames(
                                                    reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                    'size-5 shrink-0',
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                    <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {reviews.totalCount} reviews
                                    </a>
                                </div>
                            </div>

                            <form className="mt-10" onSubmit={handleAddToBag}>
                                {/* Colors */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                    <fieldset aria-label="Choose a color" className="mt-4">
                                        <div className="flex items-center gap-x-3">
                                            {product.colors.map((color) => (
                                                <div key={color.id} className="flex rounded-full outline -outline-offset-1 outline-black/10">
                                                    <input
                                                        value={color.id}
                                                        checked={selectedColor.id === color.id}
                                                        onChange={() => handleColorChange(color)}
                                                        name="color"
                                                        type="radio"
                                                        aria-label={color.name}
                                                        className={classNames(
                                                            color.classes,
                                                            'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3 cursor-pointer',
                                                        )}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </fieldset>
                                </div>

                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            Size guide
                                        </a>
                                    </div>

                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <div className="grid grid-cols-4 gap-3">
                                            {product.sizes.map((size) => (
                                                <label
                                                    key={size.id}
                                                    aria-label={size.name}
                                                    className={classNames(
                                                        !size.inStock ? 'opacity-25 cursor-not-allowed' : 'cursor-pointer',
                                                        selectedSize.id === size.id ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300 bg-white',
                                                        "group relative flex items-center justify-center rounded-md border p-3 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600"
                                                    )}
                                                >
                                                    <input
                                                        value={size.id}
                                                        checked={selectedSize.id === size.id}
                                                        onChange={() => size.inStock && handleSizeChange(size)}
                                                        name="size"
                                                        type="radio"
                                                        disabled={!size.inStock}
                                                        className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                                    />
                                                    <span className={classNames(
                                                        selectedSize.id === size.id ? 'text-white' : 'text-gray-900',
                                                        "text-sm font-medium uppercase"
                                                    )}>
                                                        {size.name}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </fieldset>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden transition-colors duration-200"
                                >
                                    Add to bag
                                </button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ratings and Reviews Section */}
                <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {/* Rating Summary */}
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customer Reviews</h2>

                            <div className="mt-6 flex items-center gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="text-4xl font-bold text-gray-900">{reviews.average}</div>
                                    <div className="flex items-center gap-1 mt-1">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                aria-hidden="true"
                                                className={classNames(
                                                    reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                                                    'size-5 shrink-0',
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <div className="text-sm text-gray-600 mt-1">
                                        {reviews.totalCount} reviews
                                    </div>
                                </div>
                            </div>

                            {/* Rating Breakdown */}
                            <div className="mt-8 space-y-4">
                                {reviews.breakdown.map((item) => (
                                    <div key={item.rating} className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-gray-600 w-20">{item.label}</span>
                                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`${item.color} h-2 rounded-full`}
                                                style={{ width: `${item.percentage}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 w-12 text-right">
                                            {item.count.toLocaleString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Reviews */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Reviews</h3>
                            <div className="space-y-6">
                                {reviews.recentReviews.map((review) => (
                                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center">
                                                    {[0, 1, 2, 3, 4].map((rating) => (
                                                        <StarIcon
                                                            key={rating}
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                                'size-4 shrink-0',
                                                            )}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm font-medium text-gray-900">{review.name}</span>
                                                {review.verified && (
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                                        Verified
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-sm text-gray-500">
                                                {new Date(review.date).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Similar Products Section */}
                <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">You may also like</h2>
                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            View all
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {filteredSimilarProducts.map((similarProduct) => (
                            <div key={similarProduct.id} className="group relative">
                                <div className="relative aspect-3/4 overflow-hidden rounded-lg bg-gray-200">
                                    <img
                                        alt={similarProduct.alt}
                                        src={similarProduct.image}
                                        className="size-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                                    />

                                    {/* Quick Actions */}
                                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                                            <HeartIcon className="size-5 text-gray-600" />
                                        </button>
                                        <button
                                            onClick={() => handleQuickAdd(similarProduct)}
                                            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <ShoppingBagIcon className="size-5 text-gray-600" />
                                        </button>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className={classNames(
                                            similarProduct.category === 'mens-clothing'
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-pink-100 text-pink-800',
                                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                        )}>
                                            {similarProduct.category === 'mens-clothing' ? "Men's" : "Women's"}
                                        </span>
                                    </div>

                                    {/* Out of Stock Badge */}
                                    {!similarProduct.inStock && (
                                        <div className="absolute top-12 left-3">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                Out of stock
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">
                                            <a href={similarProduct.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {similarProduct.name}
                                            </a>
                                        </h3>
                                        <div className="mt-1 flex items-center">
                                            <div className="flex items-center">
                                                {[0, 1, 2, 3, 4].map((rating) => (
                                                    <StarIcon
                                                        key={rating}
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            similarProduct.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                            'size-4 shrink-0',
                                                        )}
                                                    />
                                                ))}
                                            </div>
                                            <p className="sr-only">{similarProduct.rating} out of 5 stars</p>
                                            <span className="ml-1 text-sm text-gray-500">({similarProduct.reviewCount})</span>
                                        </div>
                                        <div className="mt-1 flex items-center gap-1">
                                            <span className="text-xs text-gray-500">Colors:</span>
                                            <div className="flex gap-1">
                                                {similarProduct.colors.map((color, index) => (
                                                    <span key={index} className="text-xs text-gray-600">
                                                        {color}{index < similarProduct.colors.length - 1 ? ',' : ''}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">₹{similarProduct.price}</p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        onClick={() => handleQuickAdd(similarProduct)}
                                        disabled={!similarProduct.inStock}
                                        className={classNames(
                                            !similarProduct.inStock
                                                ? 'bg-gray-300 cursor-not-allowed'
                                                : 'bg-indigo-600 hover:bg-indigo-700',
                                            "relative w-full flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white transition-colors duration-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                                        )}
                                    >
                                        {!similarProduct.inStock ? 'Out of Stock' : 'Quick Add'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}