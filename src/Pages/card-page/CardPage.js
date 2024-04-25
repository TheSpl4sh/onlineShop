// CardPage.js
import React from 'react';
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useFavorite } from "../../components/FavoriteContext.js";
import Size from "./components/Size";
import AddToCartButton from "./components/CartButton";
import ProductOptions from "./components/ProductOptions.js";
import ImgContainer from "./components/ImgContainer.js";
import CardCounter from "./components/CardCounter.js";
import CardCounterMd from "./components/CardCounterMd.js";
import BelowHeaderBreadcrumbs from "../../components/BelowHeaderBreadcrumbs/BelowHeaderBreadcrumbs";
import ProductsList from "../../components/Products/ProductsList.js";

import "./style/card-page.scss";

function CardPage() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const product = useSelector((state) =>
    state.catalog.items.find((item) => item.id === id)
  );
  const { style_color } = product;
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  let nameProd = product.name;

  const { addToFavorites, removeFromFavorites, favorites } = useFavorite();
  const isFavorite = favorites.some((favorite) => favorite.id === product.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };
  console.log("CardPage", favorites);

  // Assuming you have the token stored in a variable called authToken
  const authToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOTljZTE5NmQ0MGZiMWI3NDdiYzVmNSIsImZpcnN0TmFtZSI6IkN1c3RvbWVyIiwibGFzdE5hbWUiOiJOZXdvbmUiLCJpYXQiOjE1NzAzNjU0ODIsImV4cCI6MTU3MDM2OTA4Mn0._arHw0HC2uLsH6Ow0LJEeuaj03S4dB9x--yfp5Kj_r0';

  return (
    <div className="container card-page">
      <BelowHeaderBreadcrumbs
        paths={[
          { label: "Swoosh Store", url: "/" },
          { label: product.name, url: "/products" },
        ]}
      />
      <div className="content-container">
        <ImgContainer
          logo_img={product.logo_img}
          chips={product.chips}
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />

        <div className="text-container">
          <h1 className="text-container__title">{nameProd}</h1>
          <p className="text-container__description">{product.description}</p>
          <div className="vertical-card__colors-block">
            <span className="vertical-card__colors-span">Colors:</span>
            {style_color.map((color) => (
              <div
                key={color}
                style={{
                  backgroundColor: color,
                  border: `2px solid ${
                    selectedColor === color ? "orange" : "gray"
                  }`,
                }}
                className={`vertical-card__sneaker-color color_list ${
                  selectedColor === color && "selected"
                }`}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
          <Size onSelectSize={handleSizeChange} />
          <div className="card-page__price">
            <div className="card-page__price-md">
              <span className="card-page__price-original">
                {product.previousPrice}
              </span>
              <span className="card-page__price-discount">
                {product.price + " ₴"}
              </span>
            </div>
            <CardCounterMd />
          </div>
          <div className="card-page__add-cart">
            <CardCounter />
            {/* Pass authToken as a prop to CartButton */}
            <AddToCartButton productId={product.id} token={authToken} />
          </div>
          <div className="card-page__options">
            <ProductOptions
              description={product.description}
              color={product.color}
              material={product.material}
            />
          </div>
        </div>
      </div>
      <div className="card-page__options-md">
        <ProductOptions
          description={product.description}
          color={product.color}
          material={product.material}
        />
      </div>
      <section className='arrivals-section'>
        <article className='arrivals-section__title-container'>
          <h1 className='arrivals-section__title'>MAY INTEREST YOU</h1>
        </article >
        <article className='arrivals-section__products-container'>
          <ProductsList productType="DISCOUNT" />
        </article>
      </section>
    </div>
  );
}

export { CardPage };
