// Checkout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

export default function Checkout() {
  const { cart, orderType, dispatch } = useCart();
  const navigate = useNavigate();


  const itemsPrice = cart ? cart.reduce((sum, item) => sum + (item.price * item.qty || 0), 0) : 0;
  const serviceFee = orderType === 'dineIn' ? itemsPrice * 0.10 : 0;
  const deliveryFee = orderType === 'delivery' ? 600 : 0;
  const finalPrice = itemsPrice + serviceFee + deliveryFee;

  if (!cart || cart.length === 0) {
    return (
      <div className="emptyCheckout">
        <h2>Ձեր զամբյուղը դատարկ է</h2>
        <button onClick={() => navigate('/')} className="backMenuBtn">Վերադառնալ Մենյու</button>
      </div>
    );
  }

  return (
    <div className="checkoutPage">
      <div className="checkoutHeader">
        <button onClick={() => navigate(-1)} className="backBtn">⬅ Հետ</button>
        <h1>Ձեր Չեկը</h1>
      </div>

      
      <div className="receiptItems">
        {cart.map((item) => (
          <div key={item.id} className="receiptItem">
            <div className="itemInfo">
              <span className="itemName">
                {item.name && typeof item.name === 'object' ? (item.name['am'] || item.name['en']) : item.name}
              </span>
            </div>
            
            
            <div className="receiptActions">
              <div className="checkoutCounter">
                <button 
                  className="counterBtn minus"
                  onClick={() => dispatch({ type: 'REMOVE_ONE', payload: item.id })}
                >
                  -
                </button>
                <span className="checkoutQty">{item.qty}</span>
                <button 
                  className="counterBtn plus"
                  onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}
                >
                  +
                </button>
              </div>
              <span className="itemPrice">{(item.price * item.qty).toLocaleString()} ֏</span>
            </div>
          </div>
        ))}
      </div>

      <hr className="receiptDivider" />

      
      <div className="receiptDetails">
        <div className="receiptRow">
          <span>Ապրանքներ՝</span>
          <span>{itemsPrice.toLocaleString()} ֏</span>
        </div>
        
        {orderType === 'dineIn' && (
          <div className="receiptRow feeRow">
            <span>Սպասարկում (10%)՝</span>
            <span>+{serviceFee.toLocaleString()} ֏</span>
          </div>
        )}

        {orderType === 'delivery' && (
          <div className="receiptRow feeRow">
            <span>Առաքման վճար՝</span>
            <span>+{deliveryFee.toLocaleString()} ֏</span>
          </div>
        )}

        <hr className="receiptDivider" />

        <div className="receiptRow totalRow">
          <span>Վճարման ենթակա է՝</span>
          <span>{finalPrice.toLocaleString()} ֏</span>
        </div>
      </div>

      
      <button 
        onClick={() => {
          alert('Պատվերը հաջողությամբ ուղարկվեց Salut!');
          dispatch({ type: 'CLEAR_CART' });
          navigate('/');
        }} 
        className="confirmOrderBtn"
      >
        Հաստատել Պատվերը
      </button>
    </div>
  );
}
