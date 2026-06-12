// src/components/MenuPage/MenuPage.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import CategorySlider from '../CategorySlider/CategorySlider';
import MenuGrid from '../MenuGrid/MenuGrid';
import FloatingCart from '../FloatingCart/FloatingCart';
import { useCart } from '../../context/CartContext';
import styles from './MenuPage.module.css'; 

export default function MenuPage() {
  const { type, tableNumber } = useParams();
  
  const [selectedCategory, setSelectedCategory] = useState('BREAKFAST');
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <CategorySlider selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <MenuGrid selectedCategory={selectedCategory} />

      {totalItems > 0 && (
        <FloatingCart cart={cart} />
      )}
    </div>
  );
}