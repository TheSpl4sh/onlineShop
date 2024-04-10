import React from "react";
import Links from "./components/Links";
import './style/card-page.scss'
import Size from './components/Size'
import ButtonBlackBasket from '../../components/ButtonBlackBasket/ButtonBlackBasket'
import ProductOptions from './components/ProductOptions.js'
import ImgContainer from "./components/ImgContainer.js";
import ColorList from './components/ColorList.js'
import CardCounter from "./components/CardCounter.js";
import CardCounterMd from "./components/CardCounterMd.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function CardPage() {
    const { id } = useParams(); // Получение параметра id из URL
    
    const [product, setProduct] = useState(null);

  /* useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`api/catalog/${id}`); // Пример URL-адреса запроса
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id]); */
    return(
        <div className="container card-page">
            <Links/>
            <div className="content-container">
            <ImgContainer/>
                <div className="text-container">
                    <h1 className="text-container__title">
                        {/* {product.name} */}
                    </h1>
                    <p className="text-container__description">
                         Кросівки Nike Air VaporMax 2023 Flyknit з підтримуючою амортизацією, створеною для плавного бігу, є абсолютно новим поглядом на знайому колекцію.
                    </p>
                    <a href="/link" className="all-description">
                        Повний опис
                    </a>
                  <ColorList/>
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
                        <CardCounterMd/>
                   </div>
                   <div className="card-page__add-cart">
                        <CardCounter/>
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

export { CardPage }