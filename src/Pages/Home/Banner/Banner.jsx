import React from "react";
import "./Banner.css";
import banner from "../../../Assets/images/banner.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Mehraf All IT Sollutions</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum
            vel atque maiores fugiat labore dolorum dignissimos sunt debitis.
            Praesentium impedit repudiandae quae sit dolorem deleniti aut veniam
            eum aliquam.
          </p>
          <button className="btn btn-dark">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
