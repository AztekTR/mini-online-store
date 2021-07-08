import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { allProducts } from "../../reducers/productSlice";
import { Product } from "../Product/Product";
import Loader from "../Loader/Loader";
import styles from "./ProductList.module.scss";

export function ProductList(props) {
  const [loading, setLoading] = useState(true);
  const products = useSelector(allProducts);

  useEffect(() => products.length > 0 && setLoading(false), [products]);

  return (
    <div className={styles.container}>
      <h1 className="main-header">Product List</h1>
      {loading && <Loader />}
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
          : loading
          ? null
          : "No products((("}
      </div>
    </div>
  );
}
