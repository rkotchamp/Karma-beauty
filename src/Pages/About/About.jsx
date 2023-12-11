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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            deserunt eum eius architecto aut natus odio. Eligendi quo nemo
            officia error quos odit cumque dolorem culpa officiis id tempore
            facere necessitatibus doloremque incidunt, libero sequi natus
            aliquid nisi modi rerum omnis eveniet voluptate! Corrupti optio
            labore hic quis. Sequi ducimus totam cum sint cupiditate praesentium
            fuga corporis, dignissimos dolorum eius. Laboriosam sapiente tempora
            minima. Dolores voluptas similique iusto unde minus maiores omnis
            vero quaerat accusantium consequatur veniam, ex deleniti libero ut
            neque odit fugit quas laboriosam harum? Dicta, iusto! Qui nam ab in
            veritatis officiis numquam totam, quia repudiandae odit libero optio
            eligendi tenetur temporibus voluptas omnis accusamus rerum esse ipsa
            animi placeat. Vitae quaerat cupiditate fugit temporibus tempora,
            veritatis animi molestiae eius et impedit! Architecto cupiditate
            reiciendis provident consequuntur, ratione quos distinctio non nulla
            vitae sed illo expedita placeat cum nihil, quis veritatis dolores
            tempore commodi id quod quisquam. Rem ipsam doloribus architecto
            nostrum voluptates, facere dolorem velit et maxime, consequuntur
            officiis ea! Sapiente quas vero repellendus ullam ducimus neque
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
