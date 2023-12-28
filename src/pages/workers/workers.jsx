import React from "react";
import Header from "../components/Header/Header";
import Map from "../components/Map/Map";
import Footer from "../components/Footer/Footer";
import { FaTelegram } from "react-icons/fa6";
import Director from "../../assets/waiter.png";
import Mananger from "../../assets/menenjer.png";
import Chef from "../../assets/chef.png";
import Waiter from "../../assets/waiter.png";
import "./workers.css";

const workers = () => {
  return (
    <div>
      <Header />

      <div className="workers__section">
        <h1>Bizning Ishchilar</h1>

        <div className="workers__section-bottom">
          <div className="workers__cart">
            <div className="workers__image">
              <img src={Director} alt="" />
              <div className="social">
                <a href="https://t.me">
                  <FaTelegram />
                </a>
              </div>
            </div>

            <div className="workers__name">
              <h4>Hasanov Mahmud</h4>
              <p>Director</p>
            </div>
          </div>
          <div className="workers__cart">
            <div className="workers__image">
              <img src={Mananger} alt="" />
              <div className="social">
                <a href="https://t.me">
                  <FaTelegram />
                </a>
              </div>
            </div>

            <div className="workers__name">
              <h4>Rashidova Diana</h4>
              <p>Menenjer</p>
            </div>
          </div>
          <div className="workers__cart">
            <div className="workers__image">
              <img src={Chef} alt="" />
              <div className="social">
                <a href="https://t.me">
                  <FaTelegram />
                </a>
              </div>
            </div>

            <div className="workers__name">
              <h4>Rustamov Aliksey</h4>
              <p>Oshpaz</p>
            </div>
          </div>
          <div className="workers__cart">
            <div className="workers__image">
              <img src={Waiter} alt="" />
              <div className="social">
                <a href="https://t.me">
                  <FaTelegram />
                </a>
              </div>
            </div>

            <div className="workers__name">
              <h4>Ashirov Po'lat</h4>
              <p>Ofitsiant</p>
            </div>
          </div>
          <div className="workers__cart">
            <div className="workers__image">
              <img src={Waiter} alt="" />
              <div className="social">
                <a href="https://t.me">
                  <FaTelegram />
                </a>
              </div>
            </div>

            <div className="workers__name">
              <h4>Ashirov Po'lat</h4>
              <p>Ofitsiant</p>
            </div>
          </div>
          <div className="workers__cart">
            <div className="workers__image">
              <img src={Chef} alt="" />
              <div className="social">
                <a href="https://t.me">
                  <FaTelegram />
                </a>
              </div>
            </div>

            <div className="workers__name">
              <h4>Hasanov Mahmud</h4>
              <p>Director</p>
            </div>
          </div>
          <div className="workers__cart">
            <div className="workers__image">
              <img src={Chef} alt="" />
              <div className="social">
                <a href="https://t.me">
                  <FaTelegram />
                </a>
              </div>
            </div>

            <div className="workers__name">
              <h4>Hasanov Mahmud</h4>
              <p>Director</p>
            </div>
          </div>
          <div className="workers__cart">
            <div className="workers__image">
              <img src={Chef} alt="" />
              <div className="social">
                <a href="https://t.me">
                  <FaTelegram />
                </a>
              </div>
            </div>

            <div className="workers__name">
              <h4>Hasanov Mahmud</h4>
              <p>Director</p>
            </div>
          </div>
        </div>
      </div>

      <Map />
      <Footer />
    </div>
  );
};

export default workers;
