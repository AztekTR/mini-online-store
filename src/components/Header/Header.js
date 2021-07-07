import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { totalPrice } from "../../reducers/productSlice";
import styles from "./Header.module.scss";

function Header() {
  const price = useSelector(totalPrice);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/cart" className={styles.link}>
        <button className={styles.button}>
          Cart {price > 0 && `${price}$`}
        </button>
      </Link>
    </header>
  );
}

export default withRouter(Header);
