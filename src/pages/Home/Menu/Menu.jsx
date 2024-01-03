import React from "react";
import "animate.css";
import { MdOutlineChevronRight } from "react-icons/md";
import Pizza from "./Pizza/Pizza";
import Aburger from "./Aburger/Aburger";
import Asteak from "./Asteak/Asteak";
import Cshourma from "./Cshourma/Cshourma";
import Pizzaa from "./Pizzaa/Pizzaa";
import "./menu.css";
import Prosta from "./Prosta/Prosta";

const Menu = () => {
  return (
    <div>
      <div className="menu__eats-title">
        <h1>Barcha Taomlar</h1>

        <a href="all" className="showAll">
          <p>Barchasi</p>
          <MdOutlineChevronRight />
        </a>
      </div>
      {/* animate__animated animate__bounceInDown  */}
      <div className="carts__section  ">
        <Pizza />
        <Aburger />
        <Asteak />
        <Cshourma />
        <Pizzaa />
      </div>
      <div className="carts__section  ">
        <Cshourma />
        <Pizzaa />
        <Pizza />
        <Aburger />
        <Asteak />
      </div>
      {/* <Prosta /> */}
    </div>
  );
};

export default Menu;
