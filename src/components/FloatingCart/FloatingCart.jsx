import { useCart } from "../../context/CartContext"; // Օգտագործում ենք քո կոնտեքստը
// FloatingCart.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./FloatingCart.css";

export default function FloatingCart() {
  const { cart, orderType, dispatch } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
  const itemsPrice = cart.reduce(
    (sum, item) => sum + (item.price * item.qty || 0),
    0,
  );

  const serviceFee = orderType === "dineIn" ? itemsPrice * 0.1 : 0;
  const deliveryFee = orderType === "delivery" ? 600 : 0;
  const finalPrice = itemsPrice + serviceFee + deliveryFee;

  if (cart.length === 0) return null;

  return (
    <div className="cartToastContainer">
      <div className="orderTypeSelector">
        <button
          className={`typeBtn ${orderType === "dineIn" ? "active" : ""}`}
          onClick={() =>
            dispatch({ type: "SET_ORDER_TYPE", payload: "dineIn" })
          }
        >
          Տեղում (10%)
        </button>
        <button
          className={`typeBtn ${orderType === "delivery" ? "active" : ""}`}
          onClick={() =>
            dispatch({ type: "SET_ORDER_TYPE", payload: "delivery" })
          }
        >
          Առաքում (+600 ֏)
        </button>
      </div>

      <div className="cartToast">
        <div className="leftSection">
          <div className="badge">{totalItems}</div>
          <div>
            <p className="label">Ընդհանուր</p>
            <p className="totalPrice">{finalPrice.toLocaleString()} ֏</p>
          </div>
        </div>
        <button onClick={() => navigate("/checkout")} className="orderBtn">
          Պատվիրել
        </button>
      </div>
    </div>
  );
}
