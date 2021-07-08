import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../reducers/productSlice";
import styles from "./Product.module.scss";

export function Product(props) {
  const dispatch = useDispatch();

  return (
    <div className={styles.productCard}>
      <img className={styles.image} src={props.image} alt="product"></img>
      <div className={styles.container}>
        <h3 className={styles.name}>{props.name}</h3>
        <p className={styles.description}>{props.description}.</p>
        <p className={styles.price}>Ціна - {props.price}$.</p>
        <button
          className={styles.buyButton}
          onClick={() => dispatch(addProductToCart(props.name))}
        >
          Купити
        </button>
      </div>
    </div>
  );
}
