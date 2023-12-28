import React from "react";
import Header from "../../../../components/Header/Header";
import Cola from "../../../../../assets/cola15.png";
import "./cola.css";

const Coca = () => {
  return (
    <div>
      <Header />

      <div className="cola__section">
        <img src={Cola} alt="" />

        <div className="cola__about">
          <h1>Coca-Cola 1.5 litrligi</h1>
        </div>
      </div>
    </div>
  );
};

export default Coca;
