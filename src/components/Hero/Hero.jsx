import React from "react";
import "./Hero.css";

const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
    </div>
  );
};

export default Hero;
