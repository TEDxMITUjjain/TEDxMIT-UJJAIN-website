import SpeakerCard from "./Utility/SpeakerCard";
import "./Styles/Speakers.css";
import modi from "../assets/modi2.jpeg";
import SpeakerCard2 from "./Utility/SpeakerCard2";
function Speakers() {
  return (
    <>
      <div className="Speaker" id="speakers">
        <h1 className="Heading">Speakers</h1>
        <div className="SpeakerCardd">
          <SpeakerCard
            id="card1"
            img={modi}
            title="Narendra Modi"
            description="Mere bhai or behno"
            link="https://twitter.com/narendramodi"
          />
          {/* <div style="margin-bottom: 1rem; width: 100%;">
            
          </div> */}
          <SpeakerCard2
            id="card2"
            img={modi}
            title="Narendra Modi"
            description="Mere bhai or behno"
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard
            id="card1"
            img={modi}
            title="Narendra Modi"
            description="Mere bhai or behno"
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard2
            id="card2"
            img={modi}
            title="Narendra Modi"
            description="Mere bhai or behno"
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard
            id="card1"
            img={modi}
            title="Narendra Modi"
            description="Mere bhai or behno"
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard2
            id="card2"
            img={modi}
            title="Narendra Modi"
            description="Mere bhai or behno"
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard
            id="card1"
            img={modi}
            title="Narendra Modi"
            description="Mere bhai or behno"
            link="https://twitter.com/narendramodi"
          />
        </div>
      </div>
    </>
  );
}

export default Speakers;
