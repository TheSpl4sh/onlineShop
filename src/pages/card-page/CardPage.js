import React from "react";
import Links from "./components/Links";
import './style/card-page.scss'
import imgCros from './iamges/img-cros.png'
import imgCrosMd from './iamges/img-cros-md.png'
import imgCros1 from './iamges/img-cros-1.png'
import imgCros2 from './iamges/img-cros-2.png'
import imgCros3 from './iamges/img-cros-3.png'
import imgCros4 from './iamges/img-cros-4.png'
import imgCros1Md from './iamges/img-cros-1-md.png'
import imgCros2Md from './iamges/img-cros-2-md.png'
import imgCros3Md from './iamges/img-cros-3-md.png'
import imgCros4Md from './iamges/img-cros-4-md.png'
import colorWhite from './iamges/color-white.png'
import colorBlack from './iamges/color-black.png'
import colorBlue from './iamges/color-blue.png'
import colorRed from './iamges/color-red.png'
import Size from './components/Size'
import ButtonBlackBasket from '../../components/ButtonBlackBasket/ButtonBlackBasket'
import ProductOptions from './components/ProductOptions.js'
import {BsHeart} from "react-icons/bs";


function CardPage() {
    
    return(
        <div className="container">
            <Links/>
            <div className="content-container">
                <div className="img-container">
                <picture>
                    <source srcSet={ imgCrosMd} media="(max-width: 1420px)" draggable="false"  />
                    <img src={imgCros} alt="img" draggable="false" />
                </picture>
                <div className="card-page-chips">
                        <div className="chips-card-page">20%</div>
                </div>
                <BsHeart className="card-page-heart-icon"/>
                <div className="img-container-grid">
                    <picture>
                        <source srcSet={ imgCros1Md} media="(max-width: 1420px)" draggable="false"  />
                        <img src={imgCros1} alt="img" draggable="false" />
                    </picture>
                    <picture>
                        <source srcSet={ imgCros2Md} media="(max-width: 1420px)" draggable="false"  />
                        <img src={imgCros2} alt="img" draggable="false" />
                    </picture>
                    <picture>
                        <source srcSet={ imgCros3Md} media="(max-width: 1420px)" draggable="false"  />
                        <img src={imgCros3} alt="img" draggable="false" />
                    </picture>
                    <picture>
                        <source srcSet={ imgCros4Md} media="(max-width: 1420px)" draggable="false"  />
                        <img src={imgCros4} alt="img" draggable="false" />
                    </picture>
                </div>
                </div>
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