import React from "react";
import Basket from "./img/Vector.svg";
import './ButtonBlackBasket.scss'

function ButtonBlackBasket() {
  return (
    <div>
      <button className="ButtonBlackBasket">
        <ul className="buttonComponents">
          <li className="buttonBlackBasket-text">ADD TO BASKET</li>
          <li className="buttonBlackBasket-icons">
            <img src={Basket} alt="Basket" />
          </li>
        </ul>
      </button>
    </div>
  );
}

export default ButtonBlackBasket;
