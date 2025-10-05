import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mensproductcategorypage"
            element={<MensProductCategoryPage/>}
          />
          <Route
            path="/womensproductcategorypage"
            element={<WomensProductCategoryPage/>}
          />
          <Route
            path="/mensproduct"
            element={<Product />}
          />
          <Route
            path="/womensproduct"
            element={<Product />}
          />
          <Route
            path="/searchproduct"
            element={<SearchProductPage />}
          />
          <Route path="/cart"
            element={<CartPage/>}/>
          <Route
            path="/userprofile"
            element={<UserProfilePage />}
          />
          <Route
            path="/myorderspage"
            element={<MyOrdersPage />}
          />
          <Route
            path="/mywishlistpage"
            element={<MyWishlistPage />}
          />
          <Route
            path="/myrewardspage"
            element={<MyRewardsPage />}
          />
          <Route
            path="/giftcardspage"
            element={<GiftCardsPage />}
          />
          <Route
            path="/checkoutpage"
            element={<CheckOutPage />}
          />
          
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;