import React, { useState } from 'react';

const ColorList = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-list">
      <p>Кольори:</p>
      <label>
        <input
          type="radio"
          name="color"
          value="black"
          checked={selectedColor === 'black'}
          onChange={() => handleColorChange('black')}
        />
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="blue"
          checked={selectedColor === 'blue'}
          onChange={() => handleColorChange('blue')}
        />
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="red"
          checked={selectedColor === 'red'}
          onChange={() => handleColorChange('red')}
        />
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="white"
          checked={selectedColor === 'white'}
          onChange={() => handleColorChange('white')}
        />
      </label>
    </div>
  );
};

export default ColorList;
