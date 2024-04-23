import React from 'react'
import ButtonOrangArrow from '../../components/Button/ButtonOrang/ButtonOrang'
import "./MainPage.scss"
import ShieldImg from "./img/benfits_section/shield.svg"
import StarsImg from "./img/benfits_section/stars.svg"
import CartImg from "./img/benfits_section/cart.svg"
import PlusImg from './img/hit-section/plus.svg'
import Banner from "../../components/Banner/Banner";
import ProductsList from '../../components/Products/ProductsList'
const MainPage = () => {
  return (
    <div className='main-page'>
      <div className='container'>
        <Banner />
        <section className='benefits-section'>
              <article className='benefits-section__original'>
                <img src={ShieldImg} alt='shield'className='benefits-section__img-shield'/>

                <div className='benefits-section__original-text'>
                  <h3 className='benefits-section__original-title'>ТІЛЬКИ ОРИГІНАЛЬНІ ТОВАРИ</h3>
                  <p className='benefits-section__original-paragraph'>Гарантована автентичність Nike та висока якість кросівок</p>
                </div>
              </article>

              <article className='benefits-section__original'>
                <img src={StarsImg} alt='shield'className='benefits-section__img-stars'/>

                <div className='benefits-section__original-text'>
                  <h3 className='benefits-section__original-title'>ПРОФЕСІОНАЛЬНИЙ СЕРВІС</h3>
                  <p className='benefits-section__original-paragraph'>Команда експертів, готова допомогти з вибором розміру відповісти на всі питання.</p>
                </div>
              </article>

              <article className='benefits-section__original'>
                <img src={CartImg} alt='shield'className='benefits-section__img-cart'/>

                <div className='benefits-section__original-text'>
                  <h3 className='benefits-section__original-title'>ЕКСКЛЮЗИВНИЙ ВИБІР ТОВАРІВ</h3>
                  <p className='benefits-section__original-paragraph'>Багатий асортимент оригінальних моделей Nike, включаючи рідкісні випуски.</p>
                </div>
              </article>
          </section>

          <section className='arrivals-section'>
            <article className='arrivals-section__title-container'>
              <h1 className='arrivals-section__title'>ОСТАННІ ОНОВЛЕННЯ</h1>
              
              {/* <div className='arrivals-section__arrow-container'>
                <button className='arrivals-section__arrow-button arrivals-section__arrow-button--active'></button>
                <button className='arrivals-section__arrow-button arrivals-section__arrow-button--nonactive'></button>
              </div> */}
            </article >

            <article className='arrivals-section__products-container'>
            <ProductsList productType="НОВИНКА" />
            </article>

            <article className='arrivals-section__title-container arrivals-section__title-container--margin-top'>
              <h1 className='arrivals-section__title'>НАЙПОПУЛЯРНІШІ</h1>
              
              {/* <div className='arrivals-section__arrow-container'>
                <button className='arrivals-section__arrow-button arrivals-section__arrow-button--active'></button>
                <button className='arrivals-section__arrow-button arrivals-section__arrow-button--nonactive'></button>
              </div> */}
            </article >

            <article className='arrivals-section__products-container'>
            <ProductsList productType="ХІТ" />
            </article>
          </section>

          <section className='hit-section'>
            <article className='hit-section__top-container'>
              <h2>ХІТ СЕЗОНУ ВІД NIKE <span className="hr"></span></h2>
              
              <span className='hit-section__product-name'>Nike Air Max Alpha Trainer 5</span>
              
              <div className='hit-section__span-box'>
                <span className="span-box__from-text">від</span>
                <span className="span-box__price">7 899 ₴</span>
              </div>
              <ButtonOrangArrow text={"Детальніше"}/>
            </article>

            <article className='hit-section__bottom-container'>
              <img src={PlusImg} alt='plus' className='hit-section__plus-img'/>

              <p className='hit-section__paragraph'>Унікальна технологія структури стельки дозволяє забути про взуття на нозі.</p>
            </article>
          </section>

          <section className='arrivals-section'>
            <article className='arrivals-section__title-container'>
              <h1 className='arrivals-section__title'>ТОВАРИ ЗІ ЗНИЖКОЮ</h1>
              
              {/* <div className='arrivals-section__arrow-container'>
                <button className='arrivals-section__arrow-button arrivals-section__arrow-button--active'></button>
                <button className='arrivals-section__arrow-button arrivals-section__arrow-button--nonactive'></button>
              </div> */}
            </article >

            <article className='arrivals-section__products-container'>
            <ProductsList productType="ЗНИЖКА" />
            </article>
          </section>
      </div>
          <section className='about-section'>
            <div className='container'>
              <article className='about-section__container'>
                <h1 className='about-section__title'>іНТЕРНЕТ-МАГАЗИН SWOOSH STORE <span className="hr hr--black"></span></h1>

                <p className='about-section__paragraph about-section__paragraph--max-width'>Ласкаво просимо до 
                  <span className='about-section__paragraph-span'> Swoosh Store</span> 
                  – ваш джерело оригінальних кросівок Nike та неперевершеного стилю! Ми раді представити вам унікальну онлайн-платформу, де ви зможете зануритися в світ інновацій та моди від легендарного бренду спортивного взуття.
                </p>

                <span className='about-section__paragraph-span about-section__paragraph-span--marginTop'>Легендарна спадщина Nike:</span>
                <p className='about-section__paragraph about-section__paragraph'>Swoosh Store - це місце, де історія та стиль зливаються в одне ціле. Ми пишаємося тим, що пропонуємо вам лише оригінальні кросівки Nike, продукцію, яка втілює понад півстолітнє спадщину інновацій, комфорту та якості. Кожна пара кросівок - це не просто спортивне взуття, це творче діло, яке втілює дух перемоги та палку відданість активному способу життя.</p>

                <ButtonOrangArrow text={"Детальніше"}/>
              </article>
            </div>
          </section>
    </div>
  )
}

export { MainPage }