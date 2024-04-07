
// import React from "react";
// import "../../../PlacingOrder/components/Modal/Modal.scss";

// const Modal = (props) => {
  
//   const { header, closeButton, text, actions, onClose, show } = props;

//   return (
// <div className="wrapper-item">
//     <div className={`full-item ${show ? "show" : ""}`}>
//       <div className="modal-content  full-item-content">
//         {closeButton && (
//           <span onClick={onClose} className="modal-close">
//             &times;
//           </span>
//         )}

//         <div className="modal-header">
//           <h2 className="modal-header">{header}</h2>
//         </div>
//         <div className="modal-body">{text}</div>
//         <div className="modal-footer">{actions}</div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Modal;

import React from "react";
import "./Modal.scss"; // Update import path

const Modal = (props) => {
  const { header, closeButton, text, actions, onClose, show } = props;
  

  return (
    <div className={`wrapper-item ${show ? "show" : ""}`}>
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

