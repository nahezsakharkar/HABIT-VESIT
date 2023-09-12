import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <section className="ft-main">
          <div className="ft-main-item">
            <h2 className="ft-title">About</h2>
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

          <div className="ft-main-item">
            <h2 className="ft-title">Resources</h2>
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

          <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
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

          <div className="ft-main-item">
            <h2 className="ft-title">Stay Updated</h2>
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
        <section className="fineprint">
          <div className="label">The Fineprint</div>
          <div className="copy">
            © HABIT - VESIT Incubation 2023
            <span className="divider"></span>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="divider"></span>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
