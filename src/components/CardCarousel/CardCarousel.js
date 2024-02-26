import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CardCarousel/CardCarousel.scss";
import { ReactComponent as ArrowRight } from "../CardCarousel/icons/Arrow_right.svg";
import { ReactComponent as ArrowLeft } from "../CardCarousel/icons/Arrow_left.svg";
import image1 from "./images/Rectangle3.jpg";
import image2 from "./images/Rectangle4.jpg";
import image3 from "./images/Rectangle5.jpg";

const CatalogSlider = ({ heading }) => {
    const NextArrow = ({ onClick }) => (
        <div className="arrow-next" onClick={onClick}>
            <ArrowRight />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="arrow-prev" onClick={onClick}>
            <ArrowLeft />
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div>
            <div className="divider"></div>
            <h2>{heading}</h2>
            <Slider {...settings}>
                <div className="card-item-img">
                    <img src={image1} alt="Card 1" />
                </div>
                <div>
                    <img src={image2} alt="Card 2" />
                </div>
                <div>
                    <img src={image3} alt="Card 3" />
                </div>
                <div>
                    <img src={image2} alt="Card 1" />
                </div>
                <div>
                    <img src={image1} alt="Card 2" />
                </div>
                <div>
                    <img src={image3} alt="Card 3" />
                </div>
            </Slider>
        </div>
    );
};

export default CatalogSlider;
