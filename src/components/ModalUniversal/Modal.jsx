import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  const { header, closeButton, text, actions, onClose, show, handleOutsideClick } = props;
  

  return (
    <div  className={`wrapper-item ${show ? "show" : ""}`} onClick={handleOutsideClick}>
      <div className="full-item">
        <div className="modal-content full-item-content">
          {closeButton && (
            <span onClick={onClose} className="modal-close">
              &times;
            </span>
          )}

          <div className="modal-header">
            <h2>{header}</h2>
          </div>
          <div className="modal-body">{text}</div>
          <div className="modal-footer">{actions}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

