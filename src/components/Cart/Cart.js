import React from "react";
import "./Cart.css";

const Cart = props => {
  const cart = props.cart;
  console.log(cart);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price * product.quantity;
  }
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  let vat = (total / 10).toFixed(2);

  const grandTotal = (total + shipping + Number(vat)).toFixed(2);

  const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <div className="order-items">
      <h3>Order Summary</h3>
      <p>Items Ordered {cart.length}</p>
      <p>Product Price {formatNumber(total)}</p>
      <p>
        <small> Shipping Cost:{shipping} </small>
      </p>
      <p>
        <small> Vat: {vat} </small>
      </p>
      <h4>Total Price: {grandTotal}</h4>
      {props.children}
    </div>
  );
};

export default Cart;
