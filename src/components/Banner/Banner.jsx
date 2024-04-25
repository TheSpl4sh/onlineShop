
import React from "react";
import Rectangle from "../Banner/img/Rectangle.svg";
import ButtonBlackArrow from "../Button/ButtonBlackArrow/ButtonBlackArrow";
import SliderCircle from "../Button/SliderCircle/SliderCircle";
import SliderTimer from "../Button/SliderTimer/SliderTimer";
import Group from "../Banner/img/group-1-1.webp";
import UAH from "../Banner/img/UAH.png";
import "../Banner/Banner.scss";

function Banner() {
  return (
    <div className="wrapper-banner">
      <div className="banner-timer">
        <div className="banner">
          <div className="banner-info">
            <ul className="banner-info--ul">
              <li className="bannerTitle">
                AIR MAX
                <span className="bannerRectangle">
                  <img
                    className="bannerRectangle-img"
                    src={Rectangle}
                    alt="Rectangle"
                  />
                </span>
                FLUKNIT RACER
              </li>
              <li className="bannerText">
                Посилений носок і міцний пластиковий каркас. Інноваційний
                технологія відкривається через перфоровану устілку.
              </li>
              <img className="sneakerBanners" src={Group} alt="Group" />

              <li className="bannerPrice">
                <span className="banner-from">ВІД</span>
                <span className="banner-price">3000</span>
                <img className="uah" src={UAH} alt="UAH" />
              </li>
              <li className="buttonBanner">
                <ButtonBlackArrow text="ДЕТАЛЬНІШЕ" />
              </li>
            </ul>
          </div>
          <img className="sneakerBanner" src={Group} alt="Group" />
        </div>
        <div className="banner-sliderTimer">
          <SliderTimer />
        </div>
      </div>
      <div className="sliderCircle">
        <SliderCircle />
      </div>
    </div>
  );
}

export default Banner;
