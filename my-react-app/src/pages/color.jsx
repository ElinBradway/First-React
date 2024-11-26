import React, { useState } from 'react';
import '../components/colorpicker.css';

function ColorPicker() {
  const [color, setColor] = useState('#ff0000');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      <input
        type="color"
        value={color}
        onChange={handleChange}
        className="color-input"
      />
      <p>
        Selected Color: <span style={{ color }}>{color}</span>
      </p>
      <div
        className="color-display"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

export default ColorPicker;
