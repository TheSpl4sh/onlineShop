import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "../ButtonBlackArrow/ButtonBlackArrow.scss";
function ButtonBlackArrow(props) {
  const { text } = props;
  return (
    <div className="wrapper-ButtonBlackArrow">
      <button className="ButtonBlackArrow">
        <ul className="buttonComponents">
          <li className="buttonBlackArrow-text">{text}</li>
          <li className="buttonBlackArrow-icons">
            <BsArrowRight />
          </li>
        </ul>
      </button>
    </div>
  );
}

export default ButtonBlackArrow;
