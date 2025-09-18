import React from "react";
import HeroCarousel from "../components/HeroCarousal/HeroCarousel";
import FeaturedCategoriesCarousel from "../components/FeaturedBrands/FeaturedCategoriesCarousel";
import NewArrivalsCarousel from "../components/NewCollections/NewArrivalCarousel";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
import TrendingNowCarousal from "../components/TrendingNow/TrendingNowCarousal";
import WomenCarousel from "../components/WomenSectionHomePage/WomenSectionCarousal";
import MensCarousel from "../components/MenSectionHomePage/MenSectionCarousal";
import OffersBanner from "../components/HomePageBanners/OffersBanner";


function Home() {
  return (
    <div>
      <HeroCarousel />
      <ShopByCategory />
      <NewArrivalsCarousel />
      <TrendingNowCarousal />
      <OffersBanner />
      <WomenCarousel />
      <MensCarousel />
      <FeaturedCategoriesCarousel />
    </div>
  );
}

export default Home;
