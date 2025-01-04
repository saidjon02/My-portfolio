import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import right from "../../imgs/right.png";
import img from "../../imgs/myimg.jpg";
import img1 from "../../imgs/halcyon.avif";
import img2 from "../../imgs/img3.png";
import img3 from "../../imgs/hero 1 (1).png";
import img4 from "../../imgs/img4.png";
import gsap from "gsap";
import { Helmet } from "react-helmet-async";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Home() {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  let home = ".home";
  console.log(home);
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#t1", "#t2", "#t3", "#t4"], {
        duration: 0.7,
        opacity: 0,
        y: "-=50",
        delay: 1,
        stagger: 0.4,
      })
        .to("#intro-slider", {
          translateY: -3000,
          duration: 2.3,
          zIndex: 0,
          delay: 1,
        })

        .to("#opac", {
          zIndex: 0,
          duration: 0.5,
          opacity: 1,
        })
        .to(home, { opacity: 0, x: 200 });
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <div className="wrap">
      <Helmet>
        <title>Fozilov Saidjon.</title>
        <meta
          name="Dasturchi, Programmar, Saidjon, Fozilov, Saidjon Fozilov"
          content="Hello, my name is Saidjon, I am interested in programming. I have been in the programming industry since 2021."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div id="dfff" ref={comp}>
        <h2 className="app-title" id="intro-slider">
          <span id="t1">Welcome </span>
          <span id="t2"> to </span>
          <br /> <span id="t3"> Saidjon's </span>
          <span id="t4"> site</span>
        </h2>
      </div>
      <div id="opac">
        <div className="h100" id="home">
          <div className="home container">
            <h2
              className="home-title font t1"
              data-aos="fade-down"
              data-aos-duration="1500"
              id="hello"
            >
              Hi, my name is
            </h2>
            <h2
              className="home-subtitle t2"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              Fozilov Saidjon.
              <span className="opas">I create various websites</span>
            </h2>
            <p
              className="home-text t3"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              I'm a software engineer who specializes in building (and sometimes
              designing) awesome websites. I am currently focusing on creating
              human centric products available on
              <Link to={"https://www.apinline.com/"} target="_blanck">
                <span className="green"> APINLINE.</span>
              </Link>
            </p>
            <div
              className="data t4"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <Link to={"https://www.apinline.com/"} target="_blanck">
                <button className="green-btn home-btn">
                  Check out my course!
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="h100 t2"
          data-aos-duration="1500"
          data-aos="zoom-in"
          id="about"
        >
          <div className="about container-a">
            <div className="about-row">
              <div className="about-left">
                {" "}
                <h1 className="about-title">
                  <span className="green font">01. </span> About Me
                </h1>
                <p className="texts mt">
                  Hello there! My name is Saidjon, I like to create websites. My
                  interest in programming started in 2020. I am working in
                  visual studio code and now I am creating some amazing websites
                </p>
                <p className="texts mt">
                  Contact me and I will make you a big and beautiful website. It
                  needs <span className="green"> website information </span>,
                  <span className="green"> images </span> and
                  <span className="green"> website logo</span>
                </p>
                <p className="texts mt">
                  I recently joined Apinline. And I am working with that
                  company.
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
        </div>
        <div
          className="h100 t2"
          data-aos-duration="1500"
          data-aos="zoom-in-right"
          id="experience"
        >
          <div className="work container-w">
            <h1 className="about-title">
              <span className="green font">02. </span> Where I’ve Worked
            </h1>
            <div className="work-row">
              <div className="work-left">
                <h2
                  className={
                    toggle === 1
                      ? "work-left-title active-work active-work"
                      : "work-left-title"
                  }
                  onClick={() => toggleTab(1)}
                >
                  Apinline
                </h2>
                <h2
                  className={
                    toggle === 2
                      ? "work-left-title active-work"
                      : "work-left-title"
                  }
                  onClick={() => toggleTab(2)}
                >
                  Apple
                </h2>
                <h2
                  className={
                    toggle === 3
                      ? "work-left-title active-work"
                      : "work-left-title"
                  }
                  onClick={() => toggleTab(3)}
                >
                  Scout Studio
                </h2>
                <h2
                  className={
                    toggle === 4
                      ? "work-left-title active-work"
                      : "work-left-title"
                  }
                  onClick={() => toggleTab(4)}
                >
                  Starry
                </h2>
                <h2
                  className={
                    toggle === 5
                      ? "work-left-title active-work"
                      : "work-left-title"
                  }
                  onClick={() => toggleTab(5)}
                >
                  MullenLowe
                </h2>
              </div>
              <div className="work-right">
                <div
                  className={
                    toggle === 1 ? "post1 active-contant" : "post1 posts"
                  }
                >
                  <h2 className="work-right-title">
                    Lead Engineer <span className="green">@ Apinline</span>
                  </h2>
                  <p className="work-text">May 2018 - Present</p>
                  <p className="texts mb20">
                    <img src={right} className="imgs-right" alt="" />
                    Deliver high-quality, robust production code for a diverse
                    array of projects for clients including Harvard Business
                    School, Everytown for Gun Safety, Pratt Institute, Koala
                    Health, Vanderbilt University, The 19th News, and more
                  </p>
                  <p className="texts mb20">
                    <img src={right} className="imgs-right" alt="" />
                    Work alongside creative directors to lead the research,
                    development, and architecture of technical solutions to
                    fulfill business requirements
                  </p>
                </div>
                <div
                  className={
                    toggle === 2 ? "post1 active-contant" : "post1 posts"
                  }
                >
                  <h2 className="work-right-title">
                    UI Engineer Co-op <span className="green"> @ Apple</span>
                  </h2>
                  <p className="work-text">July - December 2017</p>
                  <p className="texts">
                    <img src={right} className="imgs-right" alt="" />
                    Developed and styled interactive web applications for Apple
                    Music using Ember and SCSS
                  </p>
                  <p className="texts">
                    <img src={right} className="imgs-right" alt="" />
                    Built and shipped the Apple Music Extension for Facebook
                    Messenger leveraging third-party and internal API
                    integrations
                  </p>
                  <p className="texts">
                    <img src={right} className="imgs-right" alt="" />
                    Architected and implemented the user interface of Apple
                    Music's embeddable web player widget for in-browser user
                    authorization and full song playback
                  </p>
                </div>
                <div
                  className={
                    toggle === 3 ? "post1 active-contant" : "post1 posts"
                  }
                >
                  <h2 className="work-right-title">
                    Developer
                    <span className="green"> @ Scout Studio</span>
                  </h2>
                  <p className="work-text">Spring 2016 & 2017</p>
                  <p className="texts">
                    <img src={right} className="imgs-right" alt="" />
                    Collaborated with other student designers and engineers on
                    pro-bono projects to create new brands, design systems, and
                    websites for organizations in the community
                  </p>
                  <p className="texts">
                    <img src={right} className="imgs-right" alt="" />
                    Built and delivered technical solutions according to
                    stakeholder business requirements
                  </p>
                </div>
                <div
                  className={
                    toggle === 4 ? "post1 active-contant" : "post1 posts"
                  }
                >
                  <h2 className="work-right-title">
                    Software Engineer Co-op
                    <span className="green"> @ Starry</span>
                  </h2>
                  <p className="work-text">July - December 2016</p>
                  <p className="texts">
                    <img src={right} className="imgs-right" alt="" />
                    Engineered and improved major features of Starry's
                    customer-facing Android web app using ES6, Handlebars,
                    Backbone, Marionette, and CSS
                  </p>
                  <p className="texts">
                    <img src={right} className="imgs-right" alt="" />
                    Proposed and implemented scalable solutions to issues
                    identified with cloud services and applications responsible
                    for communicating with the Starry Station internet router
                  </p>
                  <p className="texts">
                    <img src={right} className="imgs-right" alt="" />
                    Collaborated with designers and other developers to ensure
                    thoughtful and consistent user experiences across Starry’s
                    iOS and Android mobile apps
                  </p>
                </div>
                <div
                  className={
                    toggle === 5 ? "post1 active-contant" : "post1 posts"
                  }
                >
                  <h2 className="work-right-title">
                    Creative Technologist Co-op
                    <span className="green"> @ MullenLowe</span>
                  </h2>
                  <p className="work-text">July - December 2015</p>
                  <p className="texts">
                    <img src={right} className="imgs-right" alt="" />
                    Developed, maintained, and shipped production code for
                    client websites primarily using HTML, CSS, Sass, JavaScript,
                    and jQuery
                  </p>
                  <p className="texts">
                    <img src={right} className="imgs-right" alt="" />
                    Performed quality assurance tests on various sites to ensure
                    cross-browser compatibility and mobile responsiveness
                  </p>
                  <p className="texts">
                    <img src={right} className="imgs-right" alt="" />
                    Clients included JetBlue, Lovesac, U.S. Cellular, U.S.
                    Department of Defense, and more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h1000" id="work">
          <div className="built container">
            <h1
              className="about-title t2"
              data-aos-duration="1400"
              data-aos="fade-down"
            >
              <span className="green font">03. </span> Some Things I’ve Built
            </h1>
            <div className="b-row">
              <div
                className="b-left bg t3"
                data-aos="fade-right"
                data-aos-duration="1400"
              >
                <img src={img1} alt="" />
              </div>
              <div
                className="b-right t4"
                data-aos="fade-right"
                data-aos-duration="1400"
              >
                <h2 className="b-title">Featured Project</h2>
                <h2 className="b-subtitle">Halcyon Theme</h2>
                <div className="b-card">
                  <p className="b-card-text">
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                    iTerm, and more. Available on
                    <span className="green">
                      Visual Studio Marketplace, Control, Atom Package Manager,
                    </span>
                    Package and <span className="green"> npm.</span>
                  </p>
                </div>
                <div className="programs">
                  <p className="b-text">VS Code</p>
                  <p className="b-text">Sublime Text</p>
                </div>
                <div className="b-box-icon">
                  <i class="progra cursor bx bxl-github"></i>
                  <i class="progra cursor bx bx-link-external"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="built container">
            <div className="b-row">
              <div
                className="b-right ral t3"
                data-aos="fade-right"
                data-aos-duration="1400"
              >
                <h2 className="b-title">Featured Project</h2>
                <h2 className="b-subtitle">Spotify Profile</h2>
                <div className="b-card">
                  <p className="b-card-text">
                    A web app for visualizing personalized Spotify data. View
                    your top artists, top tracks, recently played tracks, and
                    detailed audio information about each track. Create and save
                    new playlists of recommended tracks based on your existing
                    playlists and more.
                  </p>
                </div>
                <div className="programs2">
                  <p className="b-text">React</p>
                  <p className="b-text">Styled Components</p>
                  <p className="b-text">Express</p>
                </div>
                <div className="b-box-icon2">
                  <i class="progra cursor bx bxl-github"></i>
                  <i class="progra cursor bx bx-link-external"></i>
                </div>
              </div>
              <div
                className="b-left bg t4"
                data-aos="fade-right"
                data-aos-duration="1400"
              >
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
          <div className="built eng container">
            <div className="b-row">
              <div
                className="b-left t3"
                data-aos="fade-right"
                data-aos-duration="1400"
              >
                <img src={img3} alt="" />
              </div>
              <div
                className="b-right t4"
                data-aos="fade-right"
                data-aos-duration="1400"
              >
                <h2 className="b-title">Featured Project</h2>
                <h2 className="b-subtitle">Build a Spotify Connected App</h2>
                <div className="b-card">
                  <p className="b-card-text">
                    Having struggled with understanding how the Spotify OAuth
                    flow works, I made the course I wish I could have had.
                    Unlike tutorials that only cover a few concepts and leave
                    you with half-baked GitHub repositories.{" "}
                    <span className="dn">
                      {" "}
                      This course covers everything from explaining the
                      principles of REST APIs to implementing Spotify's OAuth
                      flow and fetching API data in a React app. By the end of
                      the course, you’ll have an app deployed to the internet
                      you can add to your portfolio.{" "}
                    </span>
                  </p>
                </div>
                <div className="programs">
                  <p className="b-text">React</p>
                  <p className="b-text">Express</p>
                  <p className="b-text">Styled Components</p>
                </div>
                <div className="b-box-icon">
                  <i class="progra cursor bx bxl-github"></i>
                  <i class="progra cursor bx bx-link-external"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pro container">
          <h2
            className="pro-title tac fz35 t2"
            data-aos="fade-down"
            data-aos-duration="1400"
          >
            Other Noteworthy Projects
          </h2>
          <p
            className="tac green t3"
            data-aos="fade-down"
            data-aos-duration="1400"
          >
            view the archive
          </p>
          <div
            className="pro-row mt50 t4"
            data-aos="fade-down"
            data-aos-duration="1400"
          >
            <Link
              to={"https://saidjon02.netlify.app"}
              className="pro-link"
              target="_blanck"
            >
              <div className="pro-card">
                <div className="pro-card-row">
                  <img src={img4} className="bx-folder" alt="" />
                  <div className="pro-card-icons">
                    <i class="progra cursor bx bx-link-external"></i>
                  </div>
                </div>
                <h2 className="pro-card-title">This is my second portfolio</h2>
                <p className="pro-card-text">
                  The main goal of this project is to teach new students who are
                  just getting into web programming, what they will encounter
                  along the way and what devices they will need.
                </p>
                <div className="pro-card-row2">
                  <p className="pro-programs">React</p>
                  <p className="pro-programs">CSS</p>
                  <p className="pro-programs">JavaScript</p>
                </div>
              </div>
            </Link>
            <Link
              to={"https://saidjon-planets.netlify.app/"}
              target="_blanck"
              className="pro-link"
            >
              <div className="pro-card">
                <div className="pro-card-row">
                  <img src={img4} className="bx-folder" alt="" />
                  <div className="pro-card-icons">
                    <i class="progra cursor bx bx-link-external"></i>
                  </div>
                </div>
                <h2 className="pro-card-title">Planets</h2>
                <p className="pro-card-text">
                  The main goal of this project is to teach new students who are
                  just getting into web programming, what they will encounter
                  along the way and what devices they will need.
                </p>
                <div className="pro-card-row2">
                  <p className="pro-programs">React</p>
                  <p className="pro-programs">Css</p>
                  <p className="pro-programs">JavaScript</p>
                </div>
              </div>
            </Link>
            <Link
              to={"https://unlock-2010.netlify.app/"}
              className="pro-link"
              target="_blanck"
            >
              <div className="pro-card">
                <div className="pro-card-row">
                  <img src={img4} className="bx-folder" alt="" />
                  <div className="pro-card-icons">
                    <i class="progra cursor bx bx-link-external"></i>
                  </div>
                </div>
                <h2 className="pro-card-title">Excursy</h2>
                <p className="pro-card-text">
                  The main goal of this project is to teach new students who are
                  just getting into web programming, what they will encounter
                  along the way and what devices they will need.
                </p>
                <div className="pro-card-row2">
                  <p className="pro-programs">HTML</p>
                  <p className="pro-programs">CSS</p>
                  <p className="pro-programs">JavaScript</p>
                </div>
              </div>
            </Link>
            <Link
              to={"https://yakkasaroy.netlify.app/"}
              className="pro-link"
              target="_blanck"
            >
              <div className="pro-card">
                <div className="pro-card-row">
                  <img src={img4} className="bx-folder" alt="" />
                  <div className="pro-card-icons">
                    <i class="progra cursor bx bx-link-external"></i>
                  </div>
                </div>
                <h2 className="pro-card-title">Yakkasaroy</h2>
                <p className="pro-card-text">
                  The main goal of this project is to teach new students who are
                  just getting into web programming, what they will encounter
                  along the way and what devices they will need.
                </p>
                <div className="pro-card-row2">
                  <p className="pro-programs">React</p>
                  <p className="pro-programs">CSS</p>
                  <p className="pro-programs">JavaScript</p>
                </div>
              </div>
            </Link>
            <Link
              to={"https://saidjon.netlify.app/"}
              className="pro-link"
              target="_blanck"
            >
              <div className="pro-card">
                <div className="pro-card-row">
                  <img src={img4} className="bx-folder" alt="" />
                  <div className="pro-card-icons">
                    <i class="progra cursor bx bx-link-external"></i>
                  </div>
                </div>
                <h2 className="pro-card-title">Games</h2>
                <p className="pro-card-text">
                  The main goal of this project is to teach new students who are
                  just getting into web programming, what they will encounter
                  along the way and what devices they will need.
                </p>
                <div className="pro-card-row2">
                  <p className="pro-programs">HTML</p>
                  <p className="pro-programs">CSS</p>
                  <p className="pro-programs">JavaScript</p>
                </div>
              </div>
            </Link>
            <Link
              to={"https://fasl-market.netlify.app"}
              className="pro-link"
              target="_blanck"
            >
              <div className="pro-card">
                <div className="pro-card-row">
                  <img src={img4} className="bx-folder" alt="" />
                  <div className="pro-card-icons">
                    <i class="progra cursor bx bx-link-external"></i>
                  </div>
                </div>
                <h2 className="pro-card-title">Fasl Market</h2>
                <p className="pro-card-text">
                  The main goal of this project is to teach new students who are
                  just getting into web programming, what they will encounter
                  along the way and what devices they will need.
                </p>
                <div className="pro-card-row2">
                  <p className="pro-programs">React</p>
                  <p className="pro-programs">CSS</p>
                  <p className="pro-programs">JavaScript</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="contact container" id="contact">
          <h2
            className="con-title green tac t1"
            data-aos="fade-down"
            data-aos-duration="1400"
          >
            <span>04.</span> What’s Next?
          </h2>
          <h2
            className="con-subtitle t2"
            data-aos="fade-down"
            data-aos-duration="1400"
          >
            Get In Touch
          </h2>
          <p
            className="con-text tac texts t3"
            data-aos="fade-down"
            data-aos-duration="1400"
          >
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <div
            className="data t4"
            data-aos="fade-down"
            data-aos-duration="1400"
          >
            <Link to={"contact"}>
              <button className=" tac mt50 green-btn">Say Hello</button>
            </Link>
          </div>
        </div>

        <div className="footer container">
          <p className="foot-text tac mb30 texts font-mono">
            Designed & Built by Fozilov Saidjon
          </p>
          <p className="foot-text tac mb30 texts font-mono">
            If you need site my phone number is: <Link to={"tel:+998948377008"} className="green">+998 94 837 7008</Link> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
