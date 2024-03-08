import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CardCarousel/CardCarousel.scss";
import Card from "../Card/Card";
import { ReactComponent as Arrow } from "../CardCarousel/icons/Arrow_left.svg";
import { useMediaQuery } from "react-responsive";

// const CatalogSlider = ({ heading }) => {
//     const isMobile = useMediaQuery({ maxWidth: 767 });

//     const NextArrow = ({ onClick }) => (
//         <div className="arrow-next" onClick={onClick}>
//             <Arrow />
//         </div>
//     );

//     const PrevArrow = ({ onClick }) => (
//         <div className="arrow-prev" onClick={onClick}>
//             <Arrow />
//         </div>
//     );

//     const desktopSettings = {
//         dots: false,
//         infinite: true,
//         speed: 800,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//     };

//     const mobileSettings = {
//         dots: false,
//         infinite: true,
//         speed: 800,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//     };

//     return (
//         <section className="slider-section">
//             <div className="slider-section__divider"></div>
//             <h2 className="slider-section__heading">{heading}</h2>
//             {isMobile ? (
//                 <Slider {...mobileSettings}>
//                     <div className="slider-section__wrap-item">
//                         <Card />
//                         <Card />
//                     </div>
//                     <div className="slider-section__wrap-item">
//                         <Card />
//                         <Card />
//                     </div>
//                     <div className="slider-section__wrap-item">
//                         <Card />
//                         <Card />
//                     </div>
//                 </Slider>
//             ) : (
//                 <Slider {...desktopSettings} className="slider-section__wrap">
//                     <div className="slider-section__wrap-item">
//                         <Card />
//                     </div>
//                     <div className="slider-section__wrap-item">
//                         <Card />
//                     </div>
//                     <div className="slider-section__wrap-item">
//                         <Card />
//                     </div>
//                     <div className="slider-section__wrap-item">
//                         <Card />
//                     </div>
//                     <div className="slider-section__wrap-item">
//                         <Card />
//                     </div>
//                 </Slider>
//             )}
//         </section>
//     );
// };

// export default CatalogSlider;

const CatalogSlider = ({ heading }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const NextArrow = ({ onClick }) => (
        <div className="arrow-next" onClick={onClick}>
            <Arrow />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="arrow-prev" onClick={onClick}>
            <Arrow />
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: isMobile ? 2 : 3, 
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <section className="slider-section">
            <div className="slider-section__divider"></div>
            <h2 className="slider-section__heading">{heading}</h2>
            <Slider {...settings}>
                {isMobile ? 
                    [...Array(2)].map((_, index) => (
                        <div key={index} className="slider-section__wrap-item">
                            <Card />
                            <Card />
                        </div>
                    ))
                :
                    [...Array(3)].map((_, index) => (
                        <div key={index} className="slider-section__wrap-item">
                            <Card />
                        </div>
                    ))
                }
            </Slider>
        </section>
    );
};

export default CatalogSlider;

