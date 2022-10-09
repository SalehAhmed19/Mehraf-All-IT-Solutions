import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  const data = [
    {
      _id: 1,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo praesentium esse, recusandae ducimus hic enim, necessitatibus, itaque voluptate odio obcaecati deleniti eaque! Culpa delectus mollitia fugit nostrum quam aliquid.",
    },
    {
      _id: 2,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo praesentium esse, recusandae ducimus hic enim, necessitatibus, itaque voluptate odio obcaecati deleniti eaque! Culpa delectus mollitia fugit nostrum quam aliquid.",
    },
    {
      _id: 3,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo praesentium esse, recusandae ducimus hic enim, necessitatibus, itaque voluptate odio obcaecati deleniti eaque! Culpa delectus mollitia fugit nostrum quam aliquid.",
    },
    {
      _id: 4,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo praesentium esse, recusandae ducimus hic enim, necessitatibus, itaque voluptate odio obcaecati deleniti eaque! Culpa delectus mollitia fugit nostrum quam aliquid.",
    },
    {
      _id: 5,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo praesentium esse, recusandae ducimus hic enim, necessitatibus, itaque voluptate odio obcaecati deleniti eaque! Culpa delectus mollitia fugit nostrum quam aliquid.",
    },
    {
      _id: 6,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo praesentium esse, recusandae ducimus hic enim, necessitatibus, itaque voluptate odio obcaecati deleniti eaque! Culpa delectus mollitia fugit nostrum quam aliquid.",
    },
  ];
  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-center py-10">WHY US?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-10">
        {data.map((d) => (
          <>
            <Card sx={{ maxWidth: 345 }}>
              {/* <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Icon
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {d.des}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
