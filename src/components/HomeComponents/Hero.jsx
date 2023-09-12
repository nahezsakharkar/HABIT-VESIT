import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-container-col">
        <div className="hero-img-container">
          <div className="bulb">
            <img src="src\assets\images\HERO.png" alt="Hero Icon" />
          </div>
          {/* <div className="wavedot">
            <img src="src\assets\images\polkadots.png" alt="Hero Icon" />
          </div> */}
          <div className="hero-img-circle"></div>
        </div>
      </div>
      <div className="hero-container-col right">
        <div className="hero-title">
          <h3>HABIT</h3>
          <h5>INCUBATION CENTRE</h5>
        </div>
        <div className="quote-box">
          <p className="quote">
            Nurturing ideas is akin to tending a delicate sapling, providing the
            care and nurturing necessary for their growth and blossoming. It
            involves the gentle cultivation of innovative concepts and ensuring
            they have the fertile ground they need to thrive
          </p>
        </div>
        <div className="explore-btn-box">
          <button className="glow-on-hover" type="button">
            Explore...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
