"use client";
import React, { useState } from "react";
import "./CardSlider.css";
import NextImage from "next/image";
import nflImage from "../asset/slider/nfl.png";
import mlbImage from "../asset/slider/mlb.png";
import mmaImage from "../asset/slider/mma.png";
import cryptoImage from "../asset/slider/crypto.png";
import { StaticImageData } from "next/image";

interface Card {
  name: string;
  img: StaticImageData;
}

const CardSlider: React.FC = () => {
  const data: Card[] = [
    {
      name: "NFL",
      img: nflImage,
    },
    {
      name: "MLB",
      img: mlbImage,
    },
    {
      name: "MMA",
      img: mmaImage,
    },
    {
      name: "CRYPTO",
      img: cryptoImage,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.length - 3 ? prevIndex + 1 : prevIndex
    );
  };

  const visibleIndices = [currentIndex, currentIndex + 1, currentIndex + 2];

  return (
    <div className="slider-container">
      <button onClick={handlePrev} className="slider-btn">
        prev
      </button>
      <div className="slider">
        <div
          className="slider-inner"
          style={{ transform: `translateX(${-currentIndex * 150}px)` }}>
          {visibleIndices.map((index) => (
            <div
              key={index}
              className="slide"
              style={{ width: "1000px", marginRight: "10px" }}>
              <NextImage
                src={data[index].img}
                alt={data[index].name}
                width={150}
                height={75}
              />
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="slider-btn">
        Next
      </button>
    </div>
  );
};

export default CardSlider;
