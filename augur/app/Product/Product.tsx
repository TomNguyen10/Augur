"use client";

import React, { useState } from "react";
import "../Product/Product.css";
import Image1 from "../asset/products/angur.png";
import Image2 from "../asset/products/sportsbook.png";
import Image3 from "../asset/products/migrate-your-rep.png";
import Image4 from "../asset/products/angur2.png";
import Image5 from "../asset/products/sportsbook2.png";
import NextImage, { StaticImageData } from "next/image";

interface SubItem {
  id: number;
  name: string;
  content: string;
  availability: string;
  img: StaticImageData;
}

interface ProductItem {
  name: string;
  img: StaticImageData;
  subItems: SubItem[];
}

const Product: React.FC = () => {
  const products: ProductItem[] = [
    {
      name: "ANGUR",
      img: Image1,
      subItems: [
        {
          id: 1,
          name: "AUTOMATED MARKET MAKER",
          content:
            "A simple way for traders to buy and sell shares, and liquidity providers can supply liquidity to earn fees.",
          availability: "NOT SUPPORTED IN YOUR REGION",
          img: Image1,
        },
        {
          id: 2,
          name: "PROVIDE LIQUIDITY",
          content: "Add Market liquidity to earn fees and rewards.",
          availability: "NOT SUPPORTED IN YOUR REGION",
          img: Image4,
        },
      ],
    },
    {
      name: "SPORTSBOOK",
      img: Image2,
      subItems: [
        {
          id: 3,
          name: "SPORTSBOOK",
          content:
            "Place a wager on your favourite team, game or sporting event.",
          availability: "NOT SUPPORTED IN YOUR REGION",
          img: Image2,
        },
        {
          id: 4,
          name: "BETTING EXCHANGE",
          content:
            "Be the bookmaker: the betting exchange is where bets placed and layed are matched against each other. Back or lay any event.",
          availability: "COMING SOON",
          img: Image5,
        },
      ],
    },
    {
      name: "MIGRATE YOUR REP",
      img: Image3,
      subItems: [
        {
          id: 5,
          name: "",
          content: "Migrate your V1 to V2 REP.",
          availability: "MIGRATE YOUR REP",
          img: Image3,
        },
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedSubItem, setSelectedSubItem] = useState(
    selectedProduct.subItems[0]
  ); // Default to the first subitem
  const [isLineExpanded, setIsLineExpanded] = useState(false);

  const handleCardClick = (product: ProductItem, subItem: SubItem) => {
    setSelectedProduct(product);
    setSelectedSubItem(subItem);
    setIsLineExpanded(true);
  };

  return (
    <div className=" bg-customColor">
      <div className="flex mb-200 items-center bg-customColor justify-center h-screen py-10">
        <div className="w-5/6 bg-customBlue">
          <div className="text-customGray text-center p-10">PRODUCTS</div>

          <div className="flex px-10">
            <div className="text-white text-center mt-4 px-10 flex-1">
              <NextImage
                src={selectedSubItem.img}
                alt={selectedSubItem.name}
                className="pb-5"
              />
              {selectedProduct.subItems && (
                <div className="flex gap-4 mt-0">
                  {selectedProduct.subItems.map((subItem, index) => (
                    <div
                      key={index}
                      className={`my-4 subitem ${
                        selectedSubItem === subItem ? "border-green-500" : ""
                      }`}
                      onClick={() => handleCardClick(selectedProduct, subItem)}
                      style={{ cursor: "pointer" }}>
                      <div className="relative group">
                        <span className="text-customGray text-sm relative z-10 hover:text-white">
                          {subItem.name}
                        </span>
                        <div className="absolute left-0 w-full h-0.5 bg-green-500 bottom-0 origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div>
                <div className="text-white text-left mt-2 py-5">
                  {selectedSubItem.content}
                </div>
                <div className="text-customGray inline-block text-left mt-2 p-4 border mb-10">
                  {selectedSubItem.availability}
                </div>
              </div>
            </div>
            <div className="max-w-xs card-list">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`my-4 card ${
                    selectedProduct.name === product.name
                      ? "border-green-500"
                      : ""
                  }`}
                  onClick={() => handleCardClick(product, product.subItems[0])}
                  style={{ cursor: "pointer" }}>
                  <div className="text-white text-left mt-2 font-bold">
                    {product.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
