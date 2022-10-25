import React from "react";
import it from "../../../Assets/images/it.png";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Slide, Zoom } from "react-reveal";
const About = () => {
  return (
    <div id="about" className="my-28">
      <div className="card lg:card-side bg-base-100 border lg:mx-40 mx-5">
        <figure>
          <Zoom>
            <img
              style={{ width: "500px", padding: "10px" }}
              src={it}
              alt="Album"
            />
          </Zoom>
        </figure>
        <div className="card-body">
          <div style={{ color: "#0071e8" }}>
            <Slide left>
              <h2 className="text-2xl font-bold py-3">About</h2>
            </Slide>
            <div
              style={{ background: "#0071e8" }}
              className="h-1 w-36 rounded"
            ></div>
          </div>
          <Slide right>
            <h2
              // style={{ fontFamily: "Fira sans" }}
              className="text-3xl lg:text-5xl font-bold"
            >
              Choose <span style={{ color: "#0071e8" }}>The Best</span> IT{" "}
              <br /> Services Here
            </h2>
            <p>
              In the year 2021,{" "}
              <span style={{ color: "#0071e8" }} className="font-bold">
                MEHRAF
              </span>{" "}
              officially began operations. We are a nationwide company that
              specializes in digital marketing, web design, and graphics. Our
              main Domain is Graphics Design, Video Editing, Web Design &
              Development, Digital Marketing. We are one of the industry
              pioneers thanks to our high level of customer satisfaction and
              repeat business. What are you waiting for, then? Let us discuss
              your ideas and our innovation in detail because catering your
              requirement and converting it into a final product is our main
              goal.
            </p>
          </Slide>
          <div className="divider"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <Zoom>
              <span className="p-5 border rounded-md">
                <div className="flex w-full">
                  <div className="grid h-20 flex-grow card place-items-center">
                    <CurrencyExchangeIcon
                      style={{ fontSize: "50px" }}
                      color="primary"
                    />
                  </div>
                  <div className="divider divider-horizontal"></div>
                  <div className="grid h-20 flex-grow card place-items-center">
                    <p className="font-bold">
                      Moneyback <br />
                      Guarantee <br />
                      <small style={{ color: "#1876D1" }}>(Conditional)</small>
                    </p>
                  </div>
                </div>
              </span>
            </Zoom>
            <Zoom>
              <span className="p-5 border rounded-md">
                <div className="flex w-full">
                  <div className="grid h-20 flex-grow card place-items-center">
                    <EngineeringIcon
                      style={{ fontSize: "50px" }}
                      color="primary"
                    />
                  </div>
                  <div className="divider divider-horizontal"></div>
                  <div className="grid h-20 flex-grow card place-items-center">
                    <p className="font-bold">
                      Technical <br />
                      Support
                    </p>
                  </div>
                </div>
              </span>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
