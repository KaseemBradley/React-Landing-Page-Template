import "./Card.css";
const Card = ({ title, imageName, body }) => {
  return (
    <div className="flex">
      <div className="card-container">
        <div className="image-container">
          <img src={`../img/${imageName}.jpg`} alt="todo" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p>{body}</p>
          </div>
        </div>
        <div className="btn">
          <button>
            <a href="https://www.humanrightsfirst.org/asylum">View more</a>
          </button>
        </div>
      </div>

      <div className="card-container">
        <div className="image-container">
          <img src={`../img/${imageName}.jpg`} alt="todo" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p>{body}</p>
          </div>
        </div>
        <div className="btn">
          <button>
            <a href="https://www.humanrightsfirst.org/asylum">View more</a>
          </button>
        </div>
      </div>

      <div className="card-container">
        <div className="image-container">
          <img src={`../img/${imageName}.jpg`} alt="todo" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p>{body}</p>
          </div>
        </div>
        <div className="btn">
          <button>
            <a href="https://www.humanrightsfirst.org/asylum">View more</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
