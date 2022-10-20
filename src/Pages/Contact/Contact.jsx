import { Button } from "@mui/material";
import React from "react";
import contact from "../../Assets/images/contact3.png";

const Contact = () => {
  return (
    <div className="mx-10 border rounded-lg my-5 grid grid-cols-1 lg:grid-cols-2">
      <div className="rounded-lg">
        <img className="py-10" src={contact} alt="" />
      </div>
      <div className="flex flex-col m-2 lg:m-10" style={{ color: "#0071e8" }}>
        <h2 className="text-center font-bold text-2xl lg:text-4xl py-2">
          Let's talk with us
        </h2>
        <form className="bg-white">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full my-2"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered w-full my-2"
          />
          <input
            type="text"
            placeholder="Your Address"
            className="input input-bordered w-full my-2"
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            className="input input-bordered w-full my-2"
          />
          <textarea
            className="textarea textarea-bordered w-full h-40 my-2"
            placeholder="Your Message"
          ></textarea>
          <Button variant="contained" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
