import "./Celebration.css";
import confetti from "canvas-confetti";
import { FaArrowDown } from "react-icons/fa6";
import { useEffect } from "react";

const Celebration = (props) => {
  const { setGoToCarPage } = props;

  useEffect(() => {
    var duration = 7 * 1000; // change to 7 seconds
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }, []);

  function cannonOnClick(event) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      },
    });
  }

  return (
    <div className="celebration-page panel" id="celebration">
      <div className="filler" onClick={cannonOnClick} />
      <div className="celebration-content" onClick={cannonOnClick}>
        <h1>HAPPY VALENTINE'S</h1>
        <h1>DAY 2024</h1>
        <p style={{ color: "#F8E7C9", marginBottom: "1.2rem" }}>
          🥂 to your first ever v day 🥳
        </p>
        <span className="instructions">
          Click anywhere to continue celebrating
        </span>
      </div>
      <div className="filler" onClick={cannonOnClick} />
      <div className="next-block">
        <a
          className="next-button"
          href="#car"
          onClick={() => setGoToCarPage(true)}
        >
          <span>Click to continue</span>
          <FaArrowDown />
        </a>
      </div>
    </div>
  );
};

export default Celebration;
