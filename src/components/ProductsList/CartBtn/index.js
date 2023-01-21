import React from "react";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";
const CartButtnos = ({ product }) => {
  const { cartList } = useSelector((state) => state.cart);

  const cartCount = useMemo(() => {
    return cartList?.find((item) => item?.id === product?.id)?.count;
  }, [cartList]);

  return (
    <>
      {cartCount > 0 ? (
        <AfterCart productID={product?.id} cartCount={cartCount} />
      ) : (
        <BeforeCart product={product} />
      )}
    </>
  );
};

export default CartButtnos;
