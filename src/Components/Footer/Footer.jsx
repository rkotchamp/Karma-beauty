import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Footer.css";

const openHours = [
  "Luni: 6:00 - 18:00",
  "Marți: 6:00 - 18:00 ",
  "Miercuri: 6:00 - 18:00",
  "Joi: 6:30 - 18:30 ",
  "Vineri: 6:00 - 17:00",
  "Sâmbătă Alternativă: 9:00 - 17:00",
];
function Footer() {
  return (
    <div className="footer-container">
      <div className="navigation">
        <h5 className="footer-headers">Navigație</h5>
        <ul className="footer-unordered">
          <Link to="/">
            <li>Acasă</li>
          </Link>
          <Link to="/service">
            <li>Servicii</li>
          </Link>
          <Link to="/about">
            <li>Despre</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="opening-hours">
        <h5 className="footer-headers">Orar de Funcționare</h5>
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
        <h5 className="footer-headers">Programeaz-te acum</h5>
        <div className="book-text">
          <p>Conectează-te cu noi.</p>
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
