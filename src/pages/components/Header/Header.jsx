import React from "react";
import Logo from "../../../assets/logo.png";
import Heart from "../../../assets/heart.png";
import Bag from "../../../assets/shopping-bag.png";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header__section">
      <header>
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" />
            <h4>
              <span>FRANSUZ </span>FOODS
            </h4>
          </a>
        </div>

        <div className="header__links">
          <ul>
            <li>
              <NavLink to="/">
                <a href="#home">Bosh Sahifa</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <a href="#about">Biz Haqimizda </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq">
                <a href="#faq">Savollar</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/workers">
                <a href="#workers">Ishchilar</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/deliver">
                <a href="#delivery">Yetkazib berish</a>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="end__buttons">
          <form action="">
            <button className="phoneNumber" type="submit">
              +998 (91) 623 30 91
            </button>

            <button className="delivery" type="submit">
              Buyurtma berish
            </button>
          </form>

          <div className="header__icons">
            <a href="#heart">
              <img src={Heart} alt="yoqtirganlar" />
            </a>
            <a href="#shop" className="shopping_bag">
              <img src={Bag} alt="Savat" />
              <p className="addNum">0</p>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
