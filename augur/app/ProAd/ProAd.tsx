import React from "react";
import "./ProAd.css";

interface ProAdProps {}

const ProAd: React.FC<ProAdProps> = () => {
  return (
    <div className="proad">
      <section className="content-container">
        <div className="buttons-container gap-5">
          <button className=" bg-customColor text-lg underline rounded-sm px-10 py-4 inline-block border hover:bg-white hover:text-customColor transition-all duration-300 ease-in-out uppercase">
            Augur Sportsbook
          </button>
          <button className=" bg-customGreen text-lg text-customColor border-customGreen underline rounded-sm px-10 inline-block border hover:bg-white hover:text-customColor transition-all duration-300 ease-in-out uppercase">
            Augur Turbo
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
