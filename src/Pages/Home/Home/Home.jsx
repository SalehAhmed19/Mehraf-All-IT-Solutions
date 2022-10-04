import React from "react";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import Freatured from "../Featured/Freatured";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Freatured />
      <Discount />
      <WhyUs />
    </div>
  );
};

export default Home;
