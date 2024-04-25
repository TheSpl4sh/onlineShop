import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ColorList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const initialColor = params.get('color');
  const [selectedColor, setSelectedColor] = useState(initialColor);

  const updateURL = (color) => {
    params.set('color', color);
    navigate({ search: params.toString() });
  };

  useEffect(() => {
    if (selectedColor) {
      updateURL(selectedColor);
    }
  }, [selectedColor]);

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
          style={{ padding: '5px', border: 'none', backgroundColor: '#282828', visibility: 'visible', outline: selectedColor === 'black' ? '2px solid #282828' : 'none' }}
        />
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="blue"
          checked={selectedColor === 'blue'}
          onChange={() => handleColorChange('blue')}
          style={{ padding: '5px', border: 'none', backgroundColor: '#4296C3', visibility: 'visible', outline: selectedColor === 'blue' ? '2px solid #4296C3' : 'none' }}
        />
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="red"
          checked={selectedColor === 'red'}
          onChange={() => handleColorChange('red')}
          style={{ padding: '5px', border: 'none', backgroundColor: '#CF3D48', visibility: 'visible', outline: selectedColor === 'red' ? '2px solid #CF3D48' : 'none' }}
        />
      </label>
      <label>
        <input
          type="radio"
          name="color"
          value="white"
          checked={selectedColor === 'white'}
          onChange={() => handleColorChange('white')}
          style={{ padding: '5px', border: 'none', backgroundColor: '#ECF2F4', visibility: 'visible', outline: selectedColor === 'white' ? '2px solid #ECF2F4' : 'none' }}
        />
      </label>
    </div>
  );
};

export default ColorList;
