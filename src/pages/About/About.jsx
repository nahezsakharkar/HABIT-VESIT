/* eslint-disable react/no-unescaped-entities */
// import { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./style.css";

function About() {
  const showAnswer = (e) => {
    e.currentTarget.classList.toggle("active");
  };

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
      <div className="sidebar-deatils"></div>
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
      <div className="sec-faq">
        <div className="about-inner">
          <h2 data-aos="fade-up">Q&A</h2>
          <div className="items">
            <div onClick={showAnswer} data-aos="fade-up" className="qna-item">
              <div className="question">
                <h4>What is HABIT's primary mission and focus?</h4>
                <AddIcon className="plus" />
                <RemoveIcon className="minus" />
              </div>
              <div className="answer">
                <div className="answer-inner">
                  <p>
                    HABIT is dedicated to fostering innovation and
                    entrepreneurship. Our mission is to support startups and
                    entrepreneurs on their journey to success.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="qna-item" onClick={showAnswer}>
              <div className="question">
                <h4>
                  How can I apply for incubation at HABIT, and what are the
                  eligibility criteria?
                </h4>
                <AddIcon className="plus" />
                <RemoveIcon className="minus" />
              </div>
              <div className="answer">
                <div className="answer-inner">
                  <p>
                    You can apply for incubation at HABIT through our website,
                    and eligibility is open to both early-stage and established
                    startups with innovative ideas.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="qna-item" onClick={showAnswer}>
              <div className="question">
                <h4>
                  What resources and support does HABIT provide to incubated
                  startups?
                </h4>
                <AddIcon className="plus" />
                <RemoveIcon className="minus" />
              </div>
              <div className="answer">
                <div className="answer-inner">
                  <p>
                    HABIT offers a wide range of resources, including
                    mentorship, funding opportunities, workspace facilities,
                    legal guidance, and more, tailored to each startup's needs.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="qna-item" onClick={showAnswer}>
              <div className="question">
                <h4>
                  What is the typical duration of the incubation program at
                  HABIT, and what are the exit options for startups?
                </h4>
                <AddIcon className="plus" />
                <RemoveIcon className="minus" />
              </div>
              <div className="answer">
                <div className="answer-inner">
                  <p>
                    The duration varies, and startups can exit by scaling,
                    securing additional funding, forming strategic partnerships,
                    or other means.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="qna-item" onClick={showAnswer}>
              <div className="question">
                <h4>
                  How does HABIT collaborate with the local community and
                  educational institutions to promote entrepreneurship?
                </h4>
                <AddIcon className="plus" />
                <RemoveIcon className="minus" />
              </div>
              <div className="answer">
                <div className="answer-inner">
                  <p>
                    WHABIT actively engages with the local community, hosts
                    events, and workshops, and collaborates with educational
                    institutions and industry partners to create a thriving
                    ecosystem for startups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
