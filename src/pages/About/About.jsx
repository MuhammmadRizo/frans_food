import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Map from "../components/Map/Map";
import "./about.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineChevronRight } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Gerb from "../../assets/gerb.png";
import IIV from "../../assets/iiv.png";
import Bank from "../../assets/bank.png";
import {
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTelegram,
} from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <Header />

      <div className="about__section">
        <div className="about__section-title">
          <h1>Biz haqimizda batafsil bilib oling !</h1>
        </div>

        <div className="about__section-subtitle">
          <h1>B</h1>
          <p>
            iz ish faoliyatimizni 2021-yilda boshladik va hozirga qadar
            anchagina Sirdaryoda o’zimizning o’ringa egami !! Bizlar hozirda
            yangi <br /> loyiha ustida ish olib boryapmiz!
          </p>
        </div>

        <p className="about__paragraph">
          Bizda hozirga kelib ish o’rinlar soni 20 tani tashkil etib ulardan 1
          tasi menenjer, 3 tasi yetkazib beruvchi va qolganlari <br /> esa
          offitsant bo’lib ishlashadi!{" "}
        </p>

        <a href="index" className="view__all">
          Barchasini ko’rish <MdOutlineChevronRight />{" "}
        </a>

        <div className="about__abouts">
          <h1>Manzil va ijtemoiy tarmoqlar</h1>
          <div className="about__about">
            <div className="about__about-location">
              <IoLocationOutline />

              <a
                href="https://maps.app.goo.gl/K5r4cWiMVVKK3s7U9"
                target="__blank"
              >
                <p>RMJ8+RC2, O'zbekiston ko'chasi, Syrdarya, Oʻzbekiston</p>
              </a>
            </div>

            <div className="about__about-phone">
              <FiPhone />

              <a href="+998916233091">
                <p>+998916233091</p>
              </a>
            </div>
          </div>

          <div className="about__socials">
            <a href="https://www.instagram.com/frans.uz_foods/">
              <FaInstagram />
              <p>Instagram</p>
            </a>

            <a href="https://t.me/Sanjar919131">
              <FaTelegram />
              <p>Telegram</p>
            </a>
          </div>
        </div>

        <div className="about__reviews">
          <h1>Hamkorlarimiz</h1>

          <div className="review__images">
            <img src={Gerb} alt="" />
            <img src={IIV} alt="" />
            <img src={Bank} alt="" />
          </div>
        </div>
      </div>

      <Map />

      <Footer />
    </div>
  );
};

export default About;
