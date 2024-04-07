import React from "react";
import PropTypes from "prop-types";
import "../../../PlacingOrder/components/CustomRadio/CustomRadio.scss"

function CustomRadio(props) {
  const { id, name, value, label, checked, onChange } = props;

  return (
    <div className="custom-radio">
      <input
        className="custom-radio-input"
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="custom-radio-label" htmlFor={id}>{label}</label>
    </div>
  );
}

CustomRadio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CustomRadio;
