import React from "react";
import Header from "../../../../components/Header/Header";
import Cola from "../../../../../assets/cola15.png";
import "./cola.css";
import { FaStar } from "react-icons/fa6";
import Map from "../../../../components/Map/Map";
import Footer from "../../../../components/Footer/Footer";
import Similar from "./Similar/Similar";
import { MdArrowForwardIos } from "react-icons/md";

const Coca = () => {
  return (
    <div>
      <Header />

      <div className="cola__section">
        <div className="cola">
          <img src={Cola} alt="" />

          <div className="cola__about">
            <h1>Coca-Cola 1.5 litrligi</h1>

            <div className="cola__about-star">
              <div className="cola__star">
                <FaStar color="#FAC917" />
                <p>5.0(150 baho)</p>
              </div>
              <p>200ta buyurtma</p>
            </div>

            <div className="cola__price">
              <p>25 000 so'm</p>
            </div>

            <div className="deliver__time">
              <p>
                Yetkazib berish: <span>20-30 daqiqa</span>
              </p>
            </div>

            <div className="open-cart__item-buttons">
              <form action="">
                <div className="open-cart__item-addRemove">
                  <button>-</button>
                  <input type="text" name="" id="" placeholder="0" />
                  <button>+</button>
                </div>

                <button className="deliver">Buyurtma Berish</button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="coca__about-text">
          <h1>Ma'lumotnoma</h1>

          <p>Bu Coca-Cola ^_^</p>
        </div>

        <div className="more__cards">
          <div className="similar__title">
            <h1>Shunga o'xshash</h1>

            <a href="/all-drink">
              Barcha Ichimliklar
              <MdArrowForwardIos />
            </a>
          </div>

          <div className="more__cards-card">
            <Similar />
          </div>
        </div>
      </div>

      <Map />
      <Footer />
    </div>
  );
};

export default Coca;
