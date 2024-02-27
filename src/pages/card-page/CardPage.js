import React from "react";
import Links from "./components/Links";
import './style/card-page.scss'
import colorWhite from './iamges/color-white.png'
import colorBlack from './iamges/color-black.png'
import colorBlue from './iamges/color-blue.png'
import colorRed from './iamges/color-red.png'
import Size from './components/Size'
import ButtonBlackBasket from '../../components/ButtonBlackBasket/ButtonBlackBasket'
import ProductOptions from './components/ProductOptions.js'
import ImgContainer from "./components/ImgContainer.js";


function CardPage() {
    
    return(
        <div className="container">
            <Links/>
            <div className="content-container">
                <ImgContainer/>
                <div className="text-container">
                    <h1 className="text-container__title">
                        Кросівки Nike Air VaporMax 2023 Flyknit
                    </h1>
                    <p className="text-container__description">
                         Кросівки Nike Air VaporMax 2023 Flyknit з підтримуючою амортизацією, створеною для плавного бігу, є абсолютно новим поглядом на знайому колекцію.
                    </p>
                    <a href="/link" className="all-description">
                        Повний опис
                    </a>
                    <ul className="color-list">
                        <li>
                            Кольори:
                        </li>
                        <li>
                            <img className="color-img" src={colorBlack} alt="black" />
                        </li>
                        <li>
                            <img className="color-img" src={colorBlue} alt="blue" />
                        </li>
                        <li>
                            <img className="color-img" src={colorRed}  alt="red" />
                        </li>
                        <li>
                            <img className="color-img" src={colorWhite}  alt="white" />
                        </li>
                    </ul>
                   <Size/>
                   <div className="card-page__price">
                       <div className="card-page__price-md">
                         <span className="card-page__price-original">
                            7 999 $
                        </span>
                        <span className="card-page__price-discount">
                            6 329 $
                        </span>
                       </div>
                        <div className="card-page__add-cart-count-md">
                            <span>
                                -
                            </span>
                            <p>
                                1
                            </p>
                            <span>
                                +
                            </span>
                        </div>
                   </div>
                   <div className="card-page__add-cart">
                        <div className="card-page__add-cart-count">
                            <span>
                                -
                            </span>
                            <p>
                                1
                            </p>
                            <span>
                                +
                            </span>
                        </div>
                        <div>
                        <ButtonBlackBasket/>
                        </div>
                   </div>
                   <div className="card-page__options">
                        <ProductOptions/>
                   </div>
                </div>
            </div>
            <div className="card-page__options-md">
                        <ProductOptions/>
                   </div>
        </div>
    )
}

export default CardPage