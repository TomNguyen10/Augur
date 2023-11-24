import React from "react";
import "./ProAd.css";

interface ProAdProps {}

const ProAd: React.FC<ProAdProps> = () => {
  return (
    <div className="proad">
      <section className="content-container">
        <div className="buttons-container">
          <button className="sportsbook-button">
            <h2>Augur Sportsbook</h2>
          </button>
          <button className="turbo-button">
            <h2>Augur Turbo</h2>
          </button>
        </div>
        <div>
          <a href="">Augur Pro</a>
        </div>
      </section>
    </div>
  );
};

export default ProAd;
