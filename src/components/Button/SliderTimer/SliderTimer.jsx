import React from 'react'
import "../../Button/SliderTimer/SliderTimer.scss";

function SliderTimer() {
  return (
    <div className='circleTimer-container'>
        <ul className='circleTimer-box'>
            <li className='circleTimer'><button className='circleTimer-button'></button></li>
            <li className='circleTimer'><button className='circleTimer-button'></button></li>
            <li className='circleTimer'><button className='circleTimer-button'></button></li>
            <li className='circleTimer'><button className='circleTimer-button'></button></li>
        </ul>
    </div>
  )
}

export default SliderTimer