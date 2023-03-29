import React from "react";
import "./styles.css";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Products from "./components/Products";
import Cart from "./components/Cart";

import { data } from "./data";
const App = (props) => {
  console.log(props);
  return (
    <div className="App">
      <h1>Alışveriş Sepeti Yapımı</h1>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    // cart: state.cart,
  };
};

export default connect(mapStateToProps)(App);
