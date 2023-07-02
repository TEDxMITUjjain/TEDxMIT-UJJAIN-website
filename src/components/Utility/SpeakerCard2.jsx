import "../Styles/SpeakerCard2.css";

function SpeakerCard2(props) {
  return (
    <>
      <div className="SpeakerCard2 rainbow" id={props.id}>
        
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
        <img
          className="SpeakerCard-img"
          alt="SpeakerCard-poster"
          src={props.img}
        />
      </div>
    </>
  );
}

export default SpeakerCard2;
