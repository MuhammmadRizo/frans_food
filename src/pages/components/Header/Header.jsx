import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import Heart from "../../../assets/heart.png";
import Bag from "../../../assets/shopping-bag.png";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = ({ cartQuantity }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const calculateTotalPrice = () => {
    // Your logic to calculate the total price based on items in the cart
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleAlert = () => {
    alert("Iltimos Buyurtma berish uchun mahsulot tanlang :)");
  };

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
                <a href="/">Bosh Sahifa</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <a href="/about">Biz Haqimizda </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq">
                <a href="/faq">Savollar</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/workers">
                <a href="/workers">Ishchilar</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/deliver">
                <a href="/deliver">Yetkazib berish</a>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="end__buttons">
          <form action="">
            <button className="phoneNumber" type="submit">
              <a
                href="tel:+998916233091"
                style={{ textDecoration: "none", color: "#000" }}
              >
                +998 (91) 623 30 91
              </a>
            </button>
          </form>

          <button className="delivery" type="submit" onClick={handleAlert}>
            Buyurtma berish
          </button>

          <div className="header__icons">
            <a href="#heart">
              <img src={Heart} alt="yoqtirganlar" />
            </a>
            <a href="/shopping-bag" className="shopping_bag">
              <img src={Bag} alt="Savat" />
              <p className="addNum">0</p>
            </a>
          </div>
          <div className="hamburger-menu">
            <div
              className={`menu-icon ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>

            {isMenuOpen && (
              <div className="menu">
                {/* Your menu items go here */}
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
