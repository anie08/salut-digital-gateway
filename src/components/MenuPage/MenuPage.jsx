import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import CategorySlider from '../CategorySlider/CategorySlider';
import MenuGrid from '../MenuGrid/MenuGrid';
import FloatingCart from '../FloatingCart/FloatingCart';
import { useCart } from '../../context/CartContext';
import './MenuPage.css';

export default function MenuPage() {
  const [showTableSelect, setShowTableSelect] = useState(() => {
    return localStorage.getItem('tableNumber') ? false : true;
  });
  
  const [tableNumber, setTableNumber] = useState(() => localStorage.getItem('tableNumber'));
  const [lang, setLang] = useState('am');
  const [selectedCategory, setSelectedCategory] = useState('BREAKFAST');
  const [selectedSubCategory, setSelectedSubCategory] = useState('ALL');
  const { cart } = useCart();

  const handleTableSelect = (num) => {
    localStorage.setItem('tableNumber', num); 
    setTableNumber(num);
    setShowTableSelect(false);
  };

  return (
    <div className="pageContainer">
      {showTableSelect ? (
        <div className="tableOverlay">
          <div className="tableModal">
            <h2>Ընտրեք սեղանը</h2>
            <div className="tableGrid">
              {[...Array(12)].map((_, i) => (
                <button key={i} onClick={() => handleTableSelect(i + 1)} className="tableBtn">
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header lang={lang} setLang={setLang} tableNumber={tableNumber} />
          <CategorySlider 
            selectedCategory={selectedCategory} 
            setSelectedCategory={(cat) => { setSelectedCategory(cat); setSelectedSubCategory('ALL'); }}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
          />
          <MenuGrid 
            selectedCategory={selectedCategory} 
            selectedSubCategory={selectedSubCategory} 
            lang={lang} 
          />
          {cart && cart.length > 0 && <FloatingCart cart={cart} />}
        </>
      )}
    </div>
  );
}