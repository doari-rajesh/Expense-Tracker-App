import React, { useState } from "react";
import "./ProductForm.css";
const ProductForm = ({ productData }) => {
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");
  console.log("title", newTitle);
  console.log("Date", newDate);
  const handleChangeTitle = (e) => {
    console.log("newTitle:", newTitle);
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  const handleChangeDate = (e) => {
    console.log("newDate:", newDate);
    console.log(e.target.value);
    setDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      title: newTitle,
      date: new Date(newDate),
    };

    console.log(product);
    productData(product);
    setTitle("");
    setDate("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-product_controls">
        <div className="new-product_title">
          <label>
            Title <sup>*</sup>
          </label>
          <input type="text" value={newTitle} onChange={handleChangeTitle} />
        </div>
        <div className="new-product_date">
          <label>
            Date<sup>*</sup>
          </label>
          <input
            type="date"
            min={"2023-01-1"}
            max={"2024-12-31"}
            value={newDate}
            onChange={handleChangeDate}
          />
        </div>
        <div className="new-product_button">
          <button className="">Add product</button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
