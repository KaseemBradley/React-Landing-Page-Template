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
            <a href="https://www.youtube.com/watch?v=uYpTvM6ovOE">View more</a>
          </button>
        </div>
      </div>

      <div className="card-container">
        <div className="image-container">
          <img src={`../img/beach.jpg`} alt="todo" className="center" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Beach Resort</h3>
          </div>
          <div className="card-body">
            <p>
              Web app built using React that allows users to view available
              rooms based on specific filtering{" "}
            </p>
          </div>
        </div>
        <div className="btn">
          <button>
            <a href="https://kaseem-bradley-react-resort.netlify.app/">
              View more
            </a>
          </button>
        </div>
      </div>

      <div className="card-container">
        <div className="image-container">
          <img src={`../img/api.jpg`} alt="todo" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Climate Change API</h3>
          </div>
          <div className="card-body">
            <p>
              API built using node.js that allows users to get data scraped from
              news sources relating to climate change
            </p>
          </div>
        </div>
        <div className="btn">
          <button>
            <a href="https://kaseemclimateapi.herokuapp.com/">View more</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
