import React from "react";

const Card = (props) => {
  console.log("card rendered");
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
