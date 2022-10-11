import React from "react";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import Services from "../Services/Services";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Discount />
      <WhyUs />
    </div>
  );
};

export default Home;
