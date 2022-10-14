import React from "react";
import "./Banner.css";
import banner from "../../../Assets/images/banner.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div style={{ color: "#0071e8" }} className="max-w-md">
          <h1
            style={{ fontFamily: "Fira Sans" }}
            className="text-6xl font-bold"
          >
            MEHRAF
          </h1>
          <h3 className="text-xl font-bold pb-3">All IT Solutions</h3>
          <p className="mb-5 font-bold">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button style={{ color: "#0071e8" }} className="btn glass text-black">
            Explore with US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
