import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// imporitng third party modules
import { connect } from 'react-redux'
// importing required Components
import Product from './components/containers/product/product'
import Checkout from './components/containers/checkout/checkout'
class App extends Component {
  render() {
    // destructring
    const {totalItems} = this.props
    return (
      <div className="full-container">
        <h5>Masala & Spices({totalItems} items)</h5>
        <div className="parent-container">
          <div className="product-container">
            <Product />
          </div>
          <div className="parent-checkout-container">
            <Checkout />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    totalItems: state.items.items.length
  }
}

export default connect(mapStateToProps)(App);
