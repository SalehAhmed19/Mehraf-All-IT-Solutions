import React from "react";
import "./Banner.css";
import banner from "../../../Assets/images/bg.png";
import Typewriter from "typewriter-effect";
import { Slide, Zoom } from "react-reveal";

const Banner = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 mb-5"
        style={{ color: "#0071e8" }}
      >
        <Slide left>
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
            <p style={{ color: "#444", fontWeight: 500 }} className="py-3">
              Choose the best IT services from here.
            </p>
            <button
              style={{ color: "#0071e8" }}
              className="btn glass hover:bg-blue-200"
            >
              Explore Now
            </button>
          </div>
        </Slide>
        <div className="hidden lg:block">
          <Zoom>
            <img
              style={{ width: "500px", margin: "100px 0" }}
              src={banner}
              alt=""
            />
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default Banner;
