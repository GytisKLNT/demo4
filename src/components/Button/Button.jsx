import React from "react";
import "./Button.css";

const Button = ({ type, color, children, handleClick }) => {
  const bold = {
    background: "rgb(0, 0, 0)",
    color: "rgb(255, 255, 255)",
  };
  const outline = {
    color: "rgb(0, 0, 0)",
    background: "rgb(255, 255, 255)",
  };

  return (
    <button
      onClick={handleClick}
      style={color === "bold" ? bold : outline}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
