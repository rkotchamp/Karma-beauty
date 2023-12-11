import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Footer.css";

const openHours = [
  "Monday: 9:00am - 7:00pm",
  "Tuesday: 9:00am - 3:00pm",
  "Wednesday: 9:00am - 4:00pm",
  "Thursday: 9:30am - 7:30pm",
  "Friday: 9:00am - 5:00pm",
  "Alternate Saturday: 9:00am - 5:00pm",
];
function Footer() {
  return (
    <div className="footer-container">
      <div className="navigation">
        <h5 className="footer-headers">Navigation</h5>
        <ul className="footer-unordered">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/service">
            <li>Service</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="opening-hours">
        <h5 className="footer-headers">Open Hours</h5>
        <div>
          {openHours.map((item, i) => {
            return (
              <p key={i} className="hours">
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <div className="book-now">
        <h5 className="footer-headers">Book Now</h5>
        <div className="book-text">
          <p>
            Ready to love your skin again? Book in a consultation to discuss
            your concerns and the best treatments available.
          </p>
          <Link to="/contact">
            <button className="footer-btn">Contact Karma</button>
          </Link>
          <div className="social-media">
            <AiFillInstagram />
            <FaFacebook />
            <FaTiktok />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
