import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logoAvatar from "../../assets/eva.png";
import { useContext } from "react";
import ShowNavContext from "../../context/ShowNav";

import "./NavBar.css";

function NavBar() {
  const { showNavBar, setShowNavBar } = useContext(ShowNavContext);

  const handleShowNav = () => {
    setShowNavBar(true);
  };
  const handleUnshowNav = () => {
    setShowNavBar(false);
  };
  return (
    <div>
      <div className="navBar">
        <img src={logoAvatar} alt="karma Logo" className="imageLogo" />

        <nav className={showNavBar ? "nav" : "inactive"}>
          <ul className="nav__links">
            <Link to="/">
              <li className="links home">Home</li>
            </Link>
            <Link to="/service">
              <li className="links service">Service</li>
            </Link>
            <Link to="/about">
              <li className="links about">About</li>
            </Link>
            <Link to="/contact">
              <li className="links contact">Contact</li>
            </Link>
            <button className="link-btn" onClick={handleUnshowNav}>
              &times;
            </button>
          </ul>
        </nav>

        <GiHamburgerMenu
          className={showNavBar ? "inactive" : "burger"}
          onClick={handleShowNav}
        />
      </div>
    </div>
  );
}

export default NavBar;
