import React from "react";
import {BsHeart, BsBasket3 } from "react-icons/bs";
import './discount-card.scss'
import cardImg from './images/card-img.png'
import  cardImgLg from './images/card-ing-bp-lg.png'
import cardImgMd from './images/card-img-bp-md.png'
import colorRed from './images/color-red.png'
import colorGrey from './images/color-grey.png'
import colorDgrey from './images/color-Dgrey.png'
import '../../reset.scss'


function DiscountCard() {
    return (
        <div className="dicsount-card">
       <picture>
            <source srcSet={ cardImgLg } media="(min-width: 768px) and (max-width: 1919px)"  draggable="false" />
            <source srcSet={ cardImgMd} media="(max-width: 767px)" draggable="false"  />
            <img src={cardImg} alt="img" draggable="false" />
        </picture>
        <div className="discount-card-chips">
            <div className="chips-discount-card">20%</div>
        </div>
        <div className="dicsount-card__description">
            <span className="dicsount-card__gender">
                Жіночі
            </span>
            <h1  className="dicsount-card__name">
                 Nike Air VaporMax 2023 Flyknit
                 <div className="dicsount-card__favorite-md">
				<BsHeart className="dicsount-card-heart-icon" />
                </div>
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
                <div className="dicsount-card__cart">		
				    <BsBasket3 className="dicsount-card__cart-icon"/>
				</div>
            </div>
        </div>
        <div className="dicsount-card__favorite">
				<BsHeart className="dicsount-card-heart-icon"/>
        </div>
        </div>
    )
}

export default DiscountCard