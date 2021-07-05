import React from "react";
import { Product } from "../Product/Product"
import styles from "./ProductList.module.scss";

export function ProductList() {
  return (
    <div className="welcome-section">
      <h1 className="main-header">Product List</h1>
      <div className={styles.productsContainer}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
      </div>
    </div>
  );
}
