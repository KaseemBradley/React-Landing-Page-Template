import Image from "../imgs/kaseem.jpg";
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
