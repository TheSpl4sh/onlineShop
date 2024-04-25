import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFavorite } from "../../components/FavoriteContext.js";
import Size from "./components/Size";
import ButtonBlackBasket from "../../components/ButtonBlackBasket/ButtonBlackBasket";
import ProductOptions from "./components/ProductOptions.js";
import ImgContainer from "./components/ImgContainer.js";
// import ColorList from "./components/ColorList.js";
import CardCounter from "./components/CardCounter.js";
import CardCounterMd from "./components/CardCounterMd.js";
import BelowHeaderBreadcrumbs from "../../components/BelowHeaderBreadcrumbs/BelowHeaderBreadcrumbs";
import ProductsList from "../../components/Products/ProductsList.js";
import "./style/card-page.scss";
import { handleAdd } from "../../redux/cart/cartSlice.js";

function CardPage() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const dispatch = useDispatch()

  const dispatchedHandleAdd = (item) => {
    dispatch(handleAdd(item))
  }

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
          {/* <a href="/link" className="all-description">
                        {product.description}
                    </a> */}
          <div className="vertical-card__colors-block">
            <span className="vertical-card__colors-span">Кольори:</span>

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
            <div>
              <ButtonBlackBasket 
              dispatchedHandleAdd={dispatchedHandleAdd}
              productId = {product._id}
              />
            </div>
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
              <h1 className='arrivals-section__title'>МОЖЛИВО ВАС ЗАЦІКАВИТЬ</h1>
              
             
            </article >

            <article className='arrivals-section__products-container'>
            <ProductsList productType="ЗНИЖКА" />
            </article>
          </section>
    </div>
  );
}

export { CardPage };
