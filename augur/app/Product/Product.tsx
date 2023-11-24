'use client'

import React, { useState } from "react";
import "../Product/Product.css";
import Image1 from "../asset/products/angur.png";
import Image2 from "../asset/products/sportsbook.png";
import Image3 from "../asset/products/migrate-your-rep.png";
import NextImage, { StaticImageData } from "next/image";

interface ProductItem {
  name: string;
  img: StaticImageData;
}

const Product: React.FC = () => {

  const products: ProductItem[] = [
    {
      name: 'ANGUR',
      img: Image1,
    },
    {
      name: 'SPORTSBOOK',
      img: Image2,
    },
    {
      name: 'MIGRATE YOUR REP',
      img: Image3,
    },
  ];


  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleCardClick = (product: ProductItem) => {
    setSelectedProduct(product);
  };


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-5/6 bg-blue-950">
        <div className="text-white text-center p-10">
          <h1>PRODUCTS</h1>
        </div>

        <div className="flex px-10">
          <div className="text-white text-center mt-4 px-10 flex-1">
            <NextImage src={selectedProduct.img} alt={selectedProduct.name} className="pb-10" />
          </div>
          <div className="max-w-xs card-list">
            {products.map((product, index) => (
              <div
                key={index}
                className={`my-4 card ${selectedProduct.name === product.name ? 'border-green-500' : ''}`}
                onClick={() => handleCardClick(product)}
                style={{ cursor: 'pointer' }}
              >
              <div className="text-white text-left mt-2 font-bold">{product.name}</div>
              </div>
            ))}
          </div>
          
          </div>

       
      </div>
    </div>
  );
};

export default Product;
