import React from "react";
import './discount-card.scss'
import cardImg from './images/card-img.png'
import  cardImgLg from './images/card-ing-bp-lg.png'
import cardImgMd from './images/card-img-bp-md.png'
import favorite from './images/favorite.png'
import colorRed from './images/color-red.png'
import colorGrey from './images/color-grey.png'
import colorDgrey from './images/color-Dgrey.png'
import cart from './images/cart.png'


function DiscountCard() {
    return (
        <div className="dicsount-card">
       <picture>
            <source srcSet={ cardImgLg } media="(min-width: 768px) and (max-width: 1919px)" />
            <source srcSet={ cardImgMd} media="(max-width: 767px)" />
            <img src={cardImg} alt="img" />
        </picture>
        <div className="dicsount-card__description">
            <span className="dicsount-card__gender">
                Жіночі
            </span>
            <h1  className="dicsount-card__name">
                 Nike Air VaporMax 2023 Flyknit
                 <img className="dicsount-card__favorite-md" src={favorite} alt="favorite"/>
            </h1>
            <ul>
                <li>
                    Кольори:
                </li>
                <li>
                    <img className="dicsount-card__color-img" src={colorDgrey} alt="Dgrey" />
                </li>
                <li>
                    <img className="dicsount-card__color-img" src={colorGrey}  alt="grey" />
                </li>
                <li>
                    <img className="dicsount-card__color-img" src={colorRed}  alt="red" />
                </li>
            </ul>
            <div className="dicsount-card__price">
                <h2 className="dicsount-card__price-discount">
                    3 244₴
                </h2>
                <h2 className="dicsount-card__price-original">
                    4805₴
                </h2>
                <img src={cart} />
            </div>
        </div>
        <img className="dicsount-card__favorite" src={favorite}/>
        </div>
    )
}

export default DiscountCard