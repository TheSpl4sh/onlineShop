import React, { useState } from "react";
import Links from "./components/Links";
import './style/card-page.scss'
import Size from './components/Size'
import ButtonBlackBasket from '../../components/ButtonBlackBasket/ButtonBlackBasket'
import ProductOptions from './components/ProductOptions.js'
import ImgContainer from "./components/ImgContainer.js";
import ColorList from './components/ColorList.js'
import CardCounter from "./components/CardCounter.js";
import CardCounterMd from "./components/CardCounterMd.js";
import CardPagePost from "./components/CardPagePost.js";
import BelowHeaderBreadcrumbs from '../../components/BelowHeaderBreadcrumbs/BelowHeaderBreadcrumbs';

function CardPage() {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
    
    return(
        <div className="container card-page">
               <BelowHeaderBreadcrumbs
                paths={[
                    { label: "Swoosh Store", url: "/" },
                    { label: "Nike Air VaporMax 2023 Flyknit", url: "/card" },
                ]}
            />
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
                  <ColorList onSelectColor={handleColorChange}/>
                   <Size onSelectSize={handleSizeChange}/>
                   <div className="card-page__price">
                       <div className="card-page__price-md">
                         <span className="card-page__price-original">
                            7 999 $
                        </span>
                        <span className="card-page__price-discount">
                            6 329 $
                        </span>
                       </div>
                        <CardCounterMd/>
                   </div>
                   <div className="card-page__add-cart">
                        <CardCounter/>
                        <div>
                        <CardPagePost/>
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

export { CardPage }