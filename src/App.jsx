import { Routes, Route } from "react-router-dom";
import Nav from "./User/components/Nav/Nav";
import Home from "./User/page/Home";
import MensProductCategoryPage from "./User/page/MensProductCategoryPage";
import WomensProductCategoryPage from "./User/page/WomensProductCategoryPage";
import Footer from "./User/components/Footer/Footer";
import SearchProductPage from "./User/page/SearchProductPage";
import Cart from "./User/page/Cart";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mensproduct"
            element={<MensProductCategoryPage />}
          />
          <Route
            path="/womensproduct"
            element={<WomensProductCategoryPage />}
          />
          <Route
            path="/searchproduct"
            element={<SearchProductPage />}
          />
          <Route
            path="/cart"
            element={<Cart/>}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;