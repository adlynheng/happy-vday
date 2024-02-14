import "./Plan.css";
import anime from "animejs/lib/anime.es.js";

const Plan = (props) => {
  const { setGoToThankYouPage } = props;
  const animateMove = (element, prop, pixels) =>
    anime({
      targets: element,
      [prop]: `${pixels}px`,
      easing: "easeOutElastic(1, .6)",
    });

  const getRandomNumber = (num) => {
    return Math.floor(Math.random() * (num + 1));
  };

  const handleOnEvent = (event) => {
    const button = document.getElementById("runaway-btn");
    const top = getRandomNumber(window.innerHeight - button.offsetHeight) / 3;
    const left = getRandomNumber(window.innerWidth - button.offsetWidth) / 3;

    animateMove(button, "top", top).play();
    animateMove(button, "left", left).play();
  };

  return (
    <div className="plan-page" id="plan">
      <h2>Will you be treating me on 18 feb?</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/cat-sushi.jpeg`}
        alt="cat-img"
        className="cat-img"
      />
      <div className="button-container">
        <a href="#thankyou">
          <button
            className="my-button"
            id="yes-btn"
            onClick={() => setGoToThankYouPage(true)}
          >
            Yes
          </button>
        </a>
        <button
          className="my-button"
          id="runaway-btn"
          onMouseOver={handleOnEvent}
          onClick={handleOnEvent}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Plan;
