import React from "react";
import Rectangle from "../Banner/img/Rectangle.svg";
import ButtonBlackArrow from "../Button/ButtonBlackArrow/ButtonBlackArrow";
// import SliderCircle from "../Button/SliderCircle/SliderCircle";
// import SliderTimer from "../Button/SliderTimer/SliderTimer";
import Group from "../Banner/img/group-1-1.webp";
import UAH from "../Banner/img/UAH.png";
import "../Banner/Banner.scss"

function Banner() {
  return (
    // <div className="container">
        <div className="banner">
          <div>
            <ul>
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
                Reinforced toe box and durable plastic frame. Innovative
                technology opens through perforated insole.
              </li>
              <img className="sneakerBanners" src={Group} alt="Group" />

              <li className="BannerPrice">
                <span className="banner-from">from</span>
                <span className="banner-price">
                  3000 <img className="uah" src={UAH} alt="UAH" />
                </span>
              </li>
            </ul>
            <div className="buttonBanner">
              <ButtonBlackArrow text="MORE DETAIL" />
            </div>
          </div>
          <img className="sneakerBanner" src={Group} alt="Group" />
          {/* <div className="banner-sliderTimers">
            <SliderTimer />
          </div> */}
        {/* <div className="sliderCircle">
          <SliderCircle />
        </div>

        <div className="banner-sliderTimer">
          <SliderTimer />
        </div> */}
        </div>
    // </div>
  );
}

export default Banner;
