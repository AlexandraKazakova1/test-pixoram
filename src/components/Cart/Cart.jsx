import React from "react";
import "./Cart.scss";

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>no products</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart__item">
                <span>
                  {item.title} — ${item.price}
                </span>
                <button onClick={() => onRemoveFromCart(item.id)}>✕</button>
              </li>
            ))}
          </ul>
          <div className="cart__total">
            Total Price: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
