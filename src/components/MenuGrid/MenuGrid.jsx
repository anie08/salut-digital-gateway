import React from 'react';
import styles from './MenuGrid.css';
import { menuItems } from '../../data/menudata';

import { useCart } from '../../context/CartContext'; // <--- Կանչում ենք այստեղ

export default function MenuGrid({ selectedCategory, lang }) {
  const { cart, dispatch } = useCart(); // <--- Վերցնում ենք state-ը ու dispatch-ը

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className={styles.grid}>
      {filteredItems.map((item) => {
        const cartItem = cart.find(i => i.id === item.id);
        return (
          <div key={item.id} className={styles.card}>
            {/* ... մնացած նույն UI կոդը ... */}
            <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}>
              {cartItem ? `Ավելացված է (${cartItem.qty})` : '+ Add'}
            </button>
          </div>
        );
      })}
    </div>
  );
}