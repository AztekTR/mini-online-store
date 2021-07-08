import React from "react";
import { reset } from "redux-form";
import { useDispatch, useSelector } from "react-redux";

import { store } from "../../app/store";
import { CartProduct } from "../CartProduct/CartProduct";
import {
  productsInCart,
  allProducts,
  totalPrice,
  deleteProductFromCart,
  clearTotalPrice,
} from "../../reducers/productSlice";
import CartForm from "../CartForm/CartForm";
import styles from "./Cart.module.scss";

export function Cart(props) {
  const dispatch = useDispatch();

  const productsCart = useSelector(productsInCart);
  const productsAll = useSelector(allProducts);
  const price = useSelector(totalPrice);

  const onSubmit = (formData) => {
    //Very small validation
    if (Object.keys(productsCart).length < 1) {
      alert("No products for order!");
      return;
    }
    //Print your order
    console.log(
      Object.assign({}, formData, productsCart, { totalPrice: price })
    );
    //Clear cart
    store.dispatch(reset("order"));
    dispatch(clearTotalPrice());
    for (let product in productsCart) {
      dispatch(deleteProductFromCart(product));
    }
  };

  return (
    <div className="cart-section">
      <h1 className="main-header">Cart</h1>
      <div className={styles.container}>
        <div className={styles.cartProductContainer}>
          {Object.keys(productsCart).length > 0 ? (
            productsAll
              .filter((product) => product.name in productsCart)
              .map((product) => (
                <CartProduct
                  key={product.id.toString()}
                  name={product.name}
                  image={product.image}
                  description={product.description}
                  price={product.price}
                  number={1}
                />
              ))
          ) : (
            <p className={styles.noProduct}>{"No products in cart"}</p>
          )}
        </div>
        <CartForm onSubmit={onSubmit} />
      </div>
      <p className={styles.total}>{`Total: ${price}$`}</p>
    </div>
  );
}
