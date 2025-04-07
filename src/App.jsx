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
      .catch((error) => console.error("Помилка при завантаженні:", error))
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

  return (
    <div className="app">
      <h1 className="app__title">Магазин товарів</h1>
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {loading ? (
        <Loader />
      ) : (
        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />
      )}

      <Cart cartItems={cart} />
    </div>
  );
}

export default App;
