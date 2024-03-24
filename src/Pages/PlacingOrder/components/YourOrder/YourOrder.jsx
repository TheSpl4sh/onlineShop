import React, {useState} from 'react'
import ButtonBlackArrow from "../../../../../src/components/Button/ButtonBlackArrow/ButtonBlackArrow";
import lineSum from "../../img/Line-sum.png";
import "../../../PlacingOrder/PlacingOrder.scss";

import Modal from "../../components/Modal/Modal";
import "../../components/Modal/Modal.scss";

function YourOrder() {
    const [summa] = useState(0);
    // const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("");
    // const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
    // const [agreeToPrivacyPolicy, setAgreeToPrivacyPolicy] = useState(false);
  
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const [selectedModal, setSelectedModal] = useState(null);
  
    const openModal = (modal) => {
      setSelectedModal(modal);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
      setSelectedModal(null);
    };
  
    const handleOutsideClick = (e) => {
      if (modalIsOpen && e.target === e.currentTarget) {
        closeModal();
      }
    };
  return (
<div className="wrapper-yourOrder">
          <div className="yourOrder">
            <h1>Ваше замовлення</h1>
            <div className="yourOrder-basket">
              {/* 
                <ul>
              {orders.map((order, index) => (
                <li key={index}>
                  {order.productName}: {order.price}
                </li>
              ))}
            </ul> */}

              <p className="yourOrder-sum">
                Сума
                <img className="line-sum" src={lineSum} alt="line-sum" />
                {new Intl.NumberFormat("uk-UA", {
                  style: "currency",
                  currency: "UAH",
                }).format(summa)}
              </p>
            </div>
          </div>

          <div>
            <div className="delivery-header">
              <label htmlFor="delivery">Доставка:</label>
            </div>

            <ul>
              <li className="delivery-options">
                <input
                  className="delivery-radio"
                  type="radio"
                  id="option1"
                  name="delivery-option"
                  value="delivery-radio"
                  // checked={selectedDeliveryOption === "Pickup from the store"}
                  // onChange={() =>
                  //   setSelectedDeliveryOption("Pickup from the store")
                  // }
                />

                <label htmlFor="option1">Самовивіз з магазину</label>
              </li>
              <li className="delivery-options">
                <input
                  className="delivery-radio"
                  type="radio"
                  id="option2"
                  name="option"
                  value="option2"
                />
                <label htmlFor="option2">Київ</label>
              </li>
              <li className="delivery-options">
                <input
                  className="delivery-radio"
                  type="radio"
                  id="option3"
                  name="option"
                  value="option3"
                />
                <label htmlFor="option3">Львів</label>
              </li>
            </ul>
          </div>

          <div>
            <div className="payment-header">
              <label htmlFor="payment">Оплата:</label>
            </div>
            <ul>
              <li className="payment-options">
                <input
                  className="payment-radio"
                  type="radio"
                  id="online-payment"
                  name=""
                  value="Online payment"
                  // checked={selectedPaymentOption === "Online payment"}
                  // onChange={() => setSelectedPaymentOption("Online payment")}
                />
                <label htmlFor="optionOnline-payment">Онлайн оплата</label>
              </li>
              <li className="payment-options">
                <input
                  className="payment-radio"
                  type="radio"
                  id="optionCard upon receipt"
                  name="options"
                  value="optionCard upon receipt"
                />
                <label htmlFor="option">Картою при отриманні</label>
              </li>
              <li className="payment-options">
                <input
                  className="payment-radio"
                  type="radio"
                  id="optionIn cash"
                  name="options"
                  value="optionIn cash"
                />
                <label htmlFor="optionIn cash">Готівкою</label>
              </li>
            </ul>
          </div>
          <div>
            <input
              className="checkbox-order"
              type="checkbox"
              id="checkbox-order"
              name="checkbox-order"
              // checked={agreeToPrivacyPolicy}
              // onChange={() => setAgreeToPrivacyPolicy(!agreeToPrivacyPolicy)}
            />
            <label htmlFor="checkbox-order">
              <span>
                Даю згоду на обробку персональних даних згідно з політика
                конфіденційності
              </span>
            </label>
          </div>
          <div className="button-order">
            <ButtonBlackArrow
              text="Оформити замовлення"
              onClick={() => openModal("Modal")}
            />
          </div>

          {modalIsOpen && selectedModal === "Modal" && (
            <div className="wrapper" onClick={handleOutsideClick}>
              <Modal
                header="Modal 2"
                closeButton={true}
                text="Second modal window"
                onClose={closeModal}
                actions={
                  <button
                    onClick={closeModal}
                    backgroundColor="darkorchid"
                    text="ADO TO FAVORITE"
                  />
                }
              />
            </div>
          )}
        </div>
  )
}

export default YourOrder