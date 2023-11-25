import React from "react";
import "./Outtro.css";

interface OuttroProps {}

const Outtro: React.FC<OuttroProps> = () => {
  return (
    <div className="outtro">
      <section className="content-container">
        <div>
          <h1>No Limits. Lower fees.</h1>
        </div>
        <div>
          <h1>Global Access.</h1>
        </div>
        <div className="buttons-container">
          <button className="sportsbook-button">
            <h2>Augur Sportsbook</h2>
          </button>
          <button className="turbo-button">
            <h2>Augur Turbo</h2>
          </button>
        </div>
        <div>
          <a href="">AUGUR PRO</a>
        </div>
      </section>
    </div>
  );
};

export default Outtro;
