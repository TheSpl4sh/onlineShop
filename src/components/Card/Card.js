import React from "react";
// import Slider from "../Slider/Slider";
import './vertical-card.scss';
// import sneakerSmall from './images/sneaker-small.png';
import { Link } from "react-router-dom";


// const Card = ({ item }) => {
    
    return (
            <div className="vertical-card">
                <div className="vertical-card__img-container">
                    <Link to='card'>
                        <img src={item.logo_img} alt="sneaker" draggable="false" className="vertical-card__logo" />
                    </Link>

//                     <div className="vertical-card__chips vertical-card__chips--new">{item.chips}</div>
//                     <button className="favorite-button"></button>

//                     {/* <Slider /> */}
//                 </div>


                <div className="vertical-card__description">
                        <span className="vertical-card__gender">
                            {item.parentId === "men-clothing"
                                ? "ЖІНОЧІ"
                                : "ЧОЛОВІЧІ" }
                        </span>

//                         <h4  className="vertical-card__name">
//                             {item.name}
//                         </h4>

//                         <div className="vertical-card__colors-block">
//                             <span className="vertical-card__colors-span">Кольори:</span>
                            
//                             <button  className="vertical-card__sneaker-color vertical-card__sneaker-color--grey"></button>
//                             <button  className="vertical-card__sneaker-color vertical-card__sneaker-color--red"></button>
//                             <button  className="vertical-card__sneaker-color vertical-card__sneaker-color--black"></button>
//                         </div>
                        
//                         <div className="vertical-card__price-block">
//                             <span className="vertical-card__price-number vertical-card__price-number--actual">
//                                 {item.price}
//                             </span>

//                             {/* <span className="vertical-card__price-number vertical-card__price-number--discount">
//                                 11 699 ₴
//                             </span> */}
//                             <button className="cart-button"></button>
//                         </div>
//                 </div>
//             </div>
//     )
// }

// export default Card