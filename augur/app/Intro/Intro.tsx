import React from "react";
import "./Intro.css";

interface IntroProps {}

const Intro: React.FC<IntroProps> = () => {
  return (
    <div className="intro">
      <div className="content-container">
        <h1>Augur:</h1>
        <h1>Your global, no-limit betting platform</h1>
        <p className="text-customGray">
          Bet how much you want on sports, economics, world events and more.
        </p>
        <div className="buttons-container gap-5">
          <button className=" bg-customColor text-lg underline rounded-sm px-10 py-4 inline-block border hover:bg-white hover:text-customColor transition-all duration-300 ease-in-out uppercase">
            Augur Sportsbook
          </button>
          <button className=" bg-customGreen text-lg text-customColor border-customGreen underline rounded-sm px-10 inline-block border hover:bg-white hover:text-customColor transition-all duration-300 ease-in-out uppercase">
            Augur Turbo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
