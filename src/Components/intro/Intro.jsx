import { init } from "ityped";
import "./intro.scss";
import { useEffect } from "react";
import { useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {

    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,

      strings: ["Developer", "Designer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" className="image" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Person Name</h1>
          <h3>
            Freelancer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
