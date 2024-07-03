import chaikaapi from "../assets/chaikaapi1.png";
import pitchme from "../assets/pitchme1.png";
import samadhan from "../assets/Samadhan logo.png";
import jbbh from "../assets/jbbh1.png";
import "./Styles/Partners.css";

function Partners() {
  return (
    <>
      <div className="partner-page" id="partners">
        <div className="partner-section">
          <h2>Our Partners</h2>
          <div className="partner-images">
            {/* Add partner company images here */}
            <a href=""><img
              id="shree"
              className="partnerimg"
              src={pitchme}
              alt="Partner 1"
            />
            <p className="foodpartner"><b></b></p>
            </a>
            <a href="">
            <img
              id="success"
              className="partnerimg"
              src={chaikaapi}
              alt="Partner 2"
            />
            {/* <p className="edupartner3"><b>Education Partner</b></p> */}
            </a>
            <a href=""><img
              id="sanjos"
              className="partnerimg"
              src={jbbh}
              alt="Partner 4"
            />
            <p className="edupartner2"><b></b></p>
            </a>
           
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
