import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../src/reducers/productSlice";
import Header from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";
import { Cart } from "./components/Cart/Cart";
import "./App.scss";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts())
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
