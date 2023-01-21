import React from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import { addToCart } from "../../../redux/cart";

const BeforeCart = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="before-cart">
      <button
        className="add-cart-button"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to cart
      </button>
    </div>
  );
};

export default BeforeCart;
