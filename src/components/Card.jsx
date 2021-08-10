import Image from "../imgs/human-rights.jpeg";
const Card = (title, imageUrl, body) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default Card;
