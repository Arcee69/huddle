import React from "react";
import Pinkbutton from "./Pinkbutton";

function Card() {
  return (
    <div className="">
      {/* For Laptop and Desktop */}
      <div
        className="position card shadow hidden-xs"
        style={{ width: "30rem", textAlign: "center" }}
      >
        <div className="card-body">
          <div className="card-title">
            <h4 className="font mt-1">Ready To Build Your Community?</h4>
          </div>
        </div>
        <div className="mx-4 mb-3">
          <Pinkbutton name="Get Started For Free" />
        </div>
      </div>
      {/* For Mobile */}
      <div className=" position card shadow d-sm-none" style={{ width: "98%" }}>
        <div className="card-body">
          <div className="card-title">
            <h4 className="font mt-1">Ready To Build Your Community?</h4>
          </div>
        </div>
        <div className="mx-4 mb-3">
          <Pinkbutton name="Get Started For Free" />
        </div>
      </div>
    </div>
  );
}

export default Card;
