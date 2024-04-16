import React, { useState } from "react";
import ProductDate from "./ProductDate";
import Card from "./Card";

const ProductItem = ({ title, amount, date }) => {
  console.log("card rendered");

  const [brand, setBrand] = useState(title);
  const changeHandler = () => {};
  return (
    <Card className="product-item">
      <ProductDate date={date} />
      <div className="product-title">
        <h2>{brand}</h2>
      </div>
      <div className="product-amount">
        <span>{amount}</span>
      </div>
      <button onClick={changeHandler}>change title</button>
    </Card>
  );
};

export default ProductItem;
