import React from 'react';
import './item.css';

const Item = ({ cart, updateCart }) => {
  const removeFromCart = (id) => {
    updateCart(cart.filter(item => item.id !== id));
  };

  const changeQuantity = (id, quantity) => {
    updateCart(cart.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    ));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
              <p>
                Quantity: 
                <input 
                  type="number" 
                  value={item.quantity} 
                  onChange={(e) => changeQuantity(item.id, e.target.value)} 
                />
              </p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Item;
