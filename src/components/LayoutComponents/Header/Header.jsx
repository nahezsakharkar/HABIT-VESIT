import { NavLink, useLocation } from "react-router-dom";
import "./style.css";

import { useState, useEffect } from "react";

export default function Header() {
  const [isNotAtTop, setIsNotAtTop] = useState(false);
  const location = useLocation();
  console.log(location.pathname == "/");

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
    <header id="header">
      <div
        className={
          location.pathname == "/"
            ? isNotAtTop
              ? "main notransparent"
              : "main"
            : isNotAtTop
            ? "main notransparentnohome"
            : "main"
        }
      >
        <div>
          <NavLink to="/">
            <img src="/assets/images/logos/logo.png" alt="VESIT Logo" />
          </NavLink>
        </div>
        <div>
          <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About Us</NavLink>
            <NavLink to="/Programs">Programs</NavLink>
            <NavLink to="/Partners">Partners</NavLink>
            <NavLink to="/Portfolio">Portfolio</NavLink>
            <NavLink to="/Contact">Connect</NavLink>
            <a
              href="https://vesit.ves.ac.in/"
              style={{ fontSize: "3rem", fontFamily: "Tangerine, cursive, Lucida Handwriting, Kunstler Script, Edwardian Script, Century Gothic" }}
            >
              -- Vesit
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
