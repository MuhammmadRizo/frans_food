import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import Cola from "../../../../assets/coca.png";
import Burger from "../../../../assets/burger.png";
import Steak from "../../../../assets/steak.png";
import Shourma from "../../../../assets/shourma.png";
import IPizza from "../../../../assets/pizza.png";
import "./carts.css";

const Carts = () => {
  return (
    <div className="carts__section">
      <div className="cart__items">
        <a href="" className="cart-item">
          <div className="cart__item-image">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
            <img src={Cola} alt="coca-cola" />
          </div>

          <div className="cart__item-about">
            <h3>Coca-Cola 1.5 litr</h3>

            <div className="cart__item-price">
              <p>25 000 so’m</p>

              <div className="cart__item-star">
                <FaStar />
                <small>5.0(150 baho)</small>
              </div>
            </div>
          </div>

          <div className="cart__item-buttons">
            <form action="">
              <div className="cart__item-addRemove">
                <button>-</button>
                <input type="text" name="" id="" placeholder="0" />
                <button>+</button>
              </div>

              <button>Buyurtma Berish</button>
            </form>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Carts;
