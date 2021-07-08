import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsInCart } from "../../reducers/productSlice";
import {
  incrementProductCounter,
  decrementProductCounter,
  deleteProductFromCart,
} from "../../reducers/productSlice";
import styles from "./CartProduct.module.scss";

export function CartProduct(props) {
  const dispatch = useDispatch();
  const productsCart = useSelector(productsInCart);

  useEffect(() => {
    if (productsCart[props.name] < 1) {
      dispatch(deleteProductFromCart(props.name));
    }
  }, [dispatch, productsCart, props.name]);

  return (
    <div className={styles.productCard}>
      <img className={styles.image} src={props.image} alt="product"></img>
      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{props.name}</p>
          <p className={styles.description}>{props.description}</p>
          <p className={styles.description}>{`Ціна - ${props.price}.`}</p>
        </div>
        <div className={styles.changeNumberContainer}>
          <button
            className={styles.changeNumberButton}
            onClick={() => dispatch(decrementProductCounter(props.name))}
          >
            -
          </button>
          <div className={styles.number}>{productsCart[props.name]}</div>
          <button
            className={styles.changeNumberButton}
            onClick={() => dispatch(incrementProductCounter(props.name))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
