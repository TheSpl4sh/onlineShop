// import EmptyCart from "../../components/EmptyCart/EmptyCart";
import LinkButton from "../../components/LinkButton/LinkButton";
import { ReactComponent as OrangeSvg } from "../../components/LinkButton/icons/orange_btn_svg.svg";

const ChildrenClothingPage = () => {

	
	return ( 
		<>
		<div className="empty-cart">
            <div className="empty-cart-content">

			<h2 className="empty-cart-heading">
                    Упс..., дитячі само-пляси закінчились
                </h2>
                
                {/* <h2 className="empty-cart-heading">
                    Упс..., ваша корзина виглядає самотньо
                </h2> */}
                {/* <p className="empty-cart-text">
                    Може, додати їй товарів для компанії? На сторінці{" "}
                    <strong>"Каталог"</strong> ви знайдете багато цікавих
                    варіантів.
                </p> */}
				<p className="empty-cart-text">
				можете купите на виріст! На сторінці{" "}
                    <strong>"Каталог"</strong> ви знайдете багато цікавих
                    варіантів.
                </p>

                <LinkButton
                    path={"/catalog"}
                    text="Перейти до каталогу"
                    SvgIcon={OrangeSvg}
                    className="orange"
                />
            </div>
        </div>
		{/* <h1>ChildrenClothingPage</h1> */}
		</>
	 );
}
 
export { ChildrenClothingPage };