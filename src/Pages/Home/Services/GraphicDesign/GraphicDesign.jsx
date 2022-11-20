import React from "react";
import GraphicsServices from "../../../../Components/ServiceCard/GraphicsServices";

const GraphicDesign = () => {
  const data = [
    { _id: 1, name: "Logo Design", startingPrice: "100" },
    { _id: 2, name: "Brand Style Guides", startingPrice: "100" },
    { _id: 3, name: "Fonts & Typography", startingPrice: "100" },
    { _id: 4, name: "Business Cards & Stationery", startingPrice: "100" },
    { _id: 5, name: "Graphics for Streamers", startingPrice: "100" },
    { _id: 6, name: "Twitch Store", startingPrice: "100" },
    { _id: 7, name: "Art & Illustration", startingPrice: "100" },
    { _id: 8, name: "Pattern Design", startingPrice: "100" },
    { _id: 9, name: "Portraits & Caricatures", startingPrice: "100" },
    { _id: 10, name: "Cartoons & Comics", startingPrice: "100" },
    { _id: 11, name: "Storyboards", startingPrice: "100" },
    { _id: 13, name: "Landing Page Design", startingPrice: "100" },
    { _id: 14, name: "Icon Design", startingPrice: "100" },
    { _id: 15, name: "Marketing Design", startingPrice: "100" },
    { _id: 16, name: "Social Media Design", startingPrice: "100" },
    { _id: 17, name: "Email Design", startingPrice: "100" },
    { _id: 18, name: "Web Banners", startingPrice: "100" },
    { _id: 19, name: "Packaging & Covers", startingPrice: "100" },
    { _id: 20, name: "Book Design", startingPrice: "100" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-5">Graphics Design</h1>
      <div className="grid grid-cols-3 gap-4 my-5 mx-10">
        {data.map((d) => (
          <GraphicsServices key={d._id} d={d} />
        ))}
      </div>
    </div>
  );
};

export default GraphicDesign;
