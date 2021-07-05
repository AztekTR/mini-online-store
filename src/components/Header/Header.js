import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/cart" className={styles.link}>
        <button className={styles.button}>Cart</button>
      </Link>
    </header>
  );
}

export default withRouter(Header);
