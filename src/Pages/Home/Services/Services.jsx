import React from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import DevicesIcon from "@mui/icons-material/Devices";
import WebIcon from "@mui/icons-material/Web";
import AnimationIcon from "@mui/icons-material/Animation";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { Link } from "react-router-dom";

const Services = () => {
  const data = [
    {
      _id: 1,
      title: "Graphics Design",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/56jDts6/graphics-design-2.jpg",
      icon: <PaletteIcon style={{ fontSize: "80px" }} />,
      route: "/graphic-design",
    },
    {
      _id: 2,
      title: "Web Development",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/FD0xVMH/web-development.jpg",
      icon: <WebIcon style={{ fontSize: "80px" }} />,
      route: "/web-development",
    },
    {
      _id: 3,
      title: "Video & Animation",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/CHKdP2n/digital-marketing-2.jpg",
      icon: <AnimationIcon style={{ fontSize: "80px" }} />,
      route: "/video-animation",
    },
    {
      _id: 4,
      title: "Digital Marketing",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/CHKdP2n/digital-marketing-2.jpg",
      icon: <QueryStatsIcon style={{ fontSize: "80px" }} />,
      route: "/digital-marketing",
    },
  ];
  return (
    <div
      id="services"
      className="my-20"
      style={{
        color: "#0071e8",
      }}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center py-5">Services</h2>
        <div
          style={{ background: "#0071e8" }}
          className="h-1 w-36 rounded"
        ></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 my-10 gap-10 mx-5 lg:mx-40">
        {data.map((d) => (
          <Link to={d.route}>
            <div className="card h-72 glass flex justify-center items-center lg:bg-white text-white lg:text-black bg-blue-600 hover:bg-blue-600 transition ease-in duration-300 hover:text-white cursor-pointer pb-5">
              <figure>
                <span className="pt-10">{d.icon}</span>
              </figure>
              <div className="card-body">
                <h2 className="text-center text-3xl font-bold">{d.title}</h2>
                <p className="text-center">{d.des}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
