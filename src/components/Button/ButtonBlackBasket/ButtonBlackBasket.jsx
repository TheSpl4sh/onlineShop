import React from "react";
import { BsBasket3 } from "react-icons/bs";

function ButtonBlackBasket() {
  return (
    <div>
      <button className="ButtonBlackBasket">
        <ul className="buttonComponents">
          <li className="buttonBlackBasket-text">ADD TO BASKET</li>
          <li className="buttonBlackBasket-icons">
          <BsBasket3 />
          </li>
        </ul>
      </button>
    </div>
  );
}

export default ButtonBlackBasket;
