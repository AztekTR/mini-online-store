import React from "react";
import { useSelector } from "react-redux";
import { Product } from "../Product/Product";
import { allProducts } from "../../reducers/productSlice"
import styles from "./ProductList.module.scss";

export function ProductList(props) {
  const products = useSelector(allProducts);

  return (
    <div className={styles.container}>
      <h1 className="main-header">Product List</h1>
      <div className={styles.productsContainer}>
        {products.length > 0
          ? products.map((product) => (
              <Product
                key={product.id.toString()}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            ))
          : "No products((("}
      </div>
    </div>
  );
}
