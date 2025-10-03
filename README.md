# 🛒 E-Commerce Frontend

This is the **frontend** of an E-Commerce application built with **React + Vite**.

```Frontend/
├── .git/                          # Git version control directory
├── .gitignore                     # Git ignore rules
├── README.md                      # Project documentation
├── dist/                          # Production build output
├── eslint.config.js               # ESLint configuration
├── index.html                     # Main HTML entry point
├── node_modules/                  # npm dependencies
├── package-lock.json              # Locked dependency versions
├── package.json                   # Project dependencies and scripts
├── public/                        # Static public assets
│   └── vite.svg                   # Vite logo
├── src/                           # Source code directory
│   ├── App.css                    # Main application styles
│   ├── App.jsx                    # Root application component
│   ├── Data/                      # Application data and constants
│   │   ├── CartData.js                    # Shopping cart data and utilities
│   │   ├── CheckoutData.js                # Checkout process data
│   │   ├── CheckoutDataConstant.js        # Checkout constants
│   │   ├── DiscoverMoreSearchPage.js      # Search page discovery data
│   │   ├── FeaturedCategoryData.js        # Featured categories data
│   │   ├── GiftCardData.js                # Gift card data and templates
│   │   ├── HeroCarouselData.js            # Homepage hero carousel content
│   │   ├── MenSectionHomeData.js          # Men's section homepage data
│   │   ├── MensKurtaData.js               # Men's kurta products data
│   │   ├── MensProductCategoryData.js     # Men's product category data
│   │   ├── MyOrderData.js                 # User order history data
│   │   ├── NavMenuData.js                 # Navigation menu structure
│   │   ├── NewArrivalData.js              # New arrival products data
│   │   ├── OrderData.js                   # Order management data
│   │   ├── ProductFilterData.js           # Product filtering options
│   │   ├── RewardsData.js                 # Loyalty rewards program data
│   │   ├── ShopByCategory.js              # Shop by category data
│   │   ├── TrendingNowData.js             # Trending products data
│   │   ├── WishListData.js                # Wishlist items and utilities
│   │   ├── WomenSectionHomeData.js        # Women's section homepage data
│   │   └── WomensProductCategoryData.js   # Women's product category data
│   ├── User/                      # User-related components and pages
│   │   ├── components/            # Reusable UI components
│   │   │   ├── Cart/                      # Shopping cart components
│   │   │   │   ├── CartItem.jsx           # Individual cart item component
│   │   │   │   ├── CartItemList.jsx       # Cart items list component
│   │   │   │   └── OrderSummary.jsx       # Order summary component
│   │   │   ├── Checkout/                  # Checkout process components
│   │   │   │   ├── Checkout.jsx           # Main checkout container
│   │   │   │   ├── CheckoutHeader.jsx     # Checkout progress header
│   │   │   │   ├── OrderSummary.jsx       # Checkout order summary
│   │   │   │   ├── PaymentMethodStep.jsx  # Payment method selection
│   │   │   │   ├── ReviewOrderStep.jsx    # Order review step
│   │   │   │   ├── ShippingAddressStep.jsx # Shipping address form
│   │   │   │   └── ShippingMethodStep.jsx # Shipping method selection
│   │   │   ├── FeaturedBrands/            # Featured brands showcase
│   │   │   │   ├── FeaturedCategoriesCarousel.jsx  # Categories carousel
│   │   │   │   └── FeaturedCategoryCard.jsx        # Category card component
│   │   │   ├── Footer/                    # Site footer component
│   │   │   │   └── Footer.jsx             # Main footer component
│   │   │   ├── GiftCard/                  # Gift card functionality
│   │   │   │   ├── BuyGiftCard.jsx        # Gift card purchase component
│   │   │   │   ├── GiftCard.jsx           # Main gift card component
│   │   │   │   ├── GiftCardTabs.jsx       # Gift card tabs navigation
│   │   │   │   └── RedeemGiftCard.jsx     # Gift card redemption
│   │   │   ├── HeroCarousal/              # Homepage hero section
│   │   │   │   └── HeroCarousel.jsx       # Main hero carousel component
│   │   │   ├── HomePageBanners/           # Homepage promotional banners
│   │   │   │   └── OffersBanner.jsx       # Special offers banner
│   │   │   ├── MenSectionHomePage/        # Men's section on homepage
│   │   │   │   ├── MenSectionCard.jsx     # Men's product card
│   │   │   │   └── MenSectionCarousal.jsx # Men's section carousel
│   │   │   ├── MensProductsCategory/      # Men's product category components
│   │   │   │   ├── FeaturedProductsMensCategory/   # Featured products section
│   │   │   │   │   └── MensProductCategoryFeaturedProducts.jsx  # Featured products
│   │   │   │   ├── HeroSectionMensCategory/        # Men's category hero section
│   │   │   │   │   └── MensProductCategoryHeroSection.jsx       # Hero section
│   │   │   │   └── ShopByCategoryMensCategory/     # Shop by category section
│   │   │   │       ├── MensProductShopByCategoryCard.jsx        # Category card
│   │   │   │       └── MensProductsShopByCategory.jsx           # Categories list
│   │   │   ├── MyOrders/                  # Order history and management
│   │   │   │   ├── MyEmptyOrders.jsx      # Empty orders state
│   │   │   │   ├── MyOrderCard.jsx        # Order summary card
│   │   │   │   ├── MyOrderFilters.jsx     # Order filtering options
│   │   │   │   ├── MyOrderItem.jsx        # Individual order item
│   │   │   │   ├── MyOrderStatistics.jsx  # Order statistics
│   │   │   │   └── MyOrderStatus.jsx      # Order status display
│   │   │   ├── Nav/                       # Navigation components
│   │   │   │   └── Nav.jsx                # Main navigation component
│   │   │   ├── NewCollections/            # New arrivals section
│   │   │   │   ├── NewArrivalCard.jsx     # New arrival product card
│   │   │   │   └── NewArrivalCarousel.jsx # New arrivals carousel
│   │   │   ├── OrderConfirmation/         # Order confirmation components
│   │   │   │   ├── LoadingSpinner.jsx     # Loading indicator
│   │   │   │   ├── NextSteps.jsx          # Post-order instructions
│   │   │   │   ├── OrderHeader.jsx        # Order confirmation header
│   │   │   │   ├── OrderSummary.jsx       # Order details summary
│   │   │   │   ├── OrderTotal.jsx         # Order total calculation
│   │   │   │   └── ShippingPaymentInfo.jsx # Shipping and payment info
│   │   │   ├── Product/                   # Generic product components
│   │   │   │   ├── Product.jsx            # Main product component
│   │   │   │   └── ProductCard.jsx        # Product card component
│   │   │   ├── ProductDetails/            # Product detail pages
│   │   │   │   └── ProductDetails.jsx     # Product details component
│   │   │   ├── Rewards/                   # Loyalty rewards program
│   │   │   │   ├── ActivityList.jsx       # Rewards activity history
│   │   │   │   ├── EarningMethods.jsx     # Points earning methods
│   │   │   │   ├── LevelsList.jsx         # Reward levels/tiers
│   │   │   │   ├── RewardCard.jsx         # Individual reward card
│   │   │   │   ├── RewardsList.jsx        # Available rewards list
│   │   │   │   ├── RewardsStats.jsx       # Rewards statistics
│   │   │   │   └── RewardsTabs.jsx        # Rewards section tabs
│   │   │   ├── SearchProduct/             # Product search functionality
│   │   │   │   ├── DiscoverMore.jsx       # Search discovery section
│   │   │   │   └── SearchBox.jsx          # Search input component
│   │   │   ├── ShopByCategory/            # Category browsing
│   │   │   │   ├── ShopByCategory.jsx     # Main shop by category component
│   │   │   │   └── ShopByCategoryCard.jsx # Category card component
│   │   │   ├── TrendingNow/               # Trending products section
│   │   │   │   ├── TrendingNowCard.jsx    # Trending product card
│   │   │   │   └── TrendingNowCarousal.jsx # Trending products carousel
│   │   │   ├── UserProfile/               # User profile management
│   │   │   │   ├── AddressBook.jsx        # Address management
│   │   │   │   ├── ChangePassword.jsx     # Password change form
│   │   │   │   ├── OrderHistory.jsx       # Order history display
│   │   │   │   └── ProfileInfo.jsx        # Profile information
│   │   │   ├── Wishlist/                  # Wishlist functionality
│   │   │   │   └── WishlistPage.jsx       # Wishlist page component
│   │   │   ├── WomenSectionHomePage/      # Women's section on homepage
│   │   │   │   ├── WomenSectionCard.jsx   # Women's product card
│   │   │   │   └── WomenSectionCarousal.jsx # Women's section carousel
│   │   │   └── WomensProductsCategory/    # Women's product category components
│   │   │       ├── FeaturedProductsWomensCategory/ # Featured products section
│   │   │       │   ├── WomensProductCategoryFeaturedProducts.jsx      # Featured products
│   │   │       │   └── WomensProductCategoryFeaturedProductsCard.jsx  # Product card
│   │   │       ├── HeroSectionWomensCategory/      # Women's category hero section
│   │   │       │   └── WomensProductCategoryHeroSection.jsx           # Hero section
│   │   │       └── ShopByCategoryWomensCategory/   # Shop by category section
│   │   │           ├── WomensProductShopByCategoryCard.jsx            # Category card
│   │   │           └── WomensProductsShopByCategory.jsx               # Categories list
│   │   └── page/                  # Main page components
│   │       ├── CartPage.jsx               # Shopping cart page
│   │       ├── CheckOutPage.jsx           # Checkout process page
│   │       ├── GiftCardsPage.jsx          # Gift cards management page
│   │       ├── Home.jsx                   # Homepage
│   │       ├── MensProductCategoryPage.jsx # Men's product category page
│   │       ├── MyOrdersPage.jsx           # Order history page
│   │       ├── MyRewardsPage.jsx          # Rewards program page
│   │       ├── MyWishlistPage.jsx         # Wishlist page
│   │       ├── OrderConfirmationPage.jsx  # Order confirmation page
│   │       ├── SearchProductPage.jsx      # Product search page
│   │       ├── UserProfilePage.jsx        # User profile page
│   │       └── WomensProductCategoryPage.jsx # Women's product category page
│   ├── assets/                   # Static assets and images
│   │   ├── UrbanEaseLogo.png     # Application logo
│   │   └── react.svg             # React logo
│   ├── context/                  # React Context providers
│   │   └── OrderContext.jsx      # Order management context
│   ├── index.css                 # Global CSS styles
│   └── main.jsx                  # Application entry point
└── vite.config.js                # Vite build configuration```

