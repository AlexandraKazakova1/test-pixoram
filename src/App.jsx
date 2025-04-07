import React, { useEffect, useState } from "react";
import "./App.scss";
import { fetchProducts } from "./services/productService";
import ProductList from "./components/ProductList/ProductList";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import Loader from "./components/Loader/Loader";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = [...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error while loading:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prev) =>
      prev.filter(
        (item, index) =>
          item.id !== productId ||
          index !== prev.findIndex((p) => p.id === productId)
      )
    );
  };

  return (
    <div className="app">
      <h1 className="app__title">Goods Store</h1>
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="cart-container">
        <Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />
        <span className="cart-count">Items in cart: {cart.length}</span>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default App;
