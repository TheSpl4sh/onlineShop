import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "../ButtonOrang/ButtonOrangArrow.scss"

function ButtonOrangArrow(props) {
    const { text } = props ;
  return (
    <div>
      <button className="ButtonOrangArrow">
        <ul className="buttonComponents">
          <li className="buttonOrangArrow-text">{text}</li>
          <li className="buttonOrangArrow-icons"><BsArrowRight /></li>
        </ul>
      </button>
    </div>
  );
}

export default ButtonOrangArrow;
