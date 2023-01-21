import React from "react";
import products from "../../api/product.json";
import AfterCart from "./CartBtn/AfterCart";
import BeforeCart from "./CartBtn/BeforeCart";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import CartButtnos from "./CartBtn";

const ProductsList = () => {
  const { cartCount, cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(cartList);

  return (
    <section className="container">
      {products.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt={key} />
          <h3>{product?.title}</h3>
          <CartButtnos product={product} />
        </div>
      ))}
    </section>
  );
};

export default ProductsList;
