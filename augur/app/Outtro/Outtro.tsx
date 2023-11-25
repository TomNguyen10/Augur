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
        <div className="buttons-container gap-5">
          <button className=" bg-customColor text-lg underline rounded-sm px-10 py-4 inline-block border hover:bg-white hover:text-customColor transition-all duration-300 ease-in-out uppercase">
            Augur Sportsbook
          </button>
          <button className=" bg-customGreen text-lg text-customColor border-customGreen underline rounded-sm px-10 inline-block border hover:bg-white hover:text-customColor transition-all duration-300 ease-in-out uppercase">
            Augur Turbo
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
