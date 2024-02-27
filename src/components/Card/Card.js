import React from "react";
import Slider from "../Slider/Slider";
import './vertical-card.scss';
import sneakerSmall from './images/sneaker-small.png';
import sneakerMedium from './images/sneaker-medium.png';
import sneakerLarge from './images/sneaker-large-img.png';

function Card() {
    return (
            <div className="vertical-card">
                <div className="vertical-card__img-container">
                    <a href="#top">
                        <picture className="vertical-card__logo">
                            <source srcSet={ sneakerLarge } media="(min-width: 1920px)" />
                            <source srcSet={ sneakerMedium } media="(min-width: 768px)" />
                            <img src={sneakerSmall} alt="sneaker" draggable="false"/>
                        </picture>
                    </a>

                    <div className="vertical-card__chips vertical-card__chips--new">НОВИНКА</div>
                    <button className="favorite-button"></button>

                    <Slider />
                </div>


                <div className="vertical-card__description">
                        <span className="vertical-card__gender">
                            ЖІНОЧІ
                        </span>

                        <h4  className="vertical-card__name">
                            Nike Air VaporMax 2023 Flyknit
                        </h4>

                        <div className="vertical-card__colors-block">
                            <span className="vertical-card__colors-span">Кольори:</span>
                            
                            <button  className="vertical-card__sneaker-color vertical-card__sneaker-color--grey"></button>
                            <button  className="vertical-card__sneaker-color vertical-card__sneaker-color--red"></button>
                            <button  className="vertical-card__sneaker-color vertical-card__sneaker-color--black"></button>
                        </div>
                        
                        <div className="vertical-card__price-block">
                            <span className="vertical-card__price-number vertical-card__price-number--actual">
                                7 899 ₴
                            </span>

                            <span className="vertical-card__price-number vertical-card__price-number--discount">
                                11 699 ₴
                            </span>
                            <button className="cart-button"></button>
                        </div>
                </div>
            </div>
    )
}

export default Card