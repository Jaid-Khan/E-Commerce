# 🛒 E-Commerce Frontend

This is the **frontend** of an E-Commerce application built with **React + Vite**.

```Frontend/
├── .git/
├── .gitignore
├── node_modules/
├── dist/
│   ├── index.html
│   ├── vite.svg
│   └── assets/
│       ├── index-BL-0bdPS.js
│       ├── index-CPYrd8zj.css
│       └── UrbanEaseLogo-BLEBV-Sz.png
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   ├── react.svg
│   │   └── UrbanEaseLogo.png
│   ├── Data/
│   │   ├── CartData.js
│   │   ├── DiscoverMoreSearchPage.js
│   │   ├── FeaturedCategoryData.js
│   │   ├── HeroCarouselData.js
│   │   ├── MenSectionHomeData.js
│   │   ├── MensProductCategoryData.js
│   │   ├── NavMenuData.js
│   │   ├── NewArrivalData.js
│   │   ├── ShopByCategory.js
│   │   ├── TrendingNowData.js
│   │   ├── WomenSectionHomeData.js
│   │   └── WomensProductCategoryData.js
│   └── User/
│       ├── components/
│       │   ├── Cart/
│       │   │   ├── CartItem.jsx
│       │   │   ├── CartItemList.jsx
│       │   │   └── OrderSummary.jsx
│       │   ├── FeaturedBrands/
│       │   │   ├── FeaturedCategoriesCarousel.jsx
│       │   │   └── FeaturedCategoryCard.jsx
│       │   ├── Footer/
│       │   │   └── Footer.jsx
│       │   ├── HeroCarousal/
│       │   │   └── HeroCarousel.jsx
│       │   ├── HomePageBanners/
│       │   │   └── OffersBanner.jsx
│       │   ├── MenSectionHomePage/
│       │   │   ├── MenSectionCard.jsx
│       │   │   └── MenSectionCarousal.jsx
│       │   ├── MensProductsCategory/
│       │   │   ├── FeaturedProductsMensCategory/
│       │   │   │   └── MensProductCategoryFeaturedProducts.jsx
│       │   │   ├── HeroSectionMensCategory/
│       │   │   │   └── MensProductCategoryHeroSection.jsx
│       │   │   └── ShopByCategoryMensCategory/
│       │   │       ├── MensProductShopByCategoryCard.jsx
│       │   │       └── MensProductsShopByCategory.jsx
│       │   ├── Nav/
│       │   │   └── Nav.jsx
│       │   ├── NewCollections/
│       │   │   ├── NewArrivalCard.jsx
│       │   │   └── NewArrivalCarousel.jsx
│       │   ├── SearchProduct/
│       │   │   ├── DiscoverMore.jsx
│       │   │   └── SearchBox.jsx
│       │   ├── ShopByCategory/
│       │   │   ├── ShopByCategory.jsx
│       │   │   └── ShopByCategoryCard.jsx
│       │   ├── TrendingNow/
│       │   │   ├── TrendingNowCard.jsx
│       │   │   └── TrendingNowCarousal.jsx
│       │   ├── WomenSectionHomePage/
│       │   │   ├── WomenSectionCard.jsx
│       │   │   └── WomenSectionCarousal.jsx
│       │   └── WomensProductsCategory/
│       │       ├── FeaturedProductsWomensCategory/
│       │       │   ├── WomensProductCategoryFeaturedProducts.jsx
│       │       │   └── WomensProductCategoryFeaturedProductsCard.jsx
│       │       ├── HeroSectionWomensCategory/
│       │       │   └── WomensProductCategoryHeroSection.jsx
│       │       └── ShopByCategoryWomensCategory/
│       │           ├── WomensProductShopByCategoryCard.jsx
│       │           └── WomensProductsShopByCategory.jsx
│       └── page/
│           ├── Cart.jsx
│           ├── Home.jsx
│           ├── MensProductCategoryPage.jsx
│           ├── SearchProductPage.jsx
│           └── WomensProductCategoryPage.jsx
└── vite.config.js```

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
