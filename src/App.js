import { useState } from "react";
import NewProduct from "./components/NewProduct";
import Product from "./components/Product";
import "./App.css";

function App() {
  // console.log("App rendered");
  const data = [
    {
      id: "p1",
      title: "Nirma",
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: "p2",
      title: "Sirf Excel",
      amount: 200,
      date: new Date(2021, 2, 2),
    },
    {
      id: "p3",
      title: "Tide",
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: "p4",
      title: "Maggi",
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  const [products, setProducts] = useState(data);

  const newProduct = (newProduct) => {
    console.log(newProduct);
    setProducts((prev) => {
      return [...prev, newProduct];
    });
  };
  return (
    <div className="App">
      <NewProduct newProduct={newProduct} />
      <Product products={products} />
    </div>
  );
}

export default App;
