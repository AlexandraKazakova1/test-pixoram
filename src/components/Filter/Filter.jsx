import React from "react";
import "./Filter.scss";

const Filter = ({ categories, selectedCategory, onCategoryChange }) => (
  <div className="category-filter">
    <button
      className={selectedCategory === "" ? "active" : ""}
      onClick={() => onCategoryChange("")}
    >
      All
    </button>
    {categories.map((cat) => (
      <button
        key={cat}
        className={selectedCategory === cat ? "active" : ""}
        onClick={() => onCategoryChange(cat)}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default Filter;
