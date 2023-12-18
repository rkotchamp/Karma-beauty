import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <NavBar />
      <div className="about-text-image-container">
        <div className="about-text">
          <h3>About Us</h3>
          <p>
            Bine ai venit la KarmaBeauty: Drumul tău către frumusețe și
            fericire. Revelați-vă strălucirea interioară. Intră în lumea
            KarmaBeauty, unde fiecare vizită este o călătorie către
            autodescoperire și strălucire. Înconjoară-te într-o oază creată
            exclusiv pentru răsfățul tău. Sanctuarul nostru oferă o gamă de
            tratamente personalizate, menite să-ți reveleze strălucirea
            interioară, să-ți revigoreze pielea și să-ți trezească încrederea.
            Explorează arta frumuseții Mai presus de simplul răsfăț se ascunde o
            artă - o artă ce celebrează farmecul tău unic. Alege experiențele
            noastre de frumusețe, meticulos concepute pentru a se potrivi
            dorințelor tale individuale. Experimentează coafurile ,masajele
            noastre exclusive, tratamentele faciale semnătură și terapiile
            revigorante, toate dedicate descoperirii frumuseții tale innăscute.
            Îmbrățișează călătoria Karma Beauty. Alătură-te nouă în crearea unei
            experiențe ce depășește standardele convenționale ale frumuseții.
            Echipa noastră de artizani talentați, dotați cu tehnici de ultimă
            generație și produse premium, creează o atmosferă ce emană liniște
            și rafinament. Ridică-ți simțurile și lasă-ne să conturăm imaginea
            aspirațiilor tale.Începe-ți transformarea Ești pregătit să
            îmbrățișezi această călătorie captivantă? Asigură-ți momentul de
            serenitate în sanctuarul nostru al frumuseții și liniștii.
            Permite-ne să te ghidăm printr-o transformare ce nu doar îți
            revitalizează înfățișarea, ci hrănește și sufletul tău. Ești gata să
            descoperi drumul către frumusețea eternă? Călătoria ta către
            frumusețea atemporală începe la KarmaBeauty.
          </p>
        </div>
        <div className="about-image-container">
          <img
            src="https://images.unsplash.com/photo-1603899968034-1a56ca48d172?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="about-image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
