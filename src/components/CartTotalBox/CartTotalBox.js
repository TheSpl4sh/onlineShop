import React from "react";
import "./CartTotalBox.scss";
import LinkButton from "../LinkButton/LinkButton";
import { ReactComponent as BlackSvg } from "../LinkButton/icons/black_btn_svg.svg";

const CartTotalBox = ({ totalSum }) => {
    return (
        <div className="total-box">
            <div className="total-box__content">
                <h3 className="total-box__title">Всього</h3>
                <div className="total-box__value">
                    <span className="total-box__label">Вартість</span>
                    <span className="total-box__amount">{totalSum + " ₴"}</span>
                </div>
                {/* <div className="total-box__promo-code">
                    <div className="total-box__promo-input-wrapper">
                        <input
                            type="text"
                            id="promo-input"
                            placeholder="Промокод"
                            className="total-box__promo-input"
                        />
                    </div>
                    <button type="button" className="total-box__promo-button">
                        Застосувати промокод
                    </button>
                </div> */}
                <LinkButton
                    path="/order"
                    text="Замовити"
                    SvgIcon={BlackSvg}
                    className="black"
                />
            </div>
        </div>
    );
};

export default CartTotalBox;
