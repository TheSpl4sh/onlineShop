import React from 'react'
import "./slider.scss"

const Slider = () => {
  return (
    <div className='slider-component'>
        <button className='slider-component__button'></button>
        <button className='slider-component__button slider-component__button--active'></button>
        <button className='slider-component__button'></button>
    </div>
  )
}

export default Slider