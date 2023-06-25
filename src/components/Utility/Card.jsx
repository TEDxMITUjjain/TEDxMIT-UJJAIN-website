import "../Styles/Card.css";

function Card(props) {
  return (
    <>
      <div className="cardgradient card1">
      <div className="Card fade-in-image" id={props.id}>
        <img className="card-img" alt="card-poster" src={props.img} />
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <a className="card-link" href={props.link}>
          Learn more
        </a>
      </div>
      </div>
    </>
  );
}

export default Card;