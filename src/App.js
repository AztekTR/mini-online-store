import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";
import { Cart } from "./components/Cart/Cart";
import "./App.css";

function App() {
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
