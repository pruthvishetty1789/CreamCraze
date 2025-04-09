import React from "react";
import HeroBanner from "../components/HeroBanner";
import PopularDishes from "../components/PopularDishes";
import Testimonials from "../components/Testimonials";
import Offers from "../components/Offers";
import IceCreamOfTheDay from "../components/IceCreamOfTheDay";
import Location from "../pages/Location";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <PopularDishes />
      <Testimonials />
      <Offers />
      <IceCreamOfTheDay />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
