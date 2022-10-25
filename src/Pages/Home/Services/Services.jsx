import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { Avatar, Button, CardCover, IconButton, Link } from "@mui/joy";
import graphicDesign from "../../../Assets/images/graphicdesign.png";
import webDevelopment from "../../../Assets/images/webdevelopment.png";
import digitalMarketing from "../../../Assets/images/digitalmarketing.png";
import videoEditing from "../../../Assets/images/videoediting.png";
import { Zoom } from "react-reveal";
import { BookmarkAdd } from "@mui/icons-material";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import PaletteIcon from "@mui/icons-material/Palette";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import InsightsIcon from "@mui/icons-material/Insights";
import "./Services.css";

const Services = () => {
  const data = [
    {
      _id: 1,
      title: "Graphics Design",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: graphicDesign,
      route: "/graphic-design",
      icon: <PaletteIcon />,
    },
    {
      _id: 2,
      title: "Web Development",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: webDevelopment,
      route: "/web-development",
      icon: <CodeOffIcon />,
    },
    {
      _id: 3,
      title: "Video & Animation",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: videoEditing,
      route: "/video-animation",
      icon: <MovieFilterIcon />,
    },
    {
      _id: 4,
      title: "Digital Marketing",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: digitalMarketing,
      route: "/digital-marketing",
      icon: <InsightsIcon />,
    },
  ];
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch("service.json")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [services]);
  return (
    <div
      id="services"
      className="my-20"
      style={{
        color: "#0071e8",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-center py-5">
          See what we can do for you?
          {/* <div
            style={{ background: "#0071e8" }}
            className="h-1 w-36 lg:w-40 rounded mt-3"
          ></div> */}
        </h2>
        <p className="px-5 lg:text-xl text-center">
          Choose the best service from us. We can do what you need.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-10 lg:mx-40">
        {data.map((d) => (
          <Zoom>
            <Card
              sx={{
                width: 280,
                boxShadow: "2px 0px 11px 0px rgba(133,133,133,0.65)",
                color: "#5E3091",
                margin: "0 auto",
              }}
            >
              <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                <img src={d.img} loading="lazy" alt="" />
              </AspectRatio>
              <Box sx={{ display: "flex" }}>
                {/* <div>
                  <Typography level="body3">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div> */}
                {/* <Button
                  variant="solid"
                  size="sm"
                  aria-label="Explore Bahamas Islands"
                  sx={{
                    ml: "auto",
                    fontWeight: 600,
                    margin: "0 auto",
                    backgroundColor: "#0171E8",
                    color: "#fff",
                  }}
                >
                  Explore
                </Button> */}
                <Typography
                  level="h2"
                  fontSize="md"
                  sx={{ mb: 0.5, fontWeight: 800 }}
                >
                  {d.title}
                </Typography>
                <IconButton
                  aria-label="bookmark Bahamas Islands"
                  // variant="plain"
                  color="neutral"
                  size="sm"
                  sx={{
                    position: "absolute",
                    bottom: "0.5rem",
                    right: "0.5rem",
                    color: "#1876D1",
                  }}
                >
                  {d.icon}
                </IconButton>
              </Box>
            </Card>
          </Zoom>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Services;
