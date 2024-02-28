import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ButtonBlackArrow from "../../components/Button/ButtonBlackArrow/ButtonBlackArrow";

function PlacingOrder() {
  return (
    <div>
        <Header />
        <div className='wrapper-placingOrder'></div>
        <div> <h1>Placing an order</h1> </div>
        <div> <ButtonBlackArrow text="MAKE AN ORDER" /> </div>
        <Footer />
    </div>
  )
}

export default PlacingOrder