import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import "./populareats.css";
import Carts from "./Carts/Carts";

const Populareats = () => {
  return (
    <div className="popular__eats">
      <div className="popular__eats-title">
        <h1>Ommaviy</h1>

        <a href="all" className="showAll">
          <p>Barchasi</p>
          <MdOutlineChevronRight />
        </a>
      </div>

      <div className="popular__carts">
        <Carts />
      </div>
    </div>
  );
};

export default Populareats;
