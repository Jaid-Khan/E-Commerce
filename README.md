# 🛒 E-Commerce Frontend

This is the **frontend** of an E-Commerce application built with **React + Vite**.

```Frontend/
├── .git/                          # Git version control directory
├── .gitignore                     # Git ignore rules
├── README.md                      # Project documentation
├── dist/                          # Build output directory
├── eslint.config.js               # ESLint configuration
├── index.html                     # Main HTML entry point
├── node_modules/                  # Node.js dependencies
├── package-lock.json              # Exact dependency tree
├── package.json                   # Project dependencies and scripts
├── public/                        # Static public assets
│   ├── UrbanEaseLogo.png          # Main application logo
│   ├── _redirects                 # URL redirection rules
│   ├── address-barlogo.png        # Browser address bar icon
│   └── vite.svg                   # Vite framework logo
├── src/                           # Source code directory
│   ├── App.css                    # Main application styles
│   ├── App.jsx                    # Main application component
│   ├── Data/                      # Application data and constants
│   │   ├── AllProductsData.js     # Complete product catalog
│   │   ├── CartData.js            # Shopping cart data
│   │   ├── CheckoutData.js        # Checkout process data
│   │   ├── CheckoutDataConstant.js # Checkout constants
│   │   ├── DiscoverMoreSearchPage.js # Search page suggestions
│   │   ├── FeaturedCategoryBrandsData.js # Featured brands data
│   │   ├── GiftCardData.js        # Gift card information
│   │   ├── HeroCarouselData.js    # Hero banner carousel data
│   │   ├── MenSectionHomeData.js  # Men's section homepage data
│   │   ├── MensProductCategoryData.js # Men's product categories
│   │   ├── MyOrderData.js         # User order history data
│   │   ├── NavMenuData.js         # Navigation menu structure
│   │   ├── NewArrivalData.js      # New arrival products
│   │   ├── OrderData.js           # Order management data
│   │   ├── ProductFilterData.js   # Product filtering options
│   │   ├── RewardsData.js         # Loyalty rewards data
│   │   ├── ShopByCategory.js      # Category-based shopping data
│   │   ├── TrendingNowData.js     # Trending products data
│   │   ├── WishListData.js        # User wishlist data
│   │   ├── WomenSectionHomeData.js # Women's section homepage data
│   │   └── WomensProductCategoryData.js # Women's product categories
│   ├── User/                      # User-facing components and pages
│   │   ├── components/            # Reusable UI components
│   │   │   ├── Brand/             # Brand-related components
│   │   │   │   └── BrandCard.jsx  # Individual brand display card
│   │   │   ├── Cart/              # Shopping cart components
│   │   │   │   ├── CartItem.jsx   # Single cart item
│   │   │   │   ├── CartItemList.jsx # Cart items list
│   │   │   │   └── OrderSummary.jsx # Order summary component
│   │   │   ├── Checkout/          # Checkout process components
│   │   │   │   ├── Checkout.jsx   # Main checkout container
│   │   │   │   ├── CheckoutHeader.jsx # Checkout progress header
│   │   │   │   ├── OrderSummary.jsx # Checkout order summary
│   │   │   │   ├── PaymentMethodStep.jsx # Payment method selection
│   │   │   │   ├── ReviewOrderStep.jsx # Order review step
│   │   │   │   ├── ShippingAddressStep.jsx # Address selection
│   │   │   │   └── ShippingMethodStep.jsx # Shipping options
│   │   │   ├── FeaturedBrands/    # Featured brands showcase
│   │   │   │   ├── FeaturedCategoriesCarousel.jsx # Brands carousel
│   │   │   │   └── FeaturedCategoryCard.jsx # Brand category card
│   │   │   ├── Footer/            # Site footer
│   │   │   │   └── Footer.jsx     # Main footer component
│   │   │   ├── GiftCard/          # Gift card functionality
│   │   │   │   ├── BuyGiftCard.jsx # Purchase gift cards
│   │   │   │   ├── GiftCard.jsx   # Main gift card component
│   │   │   │   ├── GiftCardTabs.jsx # Gift card navigation tabs
│   │   │   │   └── RedeemGiftCard.jsx # Gift card redemption
│   │   │   ├── HeroCarousal/      # Hero banner carousel
│   │   │   │   └── HeroCarousel.jsx # Main hero carousel
│   │   │   ├── HomePageBanners/   # Homepage promotional banners
│   │   │   │   └── OffersBanner.jsx # Special offers banner
│   │   │   ├── MenSectionHomePage/ # Men's section homepage
│   │   │   │   ├── MenSectionCard.jsx # Men's product card
│   │   │   │   └── MenSectionCarousal.jsx # Men's products carousel
│   │   │   ├── MensProductsCategory/ # Men's category pages
│   │   │   │   ├── FeaturedProductsMensCategory/
│   │   │   │   │   └── MensProductCategoryFeaturedProducts.jsx
│   │   │   │   ├── HeroSectionMensCategory/
│   │   │   │   │   └── MensProductCategoryHeroSection.jsx
│   │   │   │   └── ShopByCategoryMensCategory/
│   │   │   │       ├── MensProductShopByCategoryCard.jsx
│   │   │   │       └── MensProductsShopByCategory.jsx
│   │   │   ├── MyOrders/          # Order history and management
│   │   │   │   ├── MyEmptyOrders.jsx # Empty orders state
│   │   │   │   ├── MyOrderCard.jsx # Order summary card
│   │   │   │   ├── MyOrderFilters.jsx # Order filtering options
│   │   │   │   ├── MyOrderItem.jsx # Individual order item
│   │   │   │   ├── MyOrderStatistics.jsx # Order stats dashboard
│   │   │   │   └── MyOrderStatus.jsx # Order status tracking
│   │   │   ├── Nav/               # Navigation components
│   │   │   │   └── Nav.jsx        # Main navigation bar
│   │   │   ├── NewCollections/    # New arrivals section
│   │   │   │   ├── NewArrivalCard.jsx # New product card
│   │   │   │   └── NewArrivalCarousel.jsx # New arrivals carousel
│   │   │   ├── OrderConfirmation/ # Order confirmation components
│   │   │   │   ├── LoadingSpinner.jsx # Loading indicator
│   │   │   │   ├── NextSteps.jsx  # Post-order instructions
│   │   │   │   ├── OrderHeader.jsx # Order confirmation header
│   │   │   │   ├── OrderSummary.jsx # Confirmation order summary
│   │   │   │   ├── OrderTotal.jsx # Order total breakdown
│   │   │   │   └── ShippingPaymentInfo.jsx # Shipping & payment details
│   │   │   ├── Product/           # Product listing components
│   │   │   │   ├── Product.jsx    # Main product listing page
│   │   │   │   └── ProductCard.jsx # Individual product card
│   │   │   ├── ProductDetails/    # Product detail pages
│   │   │   │   └── ProductDetails.jsx # Product details component
│   │   │   ├── Rewards/           # Loyalty rewards program
│   │   │   │   ├── ActivityList.jsx # Rewards activity history
│   │   │   │   ├── EarningMethods.jsx # Ways to earn rewards
│   │   │   │   ├── LevelsList.jsx # Rewards tiers/levels
│   │   │   │   ├── RewardCard.jsx # Individual reward card
│   │   │   │   ├── RewardsList.jsx # Available rewards list
│   │   │   │   ├── RewardsStats.jsx # Rewards statistics
│   │   │   │   └── RewardsTabs.jsx # Rewards navigation tabs
│   │   │   ├── SearchProduct/     # Product search functionality
│   │   │   │   ├── DiscoverMore.jsx # Search suggestions
│   │   │   │   └── SearchBox.jsx  # Search input component
│   │   │   ├── ShopByCategory/    # Category-based shopping
│   │   │   │   ├── ShopByCategory.jsx # Main category component
│   │   │   │   └── ShopByCategoryCard.jsx # Category card
│   │   │   ├── TrendingNow/       # Trending products
│   │   │   │   ├── TrendingNowCard.jsx # Trending product card
│   │   │   │   └── TrendingNowCarousal.jsx # Trending carousel
│   │   │   ├── UserProfile/       # User profile management
│   │   │   │   ├── AddressBook.jsx # Saved addresses
│   │   │   │   ├── ChangePassword.jsx # Password change form
│   │   │   │   ├── OrderHistory.jsx # User order history
│   │   │   │   └── ProfileInfo.jsx # Profile information
│   │   │   ├── Wishlist/          # Wishlist functionality
│   │   │   │   └── WishlistPage.jsx # Main wishlist page
│   │   │   ├── WomenSectionHomePage/ # Women's section homepage
│   │   │   │   ├── WomenSectionCard.jsx # Women's product card
│   │   │   │   └── WomenSectionCarousal.jsx # Women's products carousel
│   │   │   └── WomensProductsCategory/ # Women's category pages
│   │   │       ├── FeaturedProductsWomensCategory/
│   │   │       │   ├── WomensProductCategoryFeaturedProducts.jsx
│   │   │       │   └── WomensProductCategoryFeaturedProductsCard.jsx
│   │   │       ├── HeroSectionWomensCategory/
│   │   │       │   └── WomensProductCategoryHeroSection.jsx
│   │   │       └── ShopByCategoryWomensCategory/
│   │   │           ├── WomensProductShopByCategoryCard.jsx
│   │   │           └── WomensProductsShopByCategory.jsx
│   │   └── page/                  # Main page components
│   │       ├── BrandPage.jsx      # Brands listing page
│   │       ├── CartPage.jsx       # Shopping cart page
│   │       ├── CheckOutPage.jsx   # Checkout process page
│   │       ├── GiftCardsPage.jsx  # Gift cards page
│   │       ├── Home.jsx           # Homepage
│   │       ├── MensProductCategoryPage.jsx # Men's category page
│   │       ├── MyOrdersPage.jsx   # My orders page
│   │       ├── MyRewardsPage.jsx  # Rewards page
│   │       ├── MyWishlistPage.jsx # Wishlist page
│   │       ├── OrderConfirmationPage.jsx # Order confirmation page
│   │       ├── SearchProductPage.jsx # Product search page
│   │       ├── UserProfilePage.jsx # User profile page
│   │       └── WomensProductCategoryPage.jsx # Women's category page
│   ├── assets/                    # Static assets
│   │   ├── UrbanEaseLogo.png      # Application logo
│   │   └── react.svg              # React logo
│   ├── context/                   # React context providers
│   ├── index.css                  # Global styles
│   └── main.jsx                   # Application entry point
├── tree.txt                       # Directory structure file
└── vite.config.js                 # Vite build configuration```

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
