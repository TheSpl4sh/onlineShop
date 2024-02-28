import React from 'react'
import "../SliderTimer/SliderTimer.scss"

function SliderTimer() {
  return (
    <div className='circleTimer-container'>
        <ul className='circleTimer-box'>
            <li className='circleTimer'>.</li>
            <li className='circleTimer'>.</li>
            <li className='circleTimer'>.</li>
            <li className='circleTimer'>.</li>
        </ul>
    </div>
  )
}

export default SliderTimer;