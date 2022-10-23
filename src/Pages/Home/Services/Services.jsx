import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { CardCover } from "@mui/joy";
import graphicDesign from "../../../Assets/images/graphicdesign.png"
import webDevelopment from "../../../Assets/images/webdevelopment.png";
import digitalMarketing from "../../../Assets/images/digitalmarketing.png";
import videoEditing from "../../../Assets/images/videoEditing.png";
import { Flip } from "react-reveal";

const Services = () => {
  const data = [
    {
      _id: 1,
      title: "Graphics Design",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: graphicDesign,
      // icon: <PaletteIcon style={{ fontSize: "80px" }} />,
      route: "/graphic-design",
    },
    {
      _id: 2,
      title: "Web Development",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: webDevelopment,
      // icon: <WebIcon style={{ fontSize: "80px" }} />,
      route: "/web-development",
    },
    {
      _id: 3,
      title: "Video & Animation",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: videoEditing,
      // icon: <AnimationIcon style={{ fontSize: "80px" }} />,
      route: "/video-animation",
    },
    {
      _id: 4,
      title: "Digital Marketing",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: digitalMarketing,
      // icon: <QueryStatsIcon style={{ fontSize: "80px" }} />,
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-10 mx-5 lg:mx-40">
        {data.map((d) => (
          <Flip>
            <Card
              sx={{
                bgcolor: "initial",
                boxShadow: "none",
                "--Card-padding": "0px",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <AspectRatio ratio="4/3">
                  <figure>
                    <img src={d.img} alt="" />
                  </figure>
                </AspectRatio>
                <CardCover
                  className="gradient-cover"
                  sx={{
                    "&:hover, &:focus-within": {
                      opacity: 1,
                    },
                    opacity: 0,
                    transition: "0.1s ease-in",
                    background:
                      "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                  }}
                >
                  {/* The first box acts as a container that inherits style from the CardCover */}
                  <Box>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1.5,
                        flexGrow: 1,
                        alignSelf: "flex-end",
                      }}
                    >
                      {/* <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                    <Link
                      href="#dribbble-shot"
                      overlay
                      underline="none"
                      sx={{
                        color: "#fff",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        display: "block",
                      }}
                    >
                      {d.title}
                    </Link>
                  </Typography> */}
                    </Box>
                  </Box>
                </CardCover>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  mt: 1.5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                  {d.title}
                </Typography>
              </Box>
            </Card>
          </Flip>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Services;
