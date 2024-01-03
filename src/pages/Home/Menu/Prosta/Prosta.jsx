import React, { useState, useEffect } from "react";

const AddToCartButton = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [list, setMessage] = useState([]);

  useEffect(() => {
    // Make an API call to the PHP backend
    fetch("/api.php")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const list1 = ["gg", "das"];
  const handleAddToCart = () => {
    setCartQuantity(cartQuantity + 1);
  };

  return (
    <div>
      <input value={list1} />
      <h1>{list}</h1>
      <p>Cart Quantity: {cartQuantity}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCartButton;
