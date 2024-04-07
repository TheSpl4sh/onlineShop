// import React from "react";
// import "../ButtonModal/ButtonModal.scss";

// function ButtonModal(props) {
//   const { backgroundColor, text, color } = props;
//   return (
//     <div className="buttonModal-text">
//       {text}
//       {backgroundColor}
//       {color}
//     </div>
//   );
// }

// export default ButtonModal;

import React from "react";
import "../ButtonModal/ButtonModal.scss";

function ButtonModal(props) {
  const { backgroundColor, text, color, hover, border, onClick } = props;

  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
    border: border,
    ":hover": {
      backgroundColor: hover,
      // cursor: 'pointer' // Додати стилізацію курсору, щоб показати, що кнопка є інтерактивною
    },
  };

  return (
    <div>
      <div className="buttonModal-text" style={buttonStyle} onClick={onClick}>
        {text}
      </div>
    </div>
  );
}

export default ButtonModal;
