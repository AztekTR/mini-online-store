import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToList } from "../src/reducers/productSlice";
import Header from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";
import { Cart } from "./components/Cart/Cart";
import "./App.scss";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((jsonArr) => {
        jsonArr.forEach((product) => dispatch(addProductToList(product)));
        console.log(jsonArr);
      });
  });

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path={"/cart"}>
            <Cart />
          </Route>
          <Route path={"/"}>
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
