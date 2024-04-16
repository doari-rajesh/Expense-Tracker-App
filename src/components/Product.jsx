import React from "react";
import ProductItem from "./ProductItem";
import Card from "./Card";

const Product = (props) => {
  console.log("product rendered");
  const products = props.products;
  return (
    <Card className="product">
      {products.map((item) => (
        <ProductItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Product;
