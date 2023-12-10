import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <div className="navBar">
        <img src={logoAvatar} alt="karma Logo" className="imageLogo" />

        <nav className={showNav ? "nav" : "inactive"}>
          <ul className="nav__links">
            <li className="links home">Home</li>
            <li className="links service">Service</li>

            <li className="links about">About</li>
            <Link to="/contact">
              <li className="links contact">Contact</li>
            </Link>
            <button className="link-btn" onClick={handleUnshowNav}>
              &times;
            </button>
          </ul>
        </nav>

        <GiHamburgerMenu
          className={showNav ? "inactive" : "burger"}
          onClick={handleShowNav}
        />
      </div>
    </div>
  );
}

export default NavBar;
