import React, { useState } from "react";
import ProductDate from "./ProductDate";
import Card from "./Card";

const ProductItem = ({ ...props }) => {
  console.log("card rendered");

  const [title, setTitle] = useState(props.title);
  const changeHandler = () => {
    console.log("clicked");
    setTitle("popcorn");
  };
  return (
    <Card className="product-item">
      <ProductDate date={props.date} />
      <div className="product-title">
        <h2>{title}</h2>
      </div>
      <button onClick={changeHandler}>change title</button>
    </Card>
  );
};

export default ProductItem;
