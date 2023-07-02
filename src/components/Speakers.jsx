import SpeakerCard from "./Utility/SpeakerCard";
import "./Styles/Speakers.css";
import vijendra from "../assets/vijendra1.jpg";
import shubhi from "../assets/shubhi1.jpg";
import sahil from "../assets/sahil1.jpg";
import mansi from "../assets/MANSI BIYANI 1.png";
import vikrant from "../assets/vikrant.jpg";
import vikas from "../assets/vikas1.jpg";
import anand from "../assets/anand.jpg";
import SpeakerCard2 from "./Utility/SpeakerCard2";
function Speakers() {
  return (
    <>
      <div className="Speaker" id="speakers">
        <h1 className="Heading">Speakers</h1>
        <div className="SpeakerCardd">
          <SpeakerCard
            id="card1"
            img={vijendra}
            title="Dr. Vijender Singh Chauhan"
            description="Dr. Vijendra Singh Chauhan a renowned DU professor, Vijendra Singh Chauhan, also known as Vijendra Masijeevi, conducts mock IAS interviews on YouTube, challenging conventional wisdom and inspiring critical thinking."
            link="https://twitter.com/narendramodi"
          />
          {/* <div style="margin-bottom: 1rem; width: 100%;">
            
          </div> */}
          <SpeakerCard2
            id="card2"
            img={shubhi}
            title="Shubhi Bhandari"
            description="Shubhi Bhandari, a lawyer, social entrepreneur, and author, is passionate about leveraging technology for social impact and women empowerment. As the President of Cyber Security Council (CSC), she works to ensure women's security and privacy in the digital ecosystem."
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard
            id="card1"
            img={sahil}
            title="Sahil Juneja"
            description='Sahil Juneja, a serial entrepreneur behind the successful venture "Chai Kaapi," will share his journey of starting from scratch and building a portfolio of multiple online and offline ventures, emphasizing the power of resilience and determination.'
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard2
            id="card2"
            img={mansi}
            title="Mansi Biyani"
            description="Mansi Biyani, Founder & CEO of MBDH Wellness, India's 1st consumer-first Ayurveda startup, will share her experiences as an architect turned entrepreneur, highlighting the fusion of ancient wisdom and modern living."
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard
            id="card1"
            img={vikrant}
            title="Dr. Vikrant Singh Tomar"
            description="Dr. Vikrant Singh Tomar, an internationally acknowledged scholar and management consultant, specializes in ancient spiritual wisdom and modern living. He will provide insights into life management and ancient Vedic wisdom."
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard2
            id="card2"
            img={anand}
            title="Anand Munshi"
            description="Anand Munshi, a dynamic motivational speaker and performance coach, ignites positive energy on national and international platforms. His engaging keynotes and workshops empower youth and professionals alike to excel in their personal and professional lives."
            link="https://twitter.com/narendramodi"
          />
          <SpeakerCard
            id="card1"
            img={vikas}
            title="Vikas Choudhary"
            description=" Vikas Choudhary, Strategic Solutions and Cyber Leader for TCS Japan, brings over 17 years of experience in IT, IT Consulting, and Cyber Security. He will share his expertise and global insights on navigating the ever-evolving landscape of cybersecurity."
            link="https://twitter.com/narendramodi"
          />
        </div>
      </div>
    </>
  );
}

export default Speakers;
