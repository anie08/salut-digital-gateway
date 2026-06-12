import React from 'react';
import styles from './FloatingCart.css';

export default function FloatingCart({ cart, setIsModalOpen }) {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (cart.length === 0) return null;

  return (
    <div className={styles.cartToast}>
      <div className={styles.leftSection}>
        <div className={styles.badge}>{totalItems}</div>
        <div>
          <p className={styles.label}>Զամբյուղ</p>
          <p className={styles.totalPrice}>{totalPrice.toLocaleString()} ֏</p>
        </div>
      </div>
      <button onClick={() => setIsModalOpen(true)} className={styles.orderBtn}>
        Պատվիրել
      </button>
    </div>
  );
}