import { createContext, useContext, useReducer } from "react";

const savedCart = localStorage.getItem('salut_cart');
const savedOrderType = localStorage.getItem('salut_order_type');

const initialState = {
  cart: savedCart ? JSON.parse(savedCart) : [],
  orderType: savedOrderType ? savedOrderType : 'dineIn'
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      let updatedCart;
      
      if (existingItem) {
        updatedCart = state.cart.map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, qty: 1 }];
      }

      
      localStorage.setItem('salut_cart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }
    
    case 'REMOVE_ONE': {
      const updatedCart = state.cart.map(item =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      ).filter(item => item.qty > 0);

      localStorage.setItem('salut_cart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }

    case 'SET_ORDER_TYPE': {
      localStorage.setItem('salut_order_type', action.payload);
      return { ...state, orderType: action.payload };
    }

    case 'CLEAR_CART': {
      localStorage.removeItem('salut_cart');
      return { ...state, cart: [], orderType: 'dineIn' };
    }

    default:
      return state;
  }
}

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, orderType: state.orderType, dispatch }}>
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
