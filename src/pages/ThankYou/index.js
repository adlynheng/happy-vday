import "./ThankYou.css";

const ThankYou = (props) => {
  const { goToThankYouPage } = props;

  return goToThankYouPage ? (
    <div className="thankyou-page" id="thankyou">
      <div className="filler" />
      <div className="typewriter-text-thankyou">
        <h3>😭😭😭 Thank you so much for the treat 😭😭😭</h3> {/*1*/}
        <h3>Here are all the reasons why I'm grateful for you:</h3> {/*2*/}
        <h3>1. You're very strong</h3> {/*3*/}
        <h3>2. We can eat good food together</h3> {/*4*/}
        <h3>3. You remember the little things about me</h3> {/*5*/}
        <h3>4. You're a positive motivating force in my life</h3> {/*6*/}
        <h3>5. You're always finding ways to take care of me better</h3> {/*7*/}
        <h3>6. You have always shown up for me for the important moments</h3>
        {/*8*/}
        <h3 style={{ marginTop: "1.2rem" }}>I love you so much</h3> {/*9*/}
        <h3>Happy Valentine's day!!</h3> {/*10*/}
      </div>
      <div className="filler" />
      <div className="next-block">
        <a className="thankyou-button" href="/happy-vday">
          <span>Click to go back to start</span>
        </a>
      </div>
    </div>
  ) : null;
};

export default ThankYou;
