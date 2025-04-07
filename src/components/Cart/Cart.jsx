import React from "react";
import "./Cart.scss";

const Cart = ({ cartItems }) => (
  <div className="cart">
    <h2>Кошик</h2>
    {cartItems.length === 0 ? (
      <p>Кошик порожній</p>
    ) : (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} — ${item.price}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;
