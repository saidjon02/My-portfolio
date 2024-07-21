import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";
function Header() {
  const [pop, setPop] = useState(false);
  const fire = () => {
    setPop(!pop);
  };
  return (
    <div className="header container-h font">
      <img className="logo" src={logo} alt="" />
      <nav className={pop ? "nav nav-active" : "nav"}>
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
    </div>
  );
}

export default Header;
