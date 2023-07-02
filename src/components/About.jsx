import "./Styles/About.css";
import Card from "./Utility/Card.jsx";
import tedx_img from "../assets/tedx1.jpg";

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
          img={tedx_img}
          title="About MIT UJJAIN"
          description="TEDx is a grassroots initiative, created in the spirit of TED's overall mission to research and discover “ideas worth spreading.”"
          link="http://mitujjain.ac.in/"
        />
      </div>
    </>
  );
}

export default About;
