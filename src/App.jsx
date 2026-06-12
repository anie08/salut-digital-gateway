import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Քո իրականում գոյություն ունեցող կոմպոնենտները
import SplashScreen from './components/SplashScreen/SplashScreen';
import MenuPage from './components/MenuPage/MenuPage';

// 1. Ժամանակավոր Գլխավոր Ընտրության Էջ (SelectionPage-ի փոխարեն)
function SelectionPageMock() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFCEB', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#1E3322', padding: '20px', fontFamily: 'serif' }}>
      <h1 style={{ letterSpacing: '0.1em', marginBottom: '40px' }}>SALUT CAFE</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '300px' }}>
        <a href="#/menu/dine_in/1" style={{ padding: '15px', backgroundColor: '#1E3322', color: '#FFFCEB', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold', textALIGN: 'center', textTransform: 'uppercase', fontSize: '0.9rem' }}>🍽️ Տեղում (Table 1)</a>
        <a href="#/menu/delivery" style={{ padding: '15px', backgroundColor: 'rgba(30, 51, 34, 0.05)', color: '#1E3322', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold', textALIGN: 'center', border: '2px solid #1E3322', textTransform: 'uppercase', fontSize: '0.9rem' }}>🚀 Առաքում</a>
      </div>
    </div>
  );
}

// 2. Ժամանակավոր Զամբյուղի Էջ (CartPage-ի փոխարեն)
function CartPageMock() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFCEB', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#1E3322', fontFamily: 'serif' }}>
      <h2>Զամբյուղը պատրաստման փուլում է...</h2>
      <a href="#/home" style={{ marginTop: '20px', color: '#1E3322', fontWeight: 'bold' }}>← Հետ գնալ</a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          {/* 1. Սկզբից բացվում է քո լոգոն */}
          <Route path="/" element={<SplashScreen />} />
          
          {/* 2. Գլխավոր էջը՝ տեղում/առաքում ընտրությունը */}
          <Route path="/home" element={<SelectionPageMock />} />
          
          {/* 3. Քո մենյուի էջը՝ կապված սեղանի հետ */}
          <Route path="/menu/:type/:tableNumber" element={<MenuPage />} />
          <Route path="/menu/:type" element={<MenuPage />} />
          
          {/* 4. Զամբյուղի էջը */}
          <Route path="/cart" element={<CartPageMock />} />
          
          {/* Ցանկացած այլ սխալ հասցեի դեպքում տանում ենք home */}
          <Route path="*" element={<SelectionPageMock />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;