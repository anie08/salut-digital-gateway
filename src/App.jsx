import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 

// Իմպորտ ենք անում հենց քո ունեցած կոմպոնենտները (ըստ image_11.png-ի)
import SplashScreen from './components/SplashScreen/SplashScreen'; // Սա քո լոգոյի էջն է
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import Header from './components/Header/Header';
import CategorySlider from './components/CategorySlider/CategorySlider';
import MenuGrid from './components/MenuGrid/MenuGrid';
import FloatingCart from './components/FloatingCart/FloatingCart';

// Սա քո գլխավոր Մենյուի էջի միավորված կառուցվածքն է
function MainMenuPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFCEB', position: 'relative' }}>
      <BackgroundVideo />
      <Header />
      <CategorySlider />
      <MenuGrid />
      <FloatingCart />
    </div>
  );
}

// Դատարկ էջի փոխարեն՝ սա կլինի քո տեղում/առաքում ընտրելու էջը, եթե հետագայում ուզես բացել
function HomeSelection() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFCEB', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#1E3322', padding: '20px' }}>
      <h1 style={{ fontFamily: 'serif', letterSpacing: '0.1em', marginBottom: '30px' }}>SALUT CAFE</h1>
      <a href="#/menu/dine_in/1" style={{ padding: '15px 40px', backgroundColor: '#1E3322', color: '#FFFCEB', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold', fontFamily: 'serif', textTransform: 'uppercase' }}>
        Բացել Մենյուն
      </a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          {/* 1. Առաջինը բացվում է քո SplashScreen-ը */}
          <Route path="/" element={<SplashScreen />} />
          
          {/* 2. Գլխավոր ընտրության էջը */}
          <Route path="/home" element={<HomeSelection />} />
          
          {/* 3. Մենյուի էջը՝ սեղանի համարով կամ առանց դրա */}
          <Route path="/menu/:type/:tableNumber" element={<MainMenuPage />} />
          <Route path="/menu/:type" element={<MainMenuPage />} />
          
          {/* 4. Քո զամբյուղի էջը (եթե հետագայում առանձին սարքես, հիմա կարող է տանել հետ) */}
          <Route path="/cart" element={<MainMenuPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;