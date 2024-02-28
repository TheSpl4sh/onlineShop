import React from 'react'
import "./MainPage.scss"
import ShieldImg from "./img/benfits_section/shield.svg"
import StarsImg from "./img/benfits_section/stars.svg"
import CartImg from "./img/benfits_section/cart.svg"
import PlusImg from './img/hit-section/plus.svg'

const MainPage = () => {
  return (
    <div className='container'>
        <section className='benefits-section'>
            <article className='benefits-section__original'>
              <img src={ShieldImg} alt='shield'className='benefits-section__img-shield'/>

              <div className='benefits-section__original-text'>
                <h3 className='benefits-section__original-title'>ТОЛЬКО ОРИГИНАЛЬНЫЕ ТОВАРЫ</h3>
                <p className='benefits-section__original-paragraph'>Гарантированная подлинность Nike и высокое качество кроссовок.</p>
              </div>
            </article>

            <article className='benefits-section__original'>
              <img src={StarsImg} alt='shield'className='benefits-section__img-stars'/>

              <div className='benefits-section__original-text'>
                <h3 className='benefits-section__original-title'>ПРОФЕССИОНАЛЬНЫЙ СЕРВИС</h3>
                <p className='benefits-section__original-paragraph'>Команда экспертов, готовых помочь с выбором размера ответить на все вопросы.</p>
              </div>
            </article>

            <article className='benefits-section__original'>
              <img src={CartImg} alt='shield'className='benefits-section__img-cart'/>

              <div className='benefits-section__original-text'>
                <h3 className='benefits-section__original-title'>ЭКСКЛЮЗИВНЫЙ ВЫБОР</h3>
                <p className='benefits-section__original-paragraph'>Богатый ассортимент оригинальных моделей Nike, включая редкие выпуски.</p>
              </div>
            </article>


            <article className='hit-section__bottom-container'>
              <img src={PlusImg} alt='plus' className='hit-section__plus-img'/>

              <p className='hit-section__paragraph'>Унікальна технологія структури стельки дозволяє забути про взуття на нозі.</p>
            </article>
          </section>
      </div>


  )
}

export default MainPage