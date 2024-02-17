// import { CiSearch, CiHeart, CiShoppingBasket } from "react-icons/ci";
import { BsSearch, BsHeart, BsBasket3 } from "react-icons/bs";





import "./Action.scss"

const Action = () => {
	return ( 
		<div className="header-icon">
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