import blonde from "../../assets/blonde.jpeg";

import "./Cards.css";

function Cards() {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={blonde} alt="" className="image-background" />
      </div>

      <div className="info-for-cards">
        <div className="texts-info">
          <h4>Clinic Locations</h4>
          <p>
            See where you can find Karma Beauty and book your next appointment
            at the preferred location, closest to you.
          </p>
        </div>
        <button className="info-btn"> Locations</button>
      </div>
    </div>
  );
}

export default Cards;
