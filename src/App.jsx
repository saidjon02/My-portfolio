import React from "react";
import "./App.css";
import "boxicons";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <div className="container-h">
        <div className="icons-left">
          <i class="bx bxl-github"></i>
          <i class="bx bxl-instagram"></i>
          <i class="bx bxl-telegram"></i>
          <div className="arrow"></div>
        </div>
        <div className="icons-right">
          <p className="arrow-text">saidjon01.netlify.app</p>
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
