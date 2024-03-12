import React, { useState } from 'react';

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleOptionClick = () => {
  //   setIsOpen(false);
  // };

  return (
    <nav className="customSelect">
      <label onClick={() => setIsOpen(!isOpen)}>Каталог</label>
      {isOpen && (
        <ul className="customSelect-options-container">
          {options.map((option, index) => (
            <li
              key={index}
              className="customSelect-option"
              // onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

    </nav>
  );
};

export default CustomSelect;
