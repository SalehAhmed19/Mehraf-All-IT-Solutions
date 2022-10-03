import React from "react";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import Freatured from "../Featured/Freatured";

const Home = () => {
  return (
    <div>
      <Banner />
      <Freatured />
      <Discount />
    </div>
  );
};

export default Home;
