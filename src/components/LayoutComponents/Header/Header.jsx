import { NavLink } from "react-router-dom";
import "./style.css";

import { useState, useEffect } from "react";

export default function Header() {
  const [isNotAtTop, setIsNotAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect if the page is not at the top
      if (window.scrollY > 0) {
        setIsNotAtTop(true);
      } else {
        setIsNotAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className={isNotAtTop ? "transparent" : ""}>
      <div className="main">
        <div>
          <NavLink to="/">
            <img src="src\assets\images\logos\logo.png" alt="VESIT Logo" />
          </NavLink>
        </div>
        <div>
          <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About Us</NavLink>
            <NavLink to="/Programs">Programs</NavLink>
            <NavLink to="/Partners">Partners</NavLink>
            <NavLink to="/Portfolio">Portfolio</NavLink>
            <NavLink to="/Contact">Connect with us</NavLink>
            <a
              href="https://vesit.ves.ac.in/"
              style={{ fontFamily: "Lucida Handwriting" }}
            >
              -- VESIT
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
