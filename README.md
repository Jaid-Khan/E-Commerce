# E-Commerce Website Frontend File Structure




Frontend/
├── .git/                    # Git version control directory
├── .gitignore              # Specifies files to ignore in Git
├── node_modules/           # All npm dependencies (automatically generated)
├── dist/                   # Production build output
│   ├── index.html
│   ├── vite.svg
│   └── assets/
│       ├── index-BL-0bdPS.js
│       ├── index-CPYrd8zj.css
│       └── UrbanEaseLogo-BLEBV-Sz.png
├── eslint.config.js        # ESLint configuration
├── index.html              # Main HTML entry point
├── package-lock.json       # NPM dependency lock file
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation (this file)
├── src/                    # Source code directory
│   ├── App.css             # Main application styles
│   ├── App.jsx             # Root React component
│   ├── index.css           # Global styles
│   ├── main.jsx            # JavaScript entry point
│   ├── assets/             # Static assets
│   │   ├── react.svg
│   │   └── UrbanEaseLogo.png
│   ├── Data/               # Application data files
│   │   ├── CartData.js                      # Shopping cart data
│   │   ├── DiscoverMoreSearchPage.js        # Search page discovery data
│   │   ├── FeaturedCategoryData.js          # Featured categories data
│   │   ├── HeroCarouselData.js              # Hero carousel content data
│   │   ├── MenSectionHomeData.js            # Men's section home page data
│   │   ├── MensProductCategoryData.js       # Men's product category data
│   │   ├── NavMenuData.js                   # Navigation menu data
│   │   ├── NewArrivalData.js                # New arrival products data
│   │   ├── ShopByCategory.js                # Shop by category data
│   │   ├── TrendingNowData.js               # Trending products data
│   │   ├── WomenSectionHomeData.js          # Women's section home page data
│   │   └── WomensProductCategoryData.js     # Women's product category data
│   └── User/               # User interface components
│       ├── components/     # Reusable UI components
│       │   ├── Cart/                          # Shopping cart components
│       │   │   ├── CartItem.jsx               # Individual cart item component
│       │   │   ├── CartItemList.jsx           # List of cart items
│       │   │   └── OrderSummary.jsx           # Order summary component
│       │   ├── FeaturedBrands/                # Featured brands components
│       │   │   ├── FeaturedCategoriesCarousel.jsx  # Categories carousel
│       │   │   └── FeaturedCategoryCard.jsx   # Individual category card
│       │   ├── Footer/                        # Footer component
│       │   │   └── Footer.jsx                 # Main footer component
│       │   ├── HeroCarousal/                  # Hero carousel components
│       │   │   └── HeroCarousel.jsx           # Main hero carousel
│       │   ├── HomePageBanners/               # Home page banners
│       │   │   └── OffersBanner.jsx           # Special offers banner
│       │   ├── MenSectionHomePage/            # Men's section components
│       │   │   ├── MenSectionCard.jsx         # Individual men's product card
│       │   │   └── MenSectionCarousal.jsx     # Men's products carousel
│       │   ├── MensProductsCategory/          # Men's category components
│       │   │   ├── FeaturedProductsMensCategory/
│       │   │   │   └── MensProductCategoryFeaturedProducts.jsx  # Featured men's products
│       │   │   ├── HeroSectionMensCategory/
│       │   │   │   └── MensProductCategoryHeroSection.jsx       # Men's category hero section
│       │   │   └── ShopByCategoryMensCategory/
│       │   │       ├── MensProductShopByCategoryCard.jsx        # Men's category card
│       │   │       └── MensProductsShopByCategory.jsx           # Men's shop by category
│       │   ├── Nav/                           # Navigation components
│       │   │   └── Nav.jsx                    # Main navigation component
│       │   ├── NewCollections/                # New collections components
│       │   │   ├── NewArrivalCard.jsx         # New arrival product card
│       │   │   └── NewArrivalCarousel.jsx     # New arrivals carousel
│       │   ├── SearchProduct/                 # Search functionality components
│       │   │   ├── DiscoverMore.jsx           # Discover more search results
│       │   │   └── SearchBox.jsx              # Search input component
│       │   ├── ShopByCategory/                # Category shopping components
│       │   │   ├── ShopByCategory.jsx         # Main shop by category
│       │   │   └── ShopByCategoryCard.jsx     # Individual category card
│       │   ├── TrendingNow/                   # Trending products components
│       │   │   ├── TrendingNowCard.jsx        # Trending product card
│       │   │   └── TrendingNowCarousal.jsx    # Trending products carousel
│       │   ├── WomenSectionHomePage/          # Women's section components
│       │   │   ├── WomenSectionCard.jsx       # Individual women's product card
│       │   │   └── WomenSectionCarousal.jsx   # Women's products carousel
│       │   └── WomensProductsCategory/        # Women's category components
│       │       ├── FeaturedProductsWomensCategory/
│       │       │   ├── WomensProductCategoryFeaturedProducts.jsx      # Featured women's products
│       │       │   └── WomensProductCategoryFeaturedProductsCard.jsx  # Featured product card
│       │       ├── HeroSectionWomensCategory/
│       │       │   └── WomensProductCategoryHeroSection.jsx           # Women's category hero section
│       │       └── ShopByCategoryWomensCategory/
│       │           ├── WomensProductShopByCategoryCard.jsx            # Women's category card
│       │           └── WomensProductsShopByCategory.jsx               # Women's shop by category
│       └── page/           # Page-level components
│           ├── Cart.jsx                       # Shopping cart page
│           ├── Home.jsx                       # Home page
│           ├── MensProductCategoryPage.jsx    # Men's products category page
│           ├── SearchProductPage.jsx          # Product search page
│           └── WomensProductCategoryPage.jsx  # Women's products category page
└── vite.config.js         # Vite build tool configuration


