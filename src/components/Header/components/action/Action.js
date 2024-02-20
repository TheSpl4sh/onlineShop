
import { BsSearch, BsHeart, BsBasket3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

import "./Action.scss"

const Action = () => {
	return ( 
		<div className="header-icon">
			<div className="header-icon__item">
			<FaRegUser className="header-form__icon" color="curent-color" />
			</div>
            <div className="header-icon__item">				
				<BsSearch />								
			</div>
            <div className="header-icon__item">
			{/* <Link to="/FavoritePage">
			<span className="count"></span>
			<BsHeart />
			</Link> */}
				<BsHeart /></div>
            <div className="header-icon__item">
				{/* <Link to="/BasketPage">
				<span className="count"></span>
			<BsBasket3 />
			</Link> */}				
				<BsBasket3 />
				</div>
			
          </div>
	 );
}
 
export default Action;