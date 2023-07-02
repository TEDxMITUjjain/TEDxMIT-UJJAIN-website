import "../Styles/SpeakerCard.css";

{
  function checkScroll() {
    var ele=document.getElementById("cardl");
    var scrollPosition = window.scrollY;
    var elementsToShow = document.querySelectorAll('.fly-in-left, .fly-in-right');
  
    elementsToShow.forEach(function (ele) {
      if (scrollPosition + window.innerHeight > element.offsetTop) {
        document.getElementById("cardl").classList.add('animate');
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
}

function SpeakerCard(props) {
  return (
    <>
      <div className="SpeakerCard rainbow fly-in-right" id="cardl {props.id}">
        <img
          className="SpeakerCard-img"
          alt="SpeakerCard-poster"
          src={props.img}
        />
        <div className="SpeakerCard-text">
          <h2 className="SpeakerCard-title">{props.title}</h2>
          <div className="Speacker-details">
            {/* <h4>TALK ON:-</h4> */}
            <p className="SpeakerCard-description">{props.description}</p>
            {/* <a className="SpeakerCard-link" href={props.link}>
              hello
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SpeakerCard;
