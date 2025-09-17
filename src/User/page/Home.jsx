import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import FeaturedCategoriesCarousel from '../components/FeaturedCategoriesCarousel'
import NewArrivalsCarousel from '../components/NewArrivalCarousel'
import ShopByCategory from '../components/ShopByCategory'
import  TrendingNowCarousal  from '../components/TrendingNowCarousal'
import Footer  from '../components/Footer'


function Home(){
  return (
    <div>
        <HeroCarousel/>
        <ShopByCategory/>
        <FeaturedCategoriesCarousel/>
        <NewArrivalsCarousel/>
        <TrendingNowCarousal/>
        <Footer/>
    </div>
  )
}

export default Home