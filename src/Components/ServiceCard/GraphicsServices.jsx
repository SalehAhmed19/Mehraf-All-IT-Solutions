import React from "react";

const GraphicsServices = ({ d }) => {
  console.log(d);
  return (
    <div className="border p-5 rounded-lg text-center">
      <h3 className="text-xl font-bold">{d.name}</h3>
      <p>
        <span className="font-bold">Starting Price: </span>
        {d.startingPrice} &#2547;
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0171E8"
          fill-opacity="1"
          d="M0,256L30,256C60,256,120,256,180,229.3C240,203,300,149,360,117.3C420,85,480,75,540,80C600,85,660,107,720,144C780,181,840,235,900,240C960,245,1020,203,1080,202.7C1140,203,1200,245,1260,229.3C1320,213,1380,139,1410,101.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default GraphicsServices;
