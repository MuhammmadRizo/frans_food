import React from "react";
import "animate.css";
import "./carts.css";
import Pizzaa from "../../Menu/Pizzaa/Pizzaa";
import Aburger from "../../Menu/Aburger/Aburger";
import Asteak from "../../Menu/Asteak/Asteak";
import Cshourma from "../../Menu/Cshourma/Cshourma";
import Colac from "../../Menu/Colac/Colac";

const Carts = () => {
  return (
    //  animate__animated animate__bounceInDown <--- this is animation
    <div className="carts__section ">
      <Colac />

      <Cshourma />
      <Asteak />
      <Aburger />
      <Pizzaa />
    </div>
  );
};

export default Carts;
