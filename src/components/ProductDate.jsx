import React from "react";
import "./ProductDate.css";

const ProductDate = (props) => {
  console.log("product-date rendered");

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="product-date">
      <div className="product-month">{month}</div>
      <div className="product-year">{year}</div>
      <div className="product-date">{day}</div>
    </div>
  );
};

export default ProductDate;
