import React from "react";
import "./LinkButtonOrange.scss";
import "./LinkButtonBlack.scss";

const SubmitButton = ({ text, SvgIcon, className, ...props }) => {
    return (
        <button {...props} className={`link-button__${className}`}>
            <span className="link-text">{text}</span>
            <span className="link-icon">
                <SvgIcon className="icon-svg" />
            </span>
        </button>
    );
};

export default SubmitButton;