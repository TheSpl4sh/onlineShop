import React from "react";
import Basket from "./img/Vector.svg";
import './ButtonBlackBasket.scss'

function ButtonBlackBasket({ dispatchedHandleAdd, productId }) {
  return (
    <div>
      <button className="ButtonBlackBasket" onClick={() => dispatchedHandleAdd(productId)}>
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
