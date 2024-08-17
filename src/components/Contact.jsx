import React from "react";
import { Helmet } from "react-helmet-async";
function Contact() {
  return (
    <div className="Contact container">
      <Helmet>
        <title>Saidjon / Contact</title>
        <meta
          name="Dasturchi, Programmar, Saidjon, Fozilov, Saidjon Fozilov"
          content="Hello, my name is Saidjon, I am interested in programming. I have been in the programming industry since 2021."
        />
        <link rel="canonical" href="contact" />
      </Helmet>
      <h2 className="contact-title tac fz45 mb50 mt20">Contact me</h2>
      <div className="con-row">
        <div className="inp-row">
          <input
            type="text"
            placeholder="Your name"
            name=""
            id=""
            className="con-inp"
          />
          <input
            type="text"
            placeholder="Your surname"
            name=""
            id=""
            className="con-inp"
          />
        </div>
        <input
          type="email"
          placeholder="Your email"
          name=""
          id=""
          className="con-inp"
        />
        <textarea name="" className="con-inp" placeholder="Message" id=""></textarea>
        <button className="send">Send</button>
      </div>
    </div>
  );
}

export default Contact;
