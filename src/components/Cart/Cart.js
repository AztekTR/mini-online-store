import React from "react";
import { CartProduct } from '../CartProduct/CartProduct'
import styles from "./Cart.module.scss";

export function Cart() {
  return (
    <div className="welcome-section">
      <h1 className="main-header">Cart!</h1>
      <div className={styles.cartProductContainer}>
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
      </div>
    </div>
  );
}
