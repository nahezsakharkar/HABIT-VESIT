import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-container-col">
          <div className="hero-img-circle"></div>
          <div className="hero-img-box">
            <div className="hero-img-box">
            <div className="hero-img-box-con">
              <img src="src\assets\images\HERO.png" alt="Hero Icon" />
            </div>
            </div>
           
          </div>
        </div>
        <div className="hero-container-col">
          <div className="hero-title">
            HABIT <br /> INCUBATION CENTRE
          </div>
          <div className="quote-box">
            <p className="quote">
              Nurturing ideas is akin to tending a delicate sapling, providing
              the care and nurturing necessary for their growth and blossoming.
              It involves the gentle cultivation of innovative concepts and
              ensuring they have the fertile ground they need to thrive
            </p>
          </div>
          <div className="explore-btn-box">
            <button class="glow-on-hover" type="button">
              Explore...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
