import React from 'react';
import styles from './CategorySlider.css';
import { menuCategories } from '../../data/menudata';

export default function CategorySlider({ selectedCategory, setSelectedCategory, lang }) {
  return (
    <div className={styles.sliderContainer}>
      {menuCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setSelectedCategory(cat.id)}
          className={`${styles.catBtn} ${selectedCategory === cat.id ? styles.activeCat : ''}`}
        >
          {cat[lang]}
        </button>
      ))}
    </div>
  );
}