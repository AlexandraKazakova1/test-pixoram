import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

const ProductList = ({ products, onAddToCart }) => (
  <div className="product-list">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onAddToCart={onAddToCart}
      />
    ))}
  </div>
);

export default ProductList;
