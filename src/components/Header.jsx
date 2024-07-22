import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import "boxicons";
import { Link } from "react-router-dom";
function Header() {
  const [pop, setPop] = useState(false);
  const fire = () => {
    setPop(!pop);
  };
  return (
    <div className="header container-h font">
      <a href="#home">
        <img className="logo" src={logo} alt="" />
      </a>
      <nav className={pop ? "nav nav-active" : "nav"}>
        <nav className="nav">
          <div className="nav2">
            <ul>
              <li>
                <a href="#about" className="head-link">
                  <span className="green">01. </span>About
                </a>
              </li>
              <li>
                <a href="#experience" className="head-link">
                  <span className="green">02. </span>Experience
                </a>
              </li>
              <li>
                <a href="#work" className="head-link">
                  <span className="green">03. </span>Work
                </a>
              </li>
              <li>
                <a href="#contact" className="head-link">
                  <span className="green">04. </span>Contact
                </a>
              </li>
              <li>
                <a href="#" className="head-link"></a>
              </li>
            </ul>
            <button className="green-btn">Resume</button>
          </div>
          <box-icon
            name="x"
            className="hello"
            size={"md"}
            color="white"
            onClick={fire}
          ></box-icon>
        </nav>
        <box-icon
          name="menu"
          size={"md"}
          onClick={() => setPop(!pop)}
          color="white"
        ></box-icon>
      </nav>
      <box-icon name="menu" size={"md"} color="white"></box-icon>
    </div>
  );
}

export default Header;
