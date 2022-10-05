import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
const Services = () => {
  return (
    <div className="services">
      {/* left services */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ad
          quaerat magni fuga dicta iste laborum distinctio modi deleniti illum
          <br />
          dignissimos beatae aliquam a blanditiis voluptatum, iusto aperiam,
          minus dolor!
        </spane>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
