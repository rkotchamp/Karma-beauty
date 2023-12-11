import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

import "./Contact.css";

function Contact() {
  const [showNav, setShowNav] = useState(false);
  const form = useRef();
  const handleUnshowNav = () => {
    setShowNav(false);
  };
  const handleShowNav = () => {
    setShowNav(true);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9d41f7g",
        "template_50zxe9g",
        form.current,
        "hgfHmT9565tq6OIWE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <NavBar />
      {/* <div className="navBar">
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
      </div> */}
      <div className="contact-controller">
        <div className="appointment-header">
          <h1>Book Appointment</h1>
        </div>
        <div className="contact-content">
          <form ref={form} onSubmit={sendEmail} className="form">
            <div className="input-container">
              <label>Service</label>
              <select name="service" id="">
                <option value="">select your service</option>
                <option value="Decolorare">Decolorare</option>
                <option value="Tuns Barbat">Tuns Barbat</option>
                <option value="Pachet Tuns si barba">
                  Pachet Tuns si barba
                </option>
                <option value="Pachet Tuns Dama">Pachet Tuns Dama</option>
                <option value="Vopsit">Vopsit</option>
                <option value="Vopsit ombre">Vopsit ombre</option>
                <option value="spalat si coafat de zi">
                  spalat si coafat de zi
                </option>
                <option value="Coafat Evenimente"> Coafat Evenimente</option>
                <option value="Manichiura si pedichiura">
                  Manichiura si pedichiura
                </option>
                <option value="Makeup"> Makeup</option>
                <option value="Manichiura"> Manichiura</option>
                <option value="Ungii gel"> Ungii gel</option>
              </select>
            </div>
            <div className="input-container">
              <label>Name</label>
              <input type="text" name="user_name" className="input" />
            </div>
            <div className="input-container">
              <label>Email</label>
              <input type="email" name="user_email" className="input" />
            </div>

            <div className="input-container">
              <label>Description</label>
              <textarea name="message" className="input" />
            </div>
            <div className="contact-btn-Container">
              <input type="submit" value="Send" className="contact-btn" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
