import "./testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img src="" className="user" alt="" />
            <img src="assets/youtube.png" className="right" alt="" />
          </div>
          <div className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo
            iste placeat, dolor qui in,
          </div>
          <div className="bottom">
            <h3>MNZ</h3>
            <h4>CEO of MNZ</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
