import React from 'react';
import { Link } from 'react-router-dom';
import './Productitem.css';

const ProductItem = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} className="product-image" />
    <div style={{fontSize: '10px'}} className="product-info">
      <p className="product-title">{product.title}</p>
      <p className="product-price">${product.price}</p>
      <Link to={`/product/${product.id}`} className="product-link">View Details</Link>
    </div>
  </div>
);

export default ProductItem;
