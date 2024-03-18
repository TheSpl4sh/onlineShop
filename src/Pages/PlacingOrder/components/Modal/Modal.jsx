import React, { useState } from 'react';
import "../Modal/Modal.scss";

function Modal() {
  const [isOpen, setIsOpen] = useState(true); 

  // Функція для закриття модального вікна
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="wrapper-item">
            <div className="full-item">
              <div className="full-content">
                <span className="modal-close" onClick={closeModal}>×</span>
                <p>Your order has been successfully placed!</p>
                <button onClick={closeModal}>Закрити</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;

