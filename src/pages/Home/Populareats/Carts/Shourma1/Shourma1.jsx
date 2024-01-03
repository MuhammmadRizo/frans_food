import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import Burger from "../../../../../assets/burger.png";
import Steak from "../../../../../assets/steak.png";
import IPizza from "../../../../../assets/pizza-tomato.png";
import Pizza from "../../../../../assets/pizza.png";
import Shourma from "../../../../../assets/shourma.png";
import Header from "../../../../components/Header/Header";
import { MdArrowForwardIos } from "react-icons/md";

const Shourma1 = () => {
  return (
    <div>
      <Header />

      <div className="cola__section">
        <div className="cola">
          <img src={Shourma} alt="" />

          <div className="cola__about">
            <h1>Shourma</h1>

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

          <p>
            Bu Burger siz uchun ZARAR ^_^ <br /> <br /> Burger tarkibida 3 ta
            mol go'shti 2 ta salat bargi 5 dona pomidor hamda non bor! :)
          </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shourma1;
