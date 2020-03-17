import React from "react";

const Product = (props) => {
  console.log(props.product);
  const { name } = props.product;
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};

export default Product;
