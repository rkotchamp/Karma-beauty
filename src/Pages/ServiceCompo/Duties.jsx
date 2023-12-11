import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { services } from "../../services.json";
import { Link } from "react-router-dom";
import "./Duties.css";

function Duties() {
  console.log(services);
  return (
    <div className="duties-container">
      <NavBar />
      <div className="services">
        {services.map((item, i) => {
          return (
            <div key={i} className="service-container">
              <div className="service-image-container">
                <img src={item.image} alt="" className="service-image" />
              </div>
              <div className="service-text-container">
                <h4>{item.service}</h4>
                <p>{item.text}</p>
              </div>
              <div className="service-btn-container">
                <Link to="/contact">
                  <button className="service-btn">Book Now</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Duties;
