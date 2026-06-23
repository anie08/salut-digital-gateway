import { useCart } from '../../context/CartContext';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingCart.css';

export default function FloatingCart() {
  const { cart, orderType, dispatch } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
  const itemsPrice = cart.reduce((sum, item) => sum + (item.price * item.qty || 0), 0);

  const serviceFee = orderType === 'dineIn' ? itemsPrice * 0.10 : 0;
  const deliveryFee = orderType === 'delivery' ? 600 : 0;
  const finalPrice = itemsPrice + serviceFee + deliveryFee;

  if (cart.length === 0) return null;

  return (
    <div className="cartToastContainer">
      <div className="orderTypeSelector">
        <button 
          className={`typeBtn ${orderType === 'dine
