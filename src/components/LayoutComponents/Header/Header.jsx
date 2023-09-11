import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <div>
      <>
        <NavLink to="/">Home</NavLink> | <NavLink to="/About">About</NavLink> |
        <NavLink to="/Programs"> Programs</NavLink> |
        <NavLink to="/Partners"> Partners</NavLink> |
        <NavLink to="/Portfolio" >Portfolio</NavLink> |
        <NavLink to="/Contact"> Contact</NavLink> |
      </>
    </div>
  );
}
