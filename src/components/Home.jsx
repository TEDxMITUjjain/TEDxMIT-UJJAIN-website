import React from "react";
import "./Styles/Home.css";
import Navbar from "./Navbar.jsx";
import home from "../assets/background3.jpg";
import About from "./About.jsx";
import Partners from "./Partners.jsx";
import Speakers from "./Speakers.jsx";
import Countdown from "./Utility/Countdown.jsx";

function Home() {
  return (
    <div className="root2">
      <Navbar />
      <div className="hero" id="hero">
        <img className="backgroundimgblur" alt="hero-img" src={home} />
      </div>
      <div className="hero-text">
        <h1>
          <span className="spanred">TEDx</span> MIT Ujjain
        </h1>
        <div className="countdiv">
          <Countdown /> {/* Corrected: Render the Countdown component */}
        </div>
      </div>
      <About />
      <Speakers />
      <Partners />
    </div>
  );
}

export default Home;
