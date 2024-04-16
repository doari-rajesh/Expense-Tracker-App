import React from "react";
import ProductForm from "./ProductForm";

const NewProduct = ({ newProduct }) => {
  const product = (product) => {
    newProduct(product);
  };
  return (
    <div>
      <ProductForm productData={product} />
    </div>
  );
};

export default NewProduct;
