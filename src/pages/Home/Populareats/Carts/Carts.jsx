import React from "react";
import "animate.css";
import { FaRegHeart, FaStar } from "react-icons/fa";
import Cola from "../../../../assets/coca.png";
import Burger from "../../../../assets/burger.png";
import Steak from "../../../../assets/steak.png";
import Shourma from "../../../../assets/shourma.png";
import IPizza from "../../../../assets/pizza.png";
import "./carts.css";

const Carts = () => {
  return (
    //  animate__animated animate__bounceInDown <--- this is animation
    <div className="carts__section ">
      <div className="cart__items">
        <div className="cart__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Cola} alt="coca-cola" />
        </div>

        <div className="cart__item-about">
          <a href="/coca-cola" className="cart-item">
            <h3>Coca-Cola 1.5 litr</h3>
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
          <form action="">
            <div className="cart__item-addRemove">
              <button>-</button>
              <input type="text" name="" id="" placeholder="0" />
              <button>+</button>
            </div>

            <button className="deliver">Buyurtma Berish</button>
          </form>
        </div>
      </div>

      <div className="cart__items">
        <div className="cart__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Burger} alt="coca-cola" />
        </div>

        <div className="cart__item-about">
          <a href="idn" className="cart-item">
            <h3>American Burger</h3>
            <div className="cart__item-price">
              <p>25 000 so’m</p>

              <div className="cart__item-star">
                <FaStar color="#FAC917" />
                <small>4.9(50 baho)</small>
              </div>
            </div>
          </a>
        </div>

        <div className="cart__item-buttons">
          <form action="">
            <div className="cart__item-addRemove">
              <button>-</button>
              <input type="text" name="" id="" placeholder="0" />
              <button>+</button>
            </div>

            <button className="deliver">Buyurtma Berish</button>
          </form>
        </div>
      </div>
      <div className="cart__items">
        <div className="cart__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Steak} alt="coca-cola" />
        </div>

        <div className="cart__item-about">
          <a href="idn" className="cart-item">
            <h3>American Steak</h3>
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
          <form action="">
            <div className="cart__item-addRemove">
              <button>-</button>
              <input type="text" name="" id="" placeholder="0" />
              <button>+</button>
            </div>

            <button className="deliver">Buyurtma Berish</button>
          </form>
        </div>
      </div>
      <div className="cart__items">
        <div className="cart__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Shourma} alt="coca-cola" />
        </div>

        <div className="cart__item-about">
          <a href="idn" className="cart-item">
            <h3>Shourma</h3>
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
          <form action="">
            <div className="cart__item-addRemove">
              <button>-</button>
              <input type="text" name="" id="" placeholder="0" />
              <button>+</button>
            </div>

            <button className="deliver">Buyurtma Berish</button>
          </form>
        </div>
      </div>
      <div className="cart__items">
        <div className="cart__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={IPizza} alt="coca-cola" />
        </div>

        <div className="cart__item-about">
          <a href="idn" className="cart-item">
            <h3
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Italian Pizza pomidorlik.
            </h3>
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
          <form action="">
            <div className="cart__item-addRemove">
              <button>-</button>
              <input type="text" name="" id="" placeholder="0" />
              <button>+</button>
            </div>

            <button className="deliver">Buyurtma Berish</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Carts;
