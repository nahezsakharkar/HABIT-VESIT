/* eslint-disable react/no-unescaped-entities */
import "./style.css";

function About() {
  return (
    <main className="about">
      <div className="header-spacer"></div>
      <div className="coverimage" data-aos="zoom-in">
        <img src="src/assets/images/Team.jpg" alt="Team Image" />
      </div>
      <div className="sec-title">
        <h1>About HABIT</h1>
        <h2>
          At HABIT - VESIT Incubation Cell, we believe that nurturing ideas is
          akin to tending a delicate sapling, providing the care and nurturing
          necessary for their growth and blossoming. Our mission is to foster
          innovation by providing the fertile ground that innovative concepts
          need to thrive.
        </h2>
      </div>
      <div className="sidebar-deatils">
        
      </div>
      <div className="sec-vm">
        <div className="about-supporting-text">
          <div className="triangle"></div>
          <div className="items">
            <div className="item">
              <div className="heading-container">
                <div data-aos="fade-right" className="heading">
                  <h3>Our Vision.</h3>
                </div>
              </div>
              <div data-aos="fade-left" className="description">
                <p>
                  We envision a world where every idea, no matter how small or
                  big, has the opportunity to flourish and make a positive
                  impact on society. We strive to be the driving force behind
                  this vision by nurturing and supporting budding entrepreneurs,
                  startups, and innovators.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="heading-container">
                <div data-aos="fade-right" className="heading">
                  <h3>Our Mission.</h3>
                </div>
              </div>
              <div data-aos="fade-left" className="description">
                <p>
                  HABIT, an acronym for "Harnessing Aspirations, Building
                  Innovations, and Transforming," represents our commitment to
                  empowering individuals and teams with the tools, resources,
                  and guidance they need to transform their ideas into
                  successful ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
