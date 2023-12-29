import React from "react";
import "./similar.css";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import Cola from "../../../../../../assets/cola15.png";

const Similar = () => {
  return (
    <div className="similar__section">
      <div className="similar__items">
        <div className="similar__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Cola} alt="coca-cola" />
        </div>

        <div className="similar__item-about">
          <a href="/coca-cola" className="similar-item">
            <h3>Coca-Cola 1.5 litr</h3>
            <div className="similar__item-price">
              <p>25 000 so’m</p>

              <div className="similar__item-star">
                <FaStar color="#FAC917" />
                <small>5.0(150 baho)</small>
              </div>
            </div>
          </a>
        </div>

        <div className="similar__item-buttons">
          <form action="">
            <div className="similar__item-addRemove">
              <button>-</button>
              <input type="text" name="" id="" placeholder="0" />
              <button>+</button>
            </div>

            <button className="deliver">Buyurtma Berish</button>
          </form>
        </div>
      </div>
      <div className="similar__items">
        <div className="similar__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Cola} alt="coca-cola" />
        </div>

        <div className="similar__item-about">
          <a href="/coca-cola" className="similar-item">
            <h3>Coca-Cola 1.5 litr</h3>
            <div className="similar__item-price">
              <p>25 000 so’m</p>

              <div className="similar__item-star">
                <FaStar color="#FAC917" />
                <small>5.0(150 baho)</small>
              </div>
            </div>
          </a>
        </div>

        <div className="similar__item-buttons">
          <form action="">
            <div className="similar__item-addRemove">
              <button>-</button>
              <input type="text" name="" id="" placeholder="0" />
              <button>+</button>
            </div>

            <button className="deliver">Buyurtma Berish</button>
          </form>
        </div>
      </div>
      <div className="similar__items">
        <div className="similar__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Cola} alt="coca-cola" />
        </div>

        <div className="similar__item-about">
          <a href="/coca-cola" className="similar-item">
            <h3>Coca-Cola 1.5 litr</h3>
            <div className="similar__item-price">
              <p>25 000 so’m</p>

              <div className="similar__item-star">
                <FaStar color="#FAC917" />
                <small>5.0(150 baho)</small>
              </div>
            </div>
          </a>
        </div>

        <div className="similar__item-buttons">
          <form action="">
            <div className="similar__item-addRemove">
              <button>-</button>
              <input type="text" name="" id="" placeholder="0" />
              <button>+</button>
            </div>

            <button className="deliver">Buyurtma Berish</button>
          </form>
        </div>
      </div>
      <div className="similar__items">
        <div className="similar__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Cola} alt="coca-cola" />
        </div>

        <div className="similar__item-about">
          <a href="/coca-cola" className="similar-item">
            <h3>Coca-Cola 1.5 litr</h3>
            <div className="similar__item-price">
              <p>25 000 so’m</p>

              <div className="similar__item-star">
                <FaStar color="#FAC917" />
                <small>5.0(150 baho)</small>
              </div>
            </div>
          </a>
        </div>

        <div className="similar__item-buttons">
          <form action="">
            <div className="similar__item-addRemove">
              <button>-</button>
              <input type="text" name="" id="" placeholder="0" />
              <button>+</button>
            </div>

            <button className="deliver">Buyurtma Berish</button>
          </form>
        </div>
      </div>
      <div className="similar__items">
        <div className="similar__item-image">
          <a href="if" className="add__heart">
            <FaRegHeart
              style={{ position: "absolute", top: "10", right: "10" }}
            />
          </a>
          <img src={Cola} alt="coca-cola" />
        </div>

        <div className="similar__item-about">
          <a href="/coca-cola" className="similar-item">
            <h3>Coca-Cola 1.5 litr</h3>
            <div className="similar__item-price">
              <p>25 000 so’m</p>

              <div className="similar__item-star">
                <FaStar color="#FAC917" />
                <small>5.0(150 baho)</small>
              </div>
            </div>
          </a>
        </div>

        <div className="similar__item-buttons">
          <form action="">
            <div className="similar__item-addRemove">
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

export default Similar;
