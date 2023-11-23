import React from "react";
import "./Intro.css";

interface IntroProps {}

const Intro: React.FC<IntroProps> = () => {
  return (
    <div className="intro">
      <section className="content-container">
        <h1>Augur</h1>
        <p>Your global, no-limit betting platform</p>
        <p>
          Bet how much you want on sports, economics, world events and more.
        </p>
        <div className="buttons-container">
          <button className="sportsbook-button">
            <h2>Augur Sportsbook</h2>
          </button>
          <button className="turbo-button">
            <h2>Augur Turbo</h2>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Intro;
