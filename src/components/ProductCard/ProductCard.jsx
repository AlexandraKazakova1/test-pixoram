import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>{product.category}</p>
    <strong>${product.price}</strong>
    <button onClick={() => onAddToCart(product)}>Add to cart</button>
  </div>
);

export default ProductCard;
