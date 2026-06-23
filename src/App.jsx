import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import Footer from './components/Footer/Footer';
import SplashScreen from "./components/SplashScreen/SplashScreen";
import MenuPage from "./components/MenuPage/MenuPage";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import ItemDetailPage from "./components/ItemDetailPage/ItemDetailPage";
import Checkout from "./components/CHeckout/Checkout"; 
import "./App.css";

function SelectionPage() {
  const { dispatch } = useCart();

  return (
    <div className="centerPage">
      <h1 className="logoText">SALUT CAFE</h1>
      <div className="choiceBox">
        <Link 
          to="/menu/dine_in/0" 
          className="primaryBtn"
          onClick={() => dispatch({ type: 'SET_ORDER_TYPE', payload: 'dineIn' })}
        >
          🍽️ Տեղում
        </Link>
        <Link 
          to="/menu/delivery" 
          className="secondaryBtn"
          onClick={() => dispatch({ type: 'SET_ORDER_TYPE', payload: 'delivery' })}
        >
          🚀 Առաքում
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  const [show, setShow] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="appWrapper">
          {show && <SplashScreen />}
          <BackgroundVideo />
          
          <main className="mainContent">
            <Routes>
              <Route path="/" element={<SelectionPage />} />
              <Route path="/menu/:type/:tableNumber" element={<MenuPage />} />
              <Route path="/menu/:type" element={<MenuPage />} />
              <Route path="/item/:id" element={<ItemDetailPage />} />
              
              <Route path="/cart" element={<Checkout />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          {!show && <Footer />}
        </div>
      </Router>
    </CartProvider>
  );
}
