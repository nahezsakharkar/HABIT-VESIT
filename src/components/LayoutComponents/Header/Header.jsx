import { NavLink } from "react-router-dom";
import "./style.css";
export default function Header() {
  return (
      <div class="page-wrapper">
        <div class="nav-wrapper">
          <nav class="navbar">
            <img
              src="src\assets\images\logos\logo.png"
              alt="Company Logo"
            />
            <div class="menu-toggle" id="mobile-menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <ul class="nav no-search">
              <li class="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/About">About</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Programs">Programs</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Partners">Partners</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Portfolio">Portfolio</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Contact"> Contact</NavLink>
              </li>
              <i class="fas fa-search" id="search-icon"></i>
            </ul>
          </nav>
        </div>
      </div>
  );
}
