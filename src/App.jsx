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

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  //   if (category === "") {
  //     setFilteredProducts(products);
  //   } else {
  //     const filtered = products.filter(
  //       (product) => product.category === category
  //     );
  //     setFilteredProducts(filtered);
  //   }
  // };

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === productId);
      if (index !== -1) {
        const newCart = [...prev];
        newCart.splice(index, 1);
        return newCart;
      }
      return prev;
    });
  };

  return (
    <main className="app">
      <header className="app_header">
        <h1 className="app_title">Goods Store</h1>
      </header>

      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <section className="cart-container">
        <Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />
        <span className="cart-count">Items in cart: {cart.length}</span>
      </section>

      <section>
        {loading ? (
          <Loader />
        ) : filteredProducts.length > 0 ? (
          <ProductList
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        ) : (
          <p className="app_no-products">No products found.</p>
        )}
      </section>
    </main>
  );
}

export default App;
