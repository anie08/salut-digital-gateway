import React from 'react';
import styles from './MenuGrid.module.css';
import { menuItems } from '../../data/menudata'; 
import { useCart } from '../../context/CartContext'; 

export default function MenuGrid({ selectedCategory }) {
  const { cart, dispatch } = useCart();

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className={styles.grid}>
      {filteredItems.map((item) => {
        const cartItem = cart.find(i => i.id === item.id);

        return (
          <div key={item.id} className={styles.card}>
            <div className={styles.imgWrapper}>
              {item.image && <img src={item.image} alt={item.name?.am} className={styles.image} />}
              <div className={styles.overlay} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.title}>{item.name?.am}</h3>
              <div className={styles.actions}>
                <span className={styles.price}>{item.price.toLocaleString()} ֏</span>
                
                {cartItem ? (
                  <div className={styles.counter}>
                    <button 
                      onClick={() => dispatch({ type: 'REMOVE_ONE', payload: item.id })} 
                      className={styles.countBtn}
                    >
                      -
                    </button>
                    <span className={styles.qty}>{cartItem.qty}</span>
                    <button 
                      onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })} 
                      className={styles.countBtn}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  // Եթե զամբյուղում չէ՝ ցուցադրում ենք «Ավելացնել» կոճակը
                  <button 
                    onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })} 
                    className={styles.addBtn}
                  >
                    + Add
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}