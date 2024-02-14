import { useState } from "react";
import "./Main.css";
import Celebration from "../Celebration";
import Car from "../Car";
import Plan from "../Plan";
import ThankYou from "../ThankYou";

const Main = () => {
  const [goToCarPage, setGoToCarPage] = useState(false);
  const [goToThankYouPage, setGoToThankYouPage] = useState(false);

  return (
    <>
      <Celebration setGoToCarPage={setGoToCarPage} />
      <Car goToCarPage={goToCarPage} />
      <Plan setGoToThankYouPage={setGoToThankYouPage} />
      <ThankYou goToThankYouPage={goToThankYouPage} />
    </>
  );
};

export default Main;
