import SpeakerCard from "./Utility/SpeakerCard";
import "./Styles/Speakers.css";
import rangini from "../assets/Dr.Ragini Makkad.jpg";
import agnes from "../assets/Agnes Mann.jpg";
import nikhar from "../assets/Nikhar Juneja.jpg";
import kiran from "../assets/Kiran Phate.jpg";
import sanjay from "../assets/Dr.Sanjay Arora.jpg";
import sabha from "../assets/Sabah Riaz.jpg";
import prem from "../assets/Dr.Prem Chhabra.jpg";
import nidhi from "../assets/Nidhi Singh.jpg";
import rashmi from "../assets/rashmi.jpg";
import dhruvv from "../assets/dhruvv.jpg";
import SpeakerCard2 from "./Utility/SpeakerCard2";
function Speakers() {
  return (
    <>
      <div className="Speaker" id="speakers">
        <h1 className="Heading">Speakers</h1>
        <div className="SpeakerCardd">
          <SpeakerCard
            id="card1"
            img={sanjay}
            title="Dr. Sanjay Arora"
            description="Dr. Sanjay Arora, a visionary entrepreneur, has revolutionized the business landscape with his innovative approaches and relentless pursuit of excellence."
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard2
            id="card1"
            img={rangini}
            title="Dr. Ragini Makkad"
            description="Dr. Ragini Makkad, a distinguished Kathak Guru, has mesmerized audiences worldwide with her profound knowledge and graceful performances in the classical dance form of Kathak."
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard
            id="card2"
            img={prem}
            title="Dr. Prem Chhabra"
            description="Dr. Prem Chhabra, a dedicated educator, has significantly impacted the academic community with his innovative teaching methods and unwavering commitment to student success."
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard2
            id="card1"
            img={sabha}
            title="Sabah Riaz"
            description="Sabah Riaz, a renowned nutritionist, has transformed countless lives through her expert guidance on healthy eating and sustainable lifestyle choices."
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard
            id="card2"
            img={kiran}
            title="Kiran Phate"
            description="Kiran Phate, an accomplished IT Infrastructure Professional, has been instrumental in shaping robust and innovative technology solutions across various industries.            "
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard2
            id="card1"
            img={nikhar}
            title="Nikhar Juneja"
            description='Nikhar Juneja, a talented musician, captivates audiences with his soulful melodies and exceptional musical prowess.'
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard
            id="card2"
            img={agnes}
            title="Agnes Mann"
            description="Agnes Mann, a dynamic content creator, has garnered a loyal following with her engaging and insightful content across various digital platforms"
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard2
            id="card1"
            img={nidhi}
            title="Nidhi Singh"
            description='Nidhi Singh, a passionate educator, has made a lasting impact on her students through her innovative teaching techniques and dedication to education.            '
            link="https://twitter.com/narendramodi"
          />
          
          
        </div>
      </div>
    </>
  );
}

export default Speakers;
