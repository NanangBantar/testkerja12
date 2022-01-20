import "./Card.css";

const Card = ({ image }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={image} alt="logo" />
    </div>
  );
};

export default Card;
