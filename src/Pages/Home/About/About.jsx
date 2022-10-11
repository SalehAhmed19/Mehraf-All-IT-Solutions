import React from "react";
import ladies from "../../../Assets/images/woman.jpg";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EngineeringIcon from "@mui/icons-material/Engineering";
const About = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 border lg:mx-40 mx-5">
        <figure>
          <img src={ladies} alt="Album" />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="text-2xl font-bold py-3">About</h2>
            <div
              style={{ background: "#0071e8" }}
              className="h-1 w-36 rounded"
            ></div>
          </div>
          <h2
            style={{ fontFamily: "Fira sans" }}
            className="text-5xl font-bold"
          >
            Choose <span style={{ color: "#0071e8" }}>The Best</span> IT <br />{" "}
            Service Company
          </h2>
          <p>
            An IT firm or MSP who keeps your IT running smoothly at all times is
            like a plumber who fixes your pipes; that’s what they are supposed
            to do. Many IT firms struggle.
          </p>
          <div className="divider"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
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
                    Guarantee
                  </p>
                </div>
              </div>
            </span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
