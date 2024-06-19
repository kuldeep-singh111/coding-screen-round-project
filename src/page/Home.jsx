import React, { useEffect, useState } from 'react';
import './home.css';
import ProductItem from '../components/ProductItem';

const Home = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

 
  return (
    <div className="home-page">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
