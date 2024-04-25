import LinkButton from "../../components/LinkButton/LinkButton";
import { ReactComponent as OrangeSvg } from "../../components/LinkButton/icons/orange_btn_svg.svg";
import BelowHeaderBreadcrumbs from '../../components/BelowHeaderBreadcrumbs/BelowHeaderBreadcrumbs';

const ChildrenClothingPage = () => {
	
	return ( 
		<div className="container">
        <BelowHeaderBreadcrumbs
                paths={[
                    { label: "Swoosh Store", url: "/" },
                    { label: "Каталог", url: "/catalog" },
                    { label: "Дитячі", url: "/children" },
                ]}
            />
		<div className="empty-cart">        
            <div className="empty-cart-content">
			<h2 className="empty-cart-heading">
                    Упс..., дитячі само-пляси закінчились
                </h2>
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
		</div>
	 );
}
 
export { ChildrenClothingPage };