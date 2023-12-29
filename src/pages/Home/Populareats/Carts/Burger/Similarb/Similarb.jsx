import React from "react";
import "./similarb.css";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import Burger from "../../../../../../assets/burger.png";
import Steak from "../../../../../../assets/steak.png";
import IPizza from "../../../../../../assets/pizza-tomato.png";
import Pizza from "../../../../../../assets/pizza.png";
import Shourma from "../../../../../../assets/shourma.png";

const Similarb = () => {
  return (
    <div className="similarb__section">
      <div className="similarb__items">
        <div className="similarb__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={IPizza} alt="coca-cola" />
        </div>

        <div className="similarb__item-about">
          <a href="/coca-cola" className="similarb-item">
            <h3>Coca-Cola 1.5 litr</h3>
            <div className="similarb__item-price">
              <p>25 000 so’m</p>

              <div className="similarb__item-star">
                <FaStar color="#FAC917" />
                <small>5.0(150 baho)</small>
              </div>
            </div>
          </a>
        </div>

        <div className="similarb__item-buttons">
          <form action="">
            <div className="similarb__item-addRemove">
              <button>-</button>
              <input type="text" name="" id="" placeholder="0" />
              <button>+</button>
            </div>

            <button className="deliver">Buyurtma Berish</button>
          </form>
        </div>
      </div>
      <div className="similarb__items">
        <div className="similarb__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Pizza} alt="coca-cola" />
        </div>

        <div className="similarb__item-about">
          <a href="/coca-cola" className="similarb-item">
            <h3>Coca-Cola 1.5 litr</h3>
            <div className="similarb__item-price">
              <p>25 000 so’m</p>

              <div className="similarb__item-star">
                <FaStar color="#FAC917" />
                <small>5.0(150 baho)</small>
              </div>
            </div>
          </a>
        </div>

        <div className="similarb__item-buttons">
          <form action="">
            <div className="similarb__item-addRemove">
              <button>-</button>
              <input type="text" name="" id="" placeholder="0" />
              <button>+</button>
            </div>

            <button className="deliver">Buyurtma Berish</button>
          </form>
        </div>
      </div>
      <div className="similarb__items">
        <div className="similarb__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Steak} alt="coca-cola" />
        </div>

        <div className="similarb__item-about">
          <a href="/coca-cola" className="similarb-item">
            <h3>Coca-Cola 1.5 litr</h3>
            <div className="similarb__item-price">
              <p>25 000 so’m</p>

              <div className="similarb__item-star">
                <FaStar color="#FAC917" />
                <small>5.0(150 baho)</small>
              </div>
            </div>
          </a>
        </div>

        <div className="similarb__item-buttons">
          <form action="">
            <div className="similarb__item-addRemove">
              <button>-</button>
              <input type="text" name="" id="" placeholder="0" />
              <button>+</button>
            </div>

            <button className="deliver">Buyurtma Berish</button>
          </form>
        </div>
      </div>
      <div className="similarb__items">
        <div className="similarb__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Shourma} alt="coca-cola" />
        </div>

        <div className="similarb__item-about">
          <a href="/coca-cola" className="similarb-item">
            <h3>Coca-Cola 1.5 litr</h3>
            <div className="similarb__item-price">
              <p>25 000 so’m</p>

              <div className="similarb__item-star">
                <FaStar color="#FAC917" />
                <small>5.0(150 baho)</small>
              </div>
            </div>
          </a>
        </div>

        <div className="similarb__item-buttons">
          <form action="">
            <div className="similarb__item-addRemove">
              <button>-</button>
              <input type="text" name="" id="" placeholder="0" />
              <button>+</button>
            </div>

            <button className="deliver">Buyurtma Berish</button>
          </form>
        </div>
      </div>
      <div className="similarb__items">
        <div className="similarb__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Burger} alt="coca-cola" />
        </div>

        <div className="similarb__item-about">
          <a href="/coca-cola" className="similarb-item">
            <h3>Coca-Cola 1.5 litr</h3>
            <div className="similarb__item-price">
              <p>25 000 so’m</p>

              <div className="similarb__item-star">
                <FaStar color="#FAC917" />
                <small>5.0(150 baho)</small>
              </div>
            </div>
          </a>
        </div>

        <div className="similarb__item-buttons">
          <form action="">
            <div className="similarb__item-addRemove">
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

export default Similarb;
