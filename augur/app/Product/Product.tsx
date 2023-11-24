import React from "react";
import "../Product/Product.css";

const Product = () => {
  const product = [
    {
      name: "ANGUR",
      img: "../assets/products/angur.png",
    },
    {
      name: "SPORTSBOOK",
      img: "../assets/products/sportsbook.png",
    },
    {
      name: "MIGRATE YOUR REP",
      img: "../assets/products/migrate-your-rep.png",
    },
  ];
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-5/6 bg-blue-950">
        <div className="text-white text-center">
          <h1>PRODUCTS</h1>
        </div>

        {/* {product.map((products, index) => (
          <div key={index} className="my-4">
            <img src={products.img} alt={products.name} className="max-w-xs" />
            <div className="text-white text-center mt-2">{products.name}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Product;
