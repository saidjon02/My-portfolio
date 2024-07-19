import React from "react";
import logo from "../../imgs/logo.png";
import "boxicons";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header container-h font">
      <img className="logo" src={logo} alt="" />
      <nav className="nav">
        <div className="nav2">
          <ul>
            <li>
              <Link className="head-link">
                {" "}
                <span className="green">01. </span>About
              </Link>
            </li>
            <li>
              <Link className="head-link">
                <span className="green">02. </span>Experience
              </Link>
            </li>
            <li>
              <Link className="head-link">
                <span className="green">03. </span>Work
              </Link>
            </li>
            <li>
              <Link className="head-link">
                <span className="green">04. </span>Contact
              </Link>
            </li>
            <li>
              <Link className="head-link"></Link>
            </li>
          </ul>
          <button className="green-btn">Resume</button>
        </div>
      </nav>
      <box-icon name="menu" size={"md"} color="white"></box-icon>
    </div>
  );
}

export default Header;
