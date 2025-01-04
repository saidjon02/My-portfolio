import React, { useEffect } from 'react';
import './App.css';
import 'boxicons';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { Link } from 'react-router-dom';
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>

      <div className="container-h">
        <div className="icons-left t5" data-aos="fade-right" data-aos-duration="1500">
          <i class="bx bxl-github"></i>
          <i class="bx bxl-instagram"></i>
          <i class="bx bxl-telegram"></i>
          <div className="arrow"></div>
        </div>
        <div className="icons-right t6" data-aos="fade-right" data-aos-duration="1500">
          <a href="tel: +998948377008">
            <p className="arrow-text">+998 94 837 7008</p>
          </a>
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
