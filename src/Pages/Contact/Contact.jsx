import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

import "./Contact.css";

function Contact() {
  const form = useRef();
  const [error, setError] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceName = e.target.service.value;
    const userName = e.target.user_name.value;
    const userEmail = e.target.user_email.value;
    const message = e.target.message.value;

    if (!serviceName || serviceName === "") {
      setError("Please select a service");
      return;
    }
    if (!userName || userName === "") {
      setError("Please enter a name");
      return;
    }
    if (!userEmail || userEmail === "") {
      setError("Please enter an email");
      return;
    }
    if (!message || message === "") {
      setError("Please enter a message");
      return;
    }
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

      <div className="contact-controller">
        <div className="appointment-header">
          <h1>Fă o programare.</h1>
        </div>
        <span className="whatsappContainer">
          <Link to="https://wa.me/732756294">
            <IoLogoWhatsapp className="whatsappLogo" />
          </Link>
        </span>
        <div className="contact-content">
          <form ref={form} onSubmit={sendEmail} className="form">
            <div className="input-container">
              <label>Servicii</label>
              <select name="service" id="" className="selectOptions">
                <option value="">Alege un serviciu</option>
                <option value="Decolorare">Decolorare</option>
                <option value="Masaj">Masaj</option>
                <option value="Balayage">Balayage</option>
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
              <label>Nume</label>
              <input type="text" name="user_name" className="input" />
            </div>
            <div className="input-container">
              <label>Email</label>
              <input type="email" name="user_email" className="input" />
            </div>

            <div className="input-container">
              <label>Descriere</label>
              <textarea name="message" className="input" />
            </div>
            <div className="contact-btn-Container">
              <input type="submit" value="Trimite" className="contact-btn" />
            </div>
            {error && (
              <div className="error-container">
                <p>{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
