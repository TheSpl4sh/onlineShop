import React, { useState } from "react";
import "../CustomCheckbox/CustomCheckbox.scss";

function CustomCheckbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const { text } = props;
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
