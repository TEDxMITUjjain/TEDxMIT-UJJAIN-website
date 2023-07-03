import "./Styles/About.css";
import Card from "./Utility/Card.jsx";
import tedx_img from "../assets/tedx.jpg";
import mitp from "../assets/mitphoto.jpg"

function About() {
  return (
    <>
      <div className="About" id="about">
        <Card
          id="card1"
          img={tedx_img}
          title="About TEDx"
          description="TEDx is a grassroots initiative, created in the spirit of TED's overall mission to research and discover “ideas worth spreading.”"
          link="https://www.ted.com/about/programs-initiatives/tedx-program"
        />

        <Card
          id="card2"
          img={mitp}
          title="About MIT UJJAIN"
          description="Mahakal Institute of Technology (commonly known as MIT, Ujjain) is an institution of the Mahakal Group of Institutes near the village of Karchha, Behind Air Strip, Datana about 20 km from Ujjain, Madhya Pradesh India."
          link="http://mitujjain.ac.in/"
        />
      </div>
    </>
  );
}

export default About;
