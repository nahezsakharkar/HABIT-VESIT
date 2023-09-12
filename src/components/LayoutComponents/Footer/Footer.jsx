import React from "react";
import "./style.css"
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <section class="ft-main">
          <div class="ft-main-item">
            <h2 class="ft-title">About</h2>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          <div class="ft-main-item">
            <h2 class="ft-title">Resources</h2>
            <ul>
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">eBooks</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
            </ul>
          </div>

          <div class="ft-main-item">
            <h2 class="ft-title">Contact</h2>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
            </ul>
          </div>

          <div class="ft-main-item">
            <h2 class="ft-title">Stay Updated</h2>
            <p>Get free updates before others do!</p>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </section>
        <section class="ft-legal">
          <ul class="ft-legal-list">
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Footer;
