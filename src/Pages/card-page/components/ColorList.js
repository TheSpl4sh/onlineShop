import React, { useState } from 'react';
import colorBlack from '../iamges/color-black.png'; 
import colorBlue from '../iamges/color-blue.png';
import colorRed from '../iamges/color-red.png';
import colorWhite from '../iamges/color-white.png';

const ColorList = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <ul className="color-list">
      <li>Кольори:</li>
      <li>
        <img
          className={selectedColor === 'black' ? 'color-img selected' : 'color-img'}
          src={colorBlack}
          alt="black"
          onClick={() => handleColorClick('black')}
        />
      </li>
      <li>
        <img
          className={selectedColor === 'blue' ? 'color-img selected' : 'color-img'}
          src={colorBlue}
          alt="blue"
          onClick={() => handleColorClick('blue')}
        />
      </li>
      <li>
        <img
          className={selectedColor === 'red' ? 'color-img selected' : 'color-img'}
          src={colorRed}
          alt="red"
          onClick={() => handleColorClick('red')}
        />
      </li>
      <li>
        <img
          className={selectedColor === 'white' ? 'color-img selected' : 'color-img'}
          src={colorWhite}
          alt="white"
          onClick={() => handleColorClick('white')}
        />
      </li>
    </ul>
  );
};

export default ColorList;
