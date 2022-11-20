import React from "react";

const GraphicDesign = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-5">Graphics Design</h1>
      <div>
        <div className="grid grid-cols-3 my-5">
          <div className="border p-5 w-96 rounded text-center">
            <h3 className="text-3xl font-bold">Logo Design</h3>
          </div>
          <div className="border p-5 w-96 rounded text-center">
            <h3 className="text-3xl font-bold">Banner Design</h3>
          </div>
          <div className="border p-5 w-96 rounded text-center">
            <h3 className="text-3xl font-bold">Poster Design</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
