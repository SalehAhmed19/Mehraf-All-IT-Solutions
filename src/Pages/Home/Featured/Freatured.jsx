import React from "react";

const Freatured = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center py-2">
          Featured Services
        </h2>
        <div className="h-1 bg-gray-700 w-36 rounded"></div>
      </div>
      <div>
        <div className="card w-72 bg-base-100 shadow-xl mx-5">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freatured;
