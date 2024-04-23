import React, { useState } from "react";
import "../CustomCheckbox/CustomCheckbox.scss";

function CustomCheckbox(props) {
  const { text, onToggle } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onToggle) {
      onToggle(!isChecked); // Passes the current checked state to the parent component
    }
    };

  
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
      {text}
    </label>
  );
}

export default CustomCheckbox;
