import React from "react";
import Contact from "../../Contact/Contact";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import Services from "../Services/Services";
import WhyUs from "../WhyUs/WhyUs";
import Faq from "../Faq/Faq"
const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Discount />
      {/* <WhyUs /> */}
      <Contact />
      <Faq/>
    </div>
  );
};

export default Home;
