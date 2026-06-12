import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';
import SplashScreen from './components/SplashScreen/SplashScreen';
import SelectionPage from './components/SelectionPage/SelectionPage';
import TableSelection from './components/TableSelection/TableSelection';
import DeliveryAddress from './components/DeliveryAddress/DeliveryAddress';
import MenuPage from './components/MenuPage/MenuPage';
import CartPage from './components/CartPage/CartPage';

import './Global.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          
          <Route path="/home" element={<SelectionPage />} />
          
          <Route path="/table-selection" element={<TableSelection />} />
          
          <Route path="/delivery-address" element={<DeliveryAddress />} />
          
          <Route path="/menu/:type/:tableNumber" element={<MenuPage />} />
          <Route path="/menu/:type" element={<MenuPage />} />
          
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;