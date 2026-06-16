import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ItemDetailPage.css';
import { menuItems } from '../../data/menudata';
import { useCart } from '../../context/CartContext';

export default function ItemDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();

  const item = menuItems.find(i => i.id === id);
  const inCart = cart?.find(i => i.id === id);

  if (!item) return <div className="centerPage">Not found</div>;

  return (
    <div className="detailPage">
      <button onClick={() => navigate('/menu/dine_in/1')} className="backBtn">
        ← Back
      </button>

      <img src={item.image} alt={item.name.am} className="detailImg" />

      <div className="detailBox">
        <h1>{item.name.am}</h1>
        <p>{item.price} ֏</p>

        {inCart ? (
          <div>
            <button onClick={() => dispatch({type:'REMOVE_ONE', payload:item.id})}>-</button>
            <span>{inCart.qty}</span>
            <button onClick={() => dispatch({type:'ADD_TO_CART', payload:item})}>+</button>
          </div>
        ) : (
          <button onClick={() => dispatch({type:'ADD_TO_CART', payload:item})}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}