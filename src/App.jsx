import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./User/components/Nav/Nav";
import Home from "./User/page/Home";
import MensProductCategoryPage from "./User/page/MensProductCategoryPage";
import WomensProductCategoryPage from "./User/page/WomensProductCategoryPage";
import Footer from "./User/components/Footer/Footer";
import SearchProductPage from "./User/page/SearchProductPage";
import CartPage from "./User/page/CartPage";
import UserProfilePage from "./User/page/UserProfilePage";
import MyOrdersPage from "./User/page/MyOrdersPage";
import MyWishlistPage from "./User/page/MyWishlistPage";
import MyRewardsPage from "./User/page/MyRewardsPage";
import GiftCardsPage from "./User/page/GiftCardsPage";
import CheckOutPage from "./User/page/CheckOutPage";
import Product from "./User/components/Product/Product";
import ProductDetails from './User/components/ProductDetails/ProductDetails'; // Fixed import path

function App() {
  return (
      <div>
        <Nav />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Product Details Route - Should be before dynamic category routes */}
          <Route path="/product/:productId" element={<ProductDetails />} />
          
          {/* Category Pages */}
          <Route
            path="/mensproductcategorypage"
            element={<MensProductCategoryPage/>}
          />
          <Route
            path="/womensproductcategorypage"
            element={<WomensProductCategoryPage/>}
          />
          
          {/* Women's Product Routes */}
          <Route path="/womensproduct" element={<Product />} />
          <Route path="/womensproduct/:category" element={<Product />} />
          <Route path="/womensproduct/brand/:brand" element={<Product />} />
          <Route path="/womensproduct/featured/:featured" element={<Product />} />
          
          {/* Men's Product Routes */}
          <Route path="/mensproduct" element={<Product />} />
          <Route path="/mensproduct/:category" element={<Product />} />
          <Route path="/mensproduct/brand/:brand" element={<Product />} />
          <Route path="/mensproduct/featured/:featured" element={<Product />} />
          
          {/* General Product Routes */}
          <Route path="/products" element={<Product />} />
          <Route path="/products/:category" element={<Product />} />
          
          {/* Other Pages */}
          <Route path="/searchproduct" element={<SearchProductPage />} />
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/myorderspage" element={<MyOrdersPage />} />
          <Route path="/mywishlistpage" element={<MyWishlistPage />} />
          <Route path="/myrewardspage" element={<MyRewardsPage />} />
          <Route path="/giftcardspage" element={<GiftCardsPage />} />
          <Route path="/checkoutpage" element={<CheckOutPage />} />
          
          {/* Catch-all route - should be last */}
          <Route path="/:category?" element={<Product />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;