import React from 'react';
import './itempage.css';
import Item from '../components/Item';

const ItemPage = ({ cart, updateCart }) => (
  <div className="cart-page">
    <h1 className="cart-title">Your Cart</h1>
    <Item cart={cart} updateCart={updateCart} />
  </div>
);

export default ItemPage;
