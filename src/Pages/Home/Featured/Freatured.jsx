import React from "react";

const Freatured = () => {
  const data = [
    {
      _id: 1,
      title: "Graphics Design",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/2j241Vs/graphics-design.jpg",
    },
    {
      _id: 2,
      title: "Web Design",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      img: "https://i.ibb.co/qFt2GgX/web-design.jpg",
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
      img: "https://i.ibb.co/fMznmGJ/digital-marketing.jpg",
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
      <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-5 mx-28">
        {data.map((d) => (
          <div className="flex justify-center">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${d.img})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
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
