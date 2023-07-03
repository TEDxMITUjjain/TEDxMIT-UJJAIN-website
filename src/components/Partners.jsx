import shreeganga from "../assets/shree.jpg";
import successacademy from "../assets/success.png";
import samadhan from "../assets/Samadhan logo.png";
import sanjos from "../assets/sanjosh.png";
import "./Styles/Partners.css";

function Partners() {
  return (
    <>
      <div className="partner-page" id="partners">
        <div className="partner-section">
          <h2>Our Partners</h2>
          <div className="partner-images">
            {/* Add partner company images here */}
            <a href="https://shreeganga.in/"><img
              id="shree"
              className="partnerimg"
              src={shreeganga}
              alt="Partner 1"
            />
            <p className="foodpartner"><b>Food Partner</b></p>
            </a>
            <a href="">
            <img
              id="success"
              className="partnerimg"
              src={successacademy}
              alt="Partner 2"
            />
            {/* <p className="edupartner3"><b>Education Partner</b></p> */}
            </a>
            <a href="https://instagram.com/sanjosinstitute_ujjain?igshid=YmM0MjE2YWMzOA=="><img
              id="sanjos"
              className="partnerimg"
              src={sanjos}
              alt="Partner 4"
            />
            <p className="edupartner2"><b>Education Partners</b></p>
            </a>
            <a href=""><img
              id="samadhan"
              className="partnerimg"
              src={samadhan}
              alt="Partner 3"
            />
            <p className="repartner"><b>Real-Estate Partner</b></p>
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
