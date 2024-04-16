import React, { useState } from "react";

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
          <label>Title</label>
          <input type="text" value={newTitle} onChange={handleChangeTitle} />
        </div>
        <div className="new-product_title">
          <label>Date</label>
          <input
            type="date"
            min={"2023-01-1"}
            max={"2024-12-31"}
            value={newDate}
            onChange={handleChangeDate}
          />
        </div>
        <button>Add product</button>
      </div>
    </form>
  );
};

export default ProductForm;
