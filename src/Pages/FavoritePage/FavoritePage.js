import { useFavorite } from "../../components/FavoriteContext";
import { ReactComponent as OrangeSvg } from "../../components/LinkButton/icons/orange_btn_svg.svg";
import BelowHeaderBreadcrumbs from "../../components/BelowHeaderBreadcrumbs/BelowHeaderBreadcrumbs";
import { BsHeartFill, BsBasket3 } from "react-icons/bs";
import LinkButton from "../../components/LinkButton/LinkButton";
import Button from "../../components/Button/Button/Button";

import "./FavoritePage.scss";

const FavoritePage = () => {
  const { favorites, removeFromFavorites } = useFavorite();

  const handleDelete = (productId) => {
    removeFromFavorites(productId);
  };
  
  return (
    <div className="container">
      <BelowHeaderBreadcrumbs
        paths={[
          { label: 'Swoosh Store', url: '/' },
          { label: 'Обране', url: '/favorites' },
        ]}
      />
      <h1>Обрані товари</h1>
      {favorites.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-content">
            <h2 className="empty-cart-heading">Упс..., поки ви нічого не обрали</h2>
            <p className="empty-cart-text">
              Але можете перейти до <strong>"Каталогу"</strong> де ви знайдете багато цікавих варіантів.
            </p>
            <LinkButton path="/catalog" text="Перейти до каталогу" SvgIcon={OrangeSvg} className="orange" />
            {/* <Button
            className="button btn-orangeLink"
            to="/catalog"
            >
              Перейти до каталогу
            <BsArrowRight /> 
            </Button> */}
          </div>
        </div>
      ) : (
        <div className="favorite-cards">
          {favorites.map((favorite, index) => (
            <div key={index} className="favorite-card">
              <div className="favorite-img-wrapper">
                <img src={favorite.logo_img} alt="sneaker" draggable="false" className="favorite-img" />
                <h4 className="favorite-img-logo">{favorite.name}</h4>
              </div>
              <p className="favorite-description">{favorite.description}</p>
              <p className="favorite-price">{'ціна:' + favorite.price + ' ₴'}</p>
                <Button
                className="button btn-black"
                to="/#"
                >
                  <BsBasket3/>
                купить 
                </Button>             
              <Button
              className="button btn-orange"
              onClick={() => handleDelete(favorite.id)}
              >
              <BsHeartFill />
              видалить
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { FavoritePage };
