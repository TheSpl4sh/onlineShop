
import React from "react";
import "../Modal/Modal.scss";

const Modal = (props) => {
  const { header, closeButton, text, actions, onClose } = props;

  return (
    <div className={`modal ${props.show ? "show" : ""}`}>
      <div className="modal-content">
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
  );
};

export default Modal;
