import React, { useState } from "react";
import ProductDate from "./ProductDate";
import Card from "./Card";
import "./ProductItem.css";

const ProductItem = ({ title, amount, date }) => {
  console.log("product-item rendered");

  const [brand, setBrand] = useState(title);
  console.log("brand", brand);
  const changeHandler = () => {
    setBrand("popcorn");
  };
  return (
    <Card className="product-item">
      <ProductDate date={date} />
      <div className="product-title">
        <h2>{brand}</h2>
      </div>
      <div className="product-amount">
        <span>${amount}</span>
      </div>
      <button onClick={changeHandler}>change title</button>
    </Card>
  );
};

export default ProductItem;
