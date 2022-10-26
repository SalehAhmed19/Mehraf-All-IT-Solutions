import { Box, Card, IconButton, Typography } from "@mui/joy";
import { Divider } from "@mui/material";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <Card
      className="card-hover glass"
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
          {service.icon}
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
        <Typography level="h2" fontSize="lg" sx={{ mb: 0.5, fontWeight: 800 }}>
          {service.title}
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
        {service.des.slice(0, 69) + "..."}
      </Typography>
    </Card>
  );
};

export default ServiceCard;
