import React from "react";
// import UZ from "../../../assets/flag-uzb.png";
import { US } from "country-flag-icons/react/3x2";
// import RU from "../../../assets/flag-rus.png";
// import EN from "../../../assets/flag-eng.png";
import {
  FaLocationDot,
  FaPhone,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__top">
        <div className="footer__left">
          <div className="logo">
            <h1>
              <span>FRANSUZ</span> <br /> FOODS
            </h1>
          </div>

          <div className="footer__about">
            <div className="footer__about-location">
              <FaLocationDot />

              <a
                href="https://maps.app.goo.gl/K5r4cWiMVVKK3s7U9"
                target="__blank"
              >
                <p>RMJ8+RC2, O'zbekiston ko'chasi, Syrdarya, Oʻzbekiston</p>
              </a>
            </div>

            <div className="footer__about-phone">
              <FaPhone />

              <a href="+998916233091">
                <p>+998916233091</p>
              </a>
            </div>
          </div>

          <div className="footer__socials">
            <a href="https://www.instagram.com/frans.uz_foods/">
              <FaInstagram />
            </a>

            <a href="https://t.me/Sanjar919131">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="footer__center">
          <div className="footer__center-links">
            <ul>
              <li>
                <a href="in">Biz Haqimizda</a>
              </li>
              <li>
                <a href="in">Barcha Savollar</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="in">Ishchilar</a>
              </li>
              <li>
                <a href="in">Yetkazib berish</a>
              </li>
            </ul>
          </div>

          <div className="footer__center-workTime">
            <h3>Ish Vaqtlari</h3>
            <p>
              Dushanba <span>09:30–00:00</span>
            </p>
            <p>
              Seshanba <span>09:30–00:00</span>
            </p>
            <p>
              Chorshanba <span>09:30–00:00</span>
            </p>
            <p>
              Payshanba <span>09:30–00:00</span>
            </p>
            <p>
              Juma <span>09:30–00:00</span>
            </p>
            <p>
              Shanba <span>09:30–00:00</span>
            </p>
            <p>
              Yakshanba <span>09:30–00:00</span>
            </p>
          </div>
        </div>

        <div className="footer__right">
          <form action="">
            <select name="language" id="language">
              <option value="uzbek">
                {/* <img src={UZ} alt="" /> */}
                UZ
              </option>
              <option value="russian">
                {/* <img src={RU} alt="" /> */}
                RU
              </option>
              <option value="english">
                {/* <img src={EN} alt="" /> */}
                EN
              </option>
            </select>
          </form>

          <a href="aloqa">
            <h4>Aloqa uchun</h4>
          </a>
          <a href="help">
            <h4>Yordam olish</h4>
          </a>
          <a href="xavf">
            <h4>Xavfsizlik qoidalari</h4>
          </a>
        </div>
      </div>

      <hr />

      <h3>© 2024 frans-foods.uz Inc</h3>
    </footer>
  );
};

export default Footer;
