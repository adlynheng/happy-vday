import "./Car.css";
import { TbArrowBigDownFilled } from "react-icons/tb";

const Car = (props) => {
  const { goToCarPage } = props;

  return (
    <div className="car-page panel" id="car">
      <div className="car-content">
        {goToCarPage ? (
          <>
            <div className="typewriter-text">
              <h4>We have come a long way...</h4>
            </div>

            <div className="okc-road">
              <img
                src={`${process.env.PUBLIC_URL}/images/okc-convo.png`}
                alt="okc-convo"
                className="okc-img"
              />
              <div className="vday-block">
                <h5>14th Feb Valentine's Day 2024</h5>
                <TbArrowBigDownFilled />
              </div>
            </div>
            <div className="timeline">
              <div className="line" />
              <span className="dot" />
              <div className="line" style={{ display: "flex", flex: 0.8 }} />
              <span className="dot" />
              <div className="line" />
            </div>
            {/* <div className="bubble">14th Feb 2024 Valentine's Day</div> */}
            <div className="road">
              <a href="#plan">
                <img
                  className="car-img"
                  src={`${process.env.PUBLIC_URL}/images/car.png`}
                  alt="car-img"
                />
              </a>
              <span className="car-instructions">Click on car to continue</span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Car;
