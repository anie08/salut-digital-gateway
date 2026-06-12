import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  cart: []
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
          )
        };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    }
    
    case 'REMOVE_ONE':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
        ).filter(item => item.qty > 0)
      };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    default:
      return state;
  }
}

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}