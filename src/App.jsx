import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import SplashScreen from "./components/SplashScreen/SplashScreen";
import MenuPage from "./components/MenuPage/MenuPage";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import ItemDetailPage from "./components/ItemDetailPage/ItemDetailPage";
import "./App.css";

import { Link } from "react-router-dom";
function SelectionPage() {
  return (
    <div className="centerPage">
      <h1 className="logoText">SALUT CAFE</h1>
      <div className="choiceBox">
        <Link to="/menu/dine_in/0" className="primaryBtn">
          🍽️ Տեղում
        </Link>
        <Link to="/menu/delivery" className="secondaryBtn">
          🚀 Առաքում
        </Link>
      </div>
    </div>
  );
}

function CartPage() {
  return (
    <div className="centerPage">
      <h2>Cart coming soon...</h2>
      <a href="/" className="linkBtn">
        ← Back
      </a>
    </div>
  );
}

export default function App() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 3000);
  }, []);

  return (
    <div>
      {show && <SplashScreen />}
      <Router>
        <CartProvider>
          <BackgroundVideo />
          <Routes>
            <Route path="/" element={<SelectionPage />} />
            <Route path="/menu/:type/:tableNumber" element={<MenuPage />} />
            <Route path="/menu/:type" element={<MenuPage />} />
            <Route path="/item/:id" element={<ItemDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}
