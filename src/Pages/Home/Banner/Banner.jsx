import React from "react";
import "./Banner.css";
import banner from "../../../Assets/images/bg.png";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 mb-5"
        style={{ color: "#0071e8" }}
      >
        <div className="flex flex-col justify-center items-center h-96 lg:h-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <Typewriter
              options={{
                strings: ["MEHRAF", "ALL IT SOLUTIONS"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-3">Choose the best IT services from here.</p>
          <button
            style={{ color: "#0071e8" }}
            className="btn glass hover:bg-blue-200"
          >
            Explore Now
          </button>
        </div>
        <div className="hidden lg:block">
          <img className="" src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
