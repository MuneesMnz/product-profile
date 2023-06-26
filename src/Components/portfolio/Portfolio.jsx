import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://oceanwp.org/wp-content/uploads/2021/09/wordpress-template-startup-1-768x432.png"
            alt=""
          />
          <h3>Item Title</h3>
        </div>
        <div className="item">
          <img
            src="https://oceanwp.org/wp-content/uploads/2021/09/wordpress-template-startup-1-768x432.png"
            alt=""
          />
          <h3>Item Title</h3>
        </div>
        <div className="item">
          <img
            src="https://oceanwp.org/wp-content/uploads/2021/09/wordpress-template-startup-1-768x432.png"
            alt=""
          />
          <h3>Item Title</h3>
        </div>
        <div className="item">
          <img
            src="https://oceanwp.org/wp-content/uploads/2021/09/wordpress-template-startup-1-768x432.png"
            alt=""
          />
          <h3>Item Title</h3>
        </div>
        <div className="item">
          <img
            src="https://oceanwp.org/wp-content/uploads/2021/09/wordpress-template-startup-1-768x432.png"
            alt=""
          />
          <h3>Item Title</h3>
        </div>
        <div className="item">
          <img
            src="https://oceanwp.org/wp-content/uploads/2021/09/wordpress-template-startup-1-768x432.png"
            alt=""
          />
          <h3>Item Title</h3>
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
