import React from "react";
import { reset } from "redux-form";
import { useSelector } from "react-redux";
import { store } from "../../app/store";
import { CartProduct } from "../CartProduct/CartProduct";
import {
  productsInCart,
  allProducts,
  totalPrice,
} from "../../reducers/productSlice";
import CartForm from "../CartForm/CartForm";
import styles from "./Cart.module.scss";

export function Cart(props) {
  const productsCart = useSelector(productsInCart);
  const productsAll = useSelector(allProducts);
  const price = useSelector(totalPrice);

  const onSubmit = (formData) => {
    console.log(Object.assign({}, formData, productsCart, {totalPrice: price}));
    store.dispatch(reset("order"));
  };

  return (
    <div className="cart-section">
      <h1 className="main-header">Cart</h1>
      <div className={styles.container}>
        <div className={styles.cartProductContainer}>
          {productsAll
            .filter((product) => product.name in productsCart)
            .map((product) => (
              <CartProduct
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
                number={1}
              />
            ))}
        </div>
        <CartForm onSubmit={onSubmit} />
      </div>
      <p className={styles.total}>{`Total: ${price}$`}</p>
    </div>
  );
}
