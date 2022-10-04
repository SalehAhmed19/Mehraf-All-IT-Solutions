import React from "react";

const Freatured = () => {
  const data = [
    {
      _id: 1,
      title: "Graphics Design",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/P5YTP9Z/graphics-design.jpg",
    },
    {
      _id: 2,
      title: "Web Design",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/nDMczZS/web-design.jpg",
    },
    {
      _id: 3,
      title: "Web Development",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/54Hgpxk/web-development.jpg",
    },
    {
      _id: 4,
      title: "Digital Marketing",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/nMg50x1/digital-marketing.jpg",
    },
  ];
  return (
    <div className="my-20">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center py-5">
          Featured Services
        </h2>
        <div className="h-1 bg-gray-700 w-36 rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
        {data.map((d) => (
          <div>
            <div className="card w-72 h-72 bg-base-100 shadow-xl image-full mx-5">
              <figure>
                <img src={d.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">{d.title}</h2>
                <p>{d.des}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary bg-white w-full">
                    Explore more
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freatured;
