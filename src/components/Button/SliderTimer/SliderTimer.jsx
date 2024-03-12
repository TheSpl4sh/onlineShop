import React, { useState, useEffect } from "react";
import "../SliderTimer/SliderTimer.scss";

function SliderTimer() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="circleTimer-container">
      <ul className="circleTimer-box">
        {[0, 1, 2, 3].map((index) => (
          <li
            key={index}
            className={`circleTimer ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SliderTimer;
