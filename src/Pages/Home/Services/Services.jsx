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
import { Divider } from "@mui/material";

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
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch("service.json")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [services]);
  return (
    <div id="services" className="my-20">
      <div className="flex flex-col items-center justify-center pb-10">
        <h2
          style={{ color: "#444" }}
          className="text-2xl lg:text-4xl font-bold text-center py-5"
        >
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-20 lg:gap-10 mx-10 lg:mx-40">
        {data.map((d) => (
          <Zoom>
            <Card
              className="card-hover"
              sx={{
                width: 280,
                color: "#5E3091",
                margin: "0 auto",
                backgroundColor: "#F7F7F7",
              }}
            >
              <div
                className="p-2 bg-white border-2 rounded-full w-18 mx-auto mb-3"
                style={{ marginTop: "-50px" }}
              >
                <IconButton
                  aria-label="bookmark Bahamas Islands"
                  // variant="plain"
                  // color="neutral"
                  size="lg"
                  sx={{ color: "#5E3091" }}
                >
                  {d.icon}
                </IconButton>
              </div>
              <Divider className="divide" />
              {/* <AspectRatio minHeight="180px" maxHeight="280px" sx={{ my: 2 }}>
                <img src={d.img} loading="lazy" alt="" />
              </AspectRatio> */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0",
                }}
              >
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
                  fontSize="lg"
                  sx={{ mb: 0.5, fontWeight: 800 }}
                >
                  {d.title}
                </Typography>
                {/* <IconButton
                  aria-label="bookmark Bahamas Islands"
                  // variant="plain"
                  color="neutral"
                  size="sm"
                  // sx={{
                  //   position: "absolute",
                  //   bottom: "0.5rem",
                  //   right: "0.5rem",
                  // }}
                >
                  {d.icon}
                </IconButton> */}
              </Box>
              <Divider className="divide" />
              <Typography
                className="py-4"
                level="p"
                fontSize="sm"
                sx={{ mb: 0.5, textAlign: "center", fontWeight: 500 }}
              >
                {d.des.slice(0, 69) + "..."}
              </Typography>
            </Card>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Services;
