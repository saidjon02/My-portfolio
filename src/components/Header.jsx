import React from "react";
import logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header container-h font">
      <div className="head-left">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="head-right">
        <p className="head-link">
          <span className="green">01. </span>About
        </p>
        <p className="head-link">
          <span className="green">02. </span>Experience
        </p>
        <p className="head-link">
          <span className="green">03. </span>Work
        </p>
        <p className="head-link">
          <span className="green">04. </span>Contact
        </p>
        <button className="green-btn">Resume</button>
      </div>
    </div>
  );
}

export default Header;
