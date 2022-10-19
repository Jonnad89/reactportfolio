import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from '../Services/Resume.pdf'
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
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
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
        {/* Second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card 
          emoji={Glasses}
          heading={"Developer"}
          detail={"Html, Css, JavaScript, React, NodeJS"}
          />
        </div>
        {/* 3rd */}
        <div style={{top:"19rem", left:"12rem"}}>
        <Card  
        emoji={Humble}
        heading={"UI/UX"}
        detail={"Lorem ispum dummy text are usually use in section where"}
        />
        </div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  );
};

export default Services;
