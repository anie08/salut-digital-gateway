import React from 'react';
import { Link } from 'react-router-dom';
import './MenuGrid.css';
import { menuItems } from '../../data/menudata';
import { useCart } from '../../context/CartContext';

export default function MenuGrid({ selectedCategory, selectedSubCategory, lang }) {
  const { cart, dispatch } = useCart();

  const items = menuItems.filter(item => {
    const catMatch = item.category === selectedCategory;
    const subMatch = selectedSubCategory === 'ALL' ? true : item.subcategory === selectedSubCategory;
    return catMatch && subMatch;
  });

  return (
    <div className="grid">
      {items.map(item => {
        const inCart = cart.find(i => i.id === item.id);
        
        return (
          <Link to={`/item/${item.id}`} className="card" key={item.id}>
            <div className="cardInner">
              <div className="imgWrapper">
                {item.image && <img src={item.image} className="image" alt="" />}
              </div>
              <div className="info">
                <h3>{item.name[lang] || item.name['am']}</h3>
                <p className="price">{item.price} ֏</p>
                
                <div className="actions" onClick={(e) => e.preventDefault()}>
                  {inCart ? (
                    <div className="counter">
                      <button onClick={() => dispatch({type:'REMOVE_ONE', payload:item.id})}>-</button>
                      <span>{inCart.qty}</span>
                      <button onClick={() => dispatch({type:'ADD_TO_CART', payload:item})}>+</button>
                    </div>
                  ) : (
                    <button className="addBtn" onClick={() => dispatch({type:'ADD_TO_CART', payload:item})}>
                      + Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}