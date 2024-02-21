import React from "react";
import ArrowLeft from "../SliderCircle/img/ArrowLeft.svg";
import ArrowRight from "../SliderCircle/img/ArrowRight.svg";

function SliderCircle() {
  return (
    <div>
      <button className="SliderCircle">
        <ul className="buttonComponents">
          <li className="SliderCircle-icons">
            <img src={ArrowLeft} alt="ArrowLeft" />
          </li>
        </ul>
      </button>
      <button className="SliderCircle">
        <ul className="buttonComponents">
          <li className="SliderCircle-icons">
            <img src={ArrowRight} alt="ArrowRight" />
          </li>
        </ul>
      </button>
    </div>
  );
}

export default SliderCircle;
