import React from "react";
import Intro from "./Intro/Intro";
import Product from "./Product/Product";
import Ad1 from "./Advertisment/Ad1";
import Ad2 from "./Advertisment/Ad2";
import Ad3 from "./Advertisment/Ad3";
import Ad4 from "./Advertisment/Ad4";
import ProAd from "./ProAd/ProAd";
import AugurComparisonTable from "./TableCompare/TableCompare";
import Outtro from "./Outtro/Outtro";
import CardSlider from "./CardSlider/CardSlider";

const HomePage = () => {
  return (
    <div className="App">
      <Intro />
      <CardSlider />
      <Product />
      <Ad1 />
      <Ad2 />
      <Ad3 />
      <Ad4 />
      <ProAd />
      <AugurComparisonTable />
      <Outtro />
    </div>
  );
};

export default HomePage;
