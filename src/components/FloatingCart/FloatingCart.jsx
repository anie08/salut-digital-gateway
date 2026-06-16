import React from 'react';
import './FloatingCart.css';

export default function FloatingCart({ cart, setIsModalOpen }) {
  const safeCart = cart || []; 
  
  const totalItems = safeCart.reduce((sum, item) => sum + (item.qty || 0), 0);
  const totalPrice = safeCart.reduce((sum, item) => sum + (item.price * item.qty || 0), 0);

  if (safeCart.length === 0) return null;

  return (
    <div className="cartToast">
      <div className="leftSection">
        <div className="badge">{totalItems}</div>
        <div>
          <p className="label">Զամբյուղ</p>
          <p className="totalPrice">{totalPrice.toLocaleString()} ֏</p>
        </div>
      </div>
      <button onClick={() => setIsModalOpen(true)} className="orderBtn">
        Պատվիրել
      </button>
    </div>
  );
}