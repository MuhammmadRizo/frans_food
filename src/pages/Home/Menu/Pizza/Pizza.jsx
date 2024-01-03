import React, { useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import Pizzai from "../../../../assets/pizza.png";

const Pizza = ({ addToCart }) => {
  const [count, setCount] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleAddToCart = () => {
    setCartQuantity(cartQuantity + 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleCustomNumber = (event) => {
    const customNumber = parseInt(event.target.value, 10);
    if (!isNaN(customNumber)) {
      setCount(customNumber);
    }
  };
  return (
    <div>
      <div className="cart__items">
        <div className="cart__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Pizzai} alt="coca-cola" />
        </div>

        <div className="cart__item-about">
          <a href="/pizza" className="cart-item">
            <h3>Pizza</h3>
            <div className="cart__item-price">
              <p>25 000 so’m</p>

              <div className="cart__item-star">
                <FaStar color="#FAC917" />
                <small>5.0(150 baho)</small>
              </div>
            </div>
          </a>
        </div>

        <div className="cart__item-buttons">
          <div className="cart__item-addRemove">
            <button onClick={handleDecrement}>-</button>
            <input
              type="text"
              // id="customNumber"
              value={count}
              onChange={handleCustomNumber}
              maxLength="4"
              max={100}
              style={{}}
              min={0}
            />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="deliver">Buyurtma Berish</button>
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
