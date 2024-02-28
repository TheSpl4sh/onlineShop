import React from "react";
import ArrowLeft from "../SliderCircle/img/ArrowLeft.svg";
import ArrowRight from "../SliderCircle/img/ArrowRight.svg";
import "../..//Button/SliderCircle/SliderCircle.scss";

function SliderCircle() {
  return (
    <div className="SliderCircle">
      <button className="SliderCircleLeft">
        <ul className="buttonComponents">
          <li className="SliderCircle-icons">
            <img src={ArrowLeft} alt="ArrowLeft" />
          </li>
        </ul>
      </button>
      <button className="SliderCircleRight">
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
