import Card from "./Card";

export const Services = (props) => {
  return (
    <div id="projects" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <Card
          title="Card Title"
          imageUrl="https://unsplash.com/photos/H4Xlh-B_7Rg"
          body="lorem ipsum"
        />
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};
