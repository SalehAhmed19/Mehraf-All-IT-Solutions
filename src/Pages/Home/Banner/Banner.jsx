import React from "react";
import "./Banner.css";
import banner from "../../../Assets/images/bg.png";

const Banner = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 mb-5"
      style={{ color: "#0071e8" }}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-center">Mehraf</h1>
        <p className="font-bold text-xl">All IT Solutions</p>
        <p>Choose the best IT services from here.</p>
      </div>
      <div className="hidden lg:block">
        <img className="" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
