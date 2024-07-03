import React from "react";
import { Link } from "react-router-dom";
import right from "../../imgs/right.png";
import img from "../../imgs/aImg.png";

function Home() {
  return (
    <div className="wrap">
      <div className="home container">
        <h2 className="home-title font">Hi, my name is</h2>
        <h2 className="home-subtitle">
          Fozilov Saidjon.
          <span className="opas">I build things for the web.</span>
        </h2>
        <p className="home-text">
          I'm a software engineer who specializes in building (and sometimes
          designing) awesome websites. I am currently focusing on creating human
          centric products available on
          <Link to={"https://www.apinline.com/"} target="_blanck">
            <span className="green"> APINLINE.</span>
          </Link>
        </p>
        <Link to={"https://www.apinline.com/"} target="_blanck">
          <button className="green-btn home-btn">Check out my course!</button>
        </Link>
      </div>
      <div className="about container-a">
        <h1 className="about-title">
          <span className="green font">01. </span> About Me
        </h1>
        <div className="about-row">
          <div className="about-left">
            <p className="texts mt">
              Hello there! My name is Saidjon, I like to create websites. My
              interest in programming started in 2020. I am working in visual
              studio code and now I am creating some amazing websites
            </p>
            <p className="texts mt">
              Contact me and I will make you a big and beautiful website. It
              needs <span className="green">website information</span>,{" "}
              <span className="green">images</span> and{" "}
              <span className="green">website logo</span>
            </p>
            <p className="texts mt">
              I recently joined Apinline. And I am working with that company.
            </p>
            <p className="texts mt">Programs I know</p>
            <div className="prog-row">
              <p className="font prog-text">
                <img src={right} alt="" />
                HTML
              </p>
              <p className="font prog-text">
                <img src={right} alt="" />
                CSS
              </p>
              <p className="font prog-text">
                <img src={right} alt="" />
                Bootstrap
              </p>
              <p className="font prog-text">
                <img src={right} alt="" />
                JavaScript
              </p>
              <p className="font prog-text">
                <img src={right} alt="" />
                REACT JS
              </p>
              <p className="font prog-text">
                <img src={right} alt="" />
                SCRATCH
              </p>
            </div>
          </div>
          <div className="about-right">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="work container-w">
        <h1 className="about-title">
          <span className="green font">02. </span> Where I’ve Worked
        </h1>
        <div className="work-row">
          <div className="work-left"></div>
          <div className="work-right"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
