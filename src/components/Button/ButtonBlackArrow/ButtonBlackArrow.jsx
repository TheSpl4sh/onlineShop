import React from "react";
import { BsArrowRight } from "react-icons/bs";

function ButtonBlackArrow() {
  return (
    <div>
      <button className="ButtonBlackArrow">
        <ul className="buttonComponents">
          <li className="buttonBlackArrow-text">MORE DETAIL</li>
          <li className="buttonBlackArrow-icons"><BsArrowRight /></li>
        </ul>
      </button>
    </div>
  );
}

export default ButtonBlackArrow;
