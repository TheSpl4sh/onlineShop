import React from "react";
import { BsArrowRight } from "react-icons/bs";

function ButtonBlackArrow(props) {
  const { text } = props
  return (
    <div>
      <button className="ButtonBlackArrow">
        <ul className="buttonComponents">
          <li className="buttonBlackArrow-text">{text}</li>
          <li className="buttonBlackArrow-icons"><BsArrowRight /></li>
        </ul>
      </button>
    </div>
  );
}

export default ButtonBlackArrow;
