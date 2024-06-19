import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home';
import ItemDetails from './page/ItemDetails';
import ItemPage from './page/ItemPage';

const App = () => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

 
  return (
    <Router>
      <Navbar cartItemCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ItemDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<ItemPage cart={cart} updateCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App;



