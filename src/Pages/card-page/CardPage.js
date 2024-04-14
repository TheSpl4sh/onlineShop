import Links from "./components/Links";
import './style/card-page.scss'
import Size from './components/Size'
// import ButtonBlackBasket from '../../components/ButtonBlackBasket/ButtonBlackBasket'
import ProductOptions from './components/ProductOptions.js'
import ImgContainer from "./components/ImgContainer.js";
import ColorList from './components/ColorList.js'
import CardCounter from "./components/CardCounter.js";
import CardCounterMd from "./components/CardCounterMd.js";
import CardPagePost from "./components/CardPagePost.js";
import BelowHeaderBreadcrumbs from '../../components/BelowHeaderBreadcrumbs/BelowHeaderBreadcrumbs';
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from 'react-redux';


function CardPage() {
    const { id } = useParams(); 
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const product = useSelector((state) => state.catalog.items.find((item) => item.id === id))

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

  /* useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`api/products/${_id}`); // Пример URL-адреса запроса
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchProduct();
    
  }, [_id]); */
    

  let nameProd = product.name
  
    return(
        <div className="container card-page">
               <BelowHeaderBreadcrumbs
                paths={[
                    { label: "Swoosh Store", url: "/" },
                    { label: "Nike Air VaporMax 2023 Flyknit", url: "/products" },
                ]}
            />
            <Links/>
            <div className="content-container">
            <ImgContainer
            logo_img={product.logo_img}
            />
                <div className="text-container">
                    <h1 className="text-container__title">
                      {nameProd}
                    </h1>
                    <p className="text-container__description">
                         {product.description}
                    </p>
                    {/* <a href="/link" className="all-description">
                        {product.description}
                    </a> */}
                  <ColorList onSelectColor={handleColorChange}/>
                   <Size onSelectSize={handleSizeChange}/>
                   <div className="card-page__price">
                       <div className="card-page__price-md">
                         <span className="card-page__price-original">
                            {product.previousPrice}
                        </span>
                        <span className="card-page__price-discount">
                            {product.price}
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
                        <ProductOptions 
                        description = {product.description}
                        color={product.color}
                        material={product.material}
                        />
                   </div>
                </div>
            </div>
            <div className="card-page__options-md">
                        <ProductOptions
                        description = {product.description}
                        color={product.color}
                        material={product.material}
                        />
                   </div>
        </div>
    )
}

export { CardPage }