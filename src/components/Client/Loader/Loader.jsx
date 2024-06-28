import React from "react";

const Loader = ({ marginLeft, colorButton, size = 2.25, variant }) => {
  console.log(marginLeft);
  return (
    <span
      style={
        marginLeft !== undefined ? { marginLeft: marginLeft + "vh", "--loader-size": size + "vh" } : { "--loader-size": size + "vh" }
      }
      className={`loader ${colorButton !== undefined ? (colorButton === "black" ? "loader-black" : null) : null}  ${
        variant === "default" ? "default" : ""
      }`}
    ></span>
  );
};

export default Loader;