---

## 📂 File Descriptions

| File/Directory        | Description |
|------------------------|-------------|
| `.git/`               | Git version control directory |
| `.gitignore`          | Specifies files to ignore in Git |
| `node_modules/`       | All npm dependencies (automatically generated) |
| `dist/`               | Production build output directory |
| `eslint.config.js`    | ESLint configuration |
| `index.html`          | Main HTML entry point |
| `package-lock.json`   | NPM dependency lock file |
| `package.json`        | Project dependencies and scripts |
| `src/`                | Source code directory |
| `src/App.css`         | Main application styles |
| `src/App.jsx`         | Root React component |
| `src/index.css`       | Global styles |
| `src/main.jsx`        | JavaScript entry point |
| `src/assets/`         | Static assets directory |
| `src/Data/`           | Application data files |
| `src/User/`           | User interface components |
| `src/User/components/`| Reusable UI components |
| `src/User/page/`      | Page-level components |
| `vite.config.js`      | Vite build tool configuration |

---

## 📊 Key Data Files

| Data File                   | Purpose |
|------------------------------|---------|
| `CartData.js`               | Shopping cart data |
| `DiscoverMoreSearchPage.js` | Search page discovery data |
| `FeaturedCategoryData.js`   | Featured categories data |
| `HeroCarouselData.js`       | Hero carousel content data |
| `MenSectionHomeData.js`     | Men's section home page data |
| `MensProductCategoryData.js`| Men's product category data |
| `NavMenuData.js`            | Navigation menu data |
| `NewArrivalData.js`         | New arrival products data |
| `ShopByCategory.js`         | Shop by category data |
| `TrendingNowData.js`        | Trending products data |
| `WomenSectionHomeData.js`   | Women's section home page data |
| `WomensProductCategoryData.js` | Women's product category data |

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js (version 14 or higher)  
- npm or yarn package manager  

---

### ⚙️ Installation
Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd E-Commerce
npm install
