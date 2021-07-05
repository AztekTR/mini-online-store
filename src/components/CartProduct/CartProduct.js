import React from "react";
import styles from "./CartProduct.module.scss";

export function CartProduct() {
  return (
    <div className={styles.productCard}>
      <img
        className={styles.image}
        src="https://www.pngitem.com/pimgs/m/128-1288044_bananas-transparent-cliparts-banana-png-png-download.png"
        alt="banana"
      ></img>
      <div className={styles.container}>
        <p className={styles.description}>Банан дуже смачний і ароматний</p>
        <p className={styles.description}>Банани корисні, банани жовті і довгі!</p>
        <p className={styles.description}>Ах банани мої банани ммм</p>
        <button className={styles.buyButton}>Купити</button>
      </div>
    </div>
  );
}
