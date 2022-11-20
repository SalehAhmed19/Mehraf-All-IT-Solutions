import React from "react";
import graphicDesign from "../../../Assets/images/graphicdesign.png";
import webDevelopment from "../../../Assets/images/webdevelopment.png";
import digitalMarketing from "../../../Assets/images/digitalmarketing.png";
import videoEditing from "../../../Assets/images/videoediting.png";
import { Zoom } from "react-reveal";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import PaletteIcon from "@mui/icons-material/Palette";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import InsightsIcon from "@mui/icons-material/Insights";
import "./Services.css";
import ServiceCard from "../../../Components/ServiceCard/ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
  const data = [
    {
      _id: 1,
      title: "Graphics Design",
      des: "Plans and illustrates concepts by designing rough layouts of art and copy regarding arrangement, size, type size and style, and related aesthetics. ",
      img: graphicDesign,
      route: "/graphic-design",
      icon: <PaletteIcon />,
    },
    {
      _id: 2,
      title: "Web Development",
      des: "Builds, designs, and maintains all websites and software applications",
      img: webDevelopment,
      route: "/web-development",
      icon: <CodeOffIcon />,
    },
    {
      _id: 3,
      title: "Video & Animation",
      des: "Video editors manipulate film and video footage to create a coherent and complete project that accurately depicts the film directors envision.",
      img: videoEditing,
      route: "/video-animation",
      icon: <MovieFilterIcon />,
    },
    {
      _id: 4,
      title: "Digital Marketing",
      des: "Plans and executes all web, SEO/SEM, database marketing, email, social media, and display advertising campaigns.",
      img: digitalMarketing,
      route: "/digital-marketing",
      icon: <InsightsIcon />,
    },
  ];
  return (
    <div id="services" className="my-20">
      <div className="flex flex-col items-center justify-center pb-10">
        <h2
          style={{ color: "#444" }}
          className="text-2xl lg:text-4xl font-bold text-center py-5"
        >
          See what we can do for you?
        </h2>
        <p className="px-5 lg:text-xl text-center">
          Choose the best service from us. We can do what you need.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-20 lg:gap-10 mx-10 lg:mx-40">
        {data.map((d) => (
          <Zoom>
            <Link to={d.route}>
              <ServiceCard key={d._id} service={d} />
            </Link>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Services;
