import React, { useState } from "react";
import Header from "../Header";

const Shopping = () => {
  const [cart, setCart] = useState([]);
  const calculateTotalPrice = () => {
    // Your logic to calculate the total price based on items in the cart
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  return (
    <div>
      <Header />
      <h2>Shopping Bag</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: ${item.price.toFixed(2)}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Shopping;
