import { imageCards } from "../../imageCards";
import "./Cards.css";

function Cards() {
  return (
    <>
      {imageCards.map((eachCard, i) => {
        return (
          <div className="card-container" key={i}>
            <div className="image-container">
              <img
                src={eachCard.imagePath}
                alt=""
                className="image-background"
              />
            </div>

            <div className="info-for-cards">
              <div className="texts-info">
                <h4>{eachCard.textHeader}</h4>
                <p>{eachCard.textParagraph}</p>
              </div>
              {/* <button className="info-btn"> {eachCard.btnText}</button> */}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cards;
