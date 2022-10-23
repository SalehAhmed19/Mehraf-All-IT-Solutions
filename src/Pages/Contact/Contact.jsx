import { Button } from "@mui/material";
import React, { useRef } from "react";
import contact from "../../Assets/images/contact3.png";
import emailjs from "@emailjs/browser";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Contact = () => {
  const [user] = useAuthState(auth);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.value = "";

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEYS
      )
      .then(
        (result) => {
          e.target.reset();
          toast.success("Email sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mx-10 border rounded-lg my-5 grid grid-cols-1 lg:grid-cols-2">
      <div className="rounded-lg flex items-center">
        <img
          className="my-10 px-8 lg:mx-20"
          style={{ width: "600px" }}
          src={contact}
          alt=""
        />
      </div>
      <div className="flex flex-col m-2 lg:m-10">
        <h2
          style={{ color: "#0071e8" }}
          className="text-center font-bold text-2xl lg:text-4xl py-2"
        >
          Let's talk with us
        </h2>
        <form ref={form} onSubmit={sendEmail} className="bg-white">
          <input
            required
            name="user_name"
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full my-2"
          />
          <input
            required
            name="user_email"
            value={user?.email}
            type="text"
            placeholder="Your Email"
            className="input input-bordered w-full my-2"
          />
          <input
            required
            name="user_address"
            type="text"
            placeholder="Your Address"
            className="input input-bordered w-full my-2"
          />
          <input
            required
            name="user_phone"
            type="text"
            placeholder="Your Phone Number"
            className="input input-bordered w-full my-2"
          />
          <textarea
            required
            name="message"
            className="textarea textarea-bordered w-full h-40 my-2"
            placeholder="Your Message"
          ></textarea>
          <Button type="submit" variant="contained" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
