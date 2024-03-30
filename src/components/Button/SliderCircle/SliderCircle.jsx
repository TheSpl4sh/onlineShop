import React from "react";
import ArrowLeft from "../SliderCircle/img/ArrowLeft.svg";
import ArrowRight from "../SliderCircle/img/ArrowRight.svg";
import "../SliderCircle/SliderCircle.scss";
function SliderCircle() {
  return (
    <div className="SliderCircle">
      <button className="sliderCircleLeft">
        <ul className="buttonComponents">
          <li className="sliderCircle-icons">
            <img src={ArrowLeft} alt="ArrowLeft" />
          </li>
        </ul>
      </button>
      <button className="sliderCircleRight">
        <ul className="buttonComponents">
          <li className="sliderCircle-icons">
            <img src={ArrowRight} alt="ArrowRight" />
          </li>
        </ul>
      </button>
    </div>
  );
}

export default SliderCircle;
