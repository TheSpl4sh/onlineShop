import React, { useState } from "react";

const CustomSlider = ({ min, max, onChange }) => {
  const minmax = {
    minValue: 0,
    maxValue: 10000,
  };
    const [price, setPrice] = useState(0);
    
    const handleChangeNumber = (e) => {
      const numbers = e.target.value;
      setPrice(numbers);
    };
    const handleChangeRange = (e) => {
      const numbers = e.target.value;
      setPrice(numbers);
    };
    
    return (
      <div>
        <input
          type="text"
          onChange={(e) => handleChangeNumber(e)}
          value={price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} 
        />
  
        <input
          type="range"
          min={minmax.minValue}
          max={minmax.maxValue}
          onChange={(e) => handleChangeRange(e)}
          value={price}
        />
      </div>
    );
  };
  


export default CustomSlider;