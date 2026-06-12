import React from 'react';
import styles from './OrderModal.css';

export default function OrderModal({ 
  orderType, setOrderType, tableNumber, setTableNumber, 
  phoneNumber, setPhoneNumber, setIsModalOpen, sendOrderToTelegram 
}) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.sheet}>
        <div className={styles.handle} />
        <h2 className={styles.modalTitle}>Պատվերի Տեսակը</h2>
        
        <div className={styles.typeGrid}>
          {[
            { id: 'dine_in', label: 'Տեղում' },
            { id: 'delivery', label: 'Առաքում' },
            { id: 'takeaway', label: 'Տանելու' }
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setOrderType(t.id)}
              className={`${styles.typeBtn} ${orderType === t.id ? styles.activeType : ''}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {orderType === 'dine_in' && (
          <div className={styles.inputGroup}>
            <label className={styles.label}>Սեղանի Համարը`</label>
            <input type="number" placeholder="օրինակ՝ 4" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} className={styles.input} />
          </div>
        )}

        {(orderType === 'delivery' || orderType === 'takeaway') && (
          <div className={styles.inputGroup}>
            <label className={styles.label}>Հեռախոսահամար`</label>
            <input type="tel" placeholder="+374 __ ___ ___" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={styles.input} />
          </div>
        )}

        <div className={styles.actions}>
          <button onClick={() => setIsModalOpen(false)} className={styles.cancelBtn}>Փակել</button>
          <button 
            onClick={sendOrderToTelegram} 
            disabled={!orderType || (orderType === 'dine_in' && !tableNumber)} 
            className={styles.submitBtn}
          >
            Ուղարկել
          </button>
        </div>
      </div>
    </div>
  );
}