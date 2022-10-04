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
            <div className="p-5 border rounded-md hover-effect">
              <h2 className="font-bold">ICON</h2>
              <h3>{d.des}</h3>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
