import React, { useState } from "react";
import ButtonBlackArrow from "../../../../../src/components/Button/ButtonBlackArrow/ButtonBlackArrow";
import lineSum from "../../img/Line-sum.png";
import "../../../PlacingOrder/PlacingOrder.scss";

// import { customerEmail } from "../Forma/Forma";

import Modal from "../../../../components/ModalUniversal/Modal";
import "../../../../components/ModalUniversal/Modal.scss";

import "../YourOrder/YourOrder.scss";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import CustomRadio from "../CustomRadio/CustomRadio";
import ButtonModal from "../../../../components/Button/ButtonModal/ButtonModal";

function YourOrder() {
  const [summa] = useState(0);
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    console.log("Модальне вікно відкрите");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    console.log("Модальне вікно закрите");
    setModalIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (modalIsOpen && e.target === e.currentTarget) {
      closeModal();
    }
  };

  // const customerEmail = "example@example.com";

  // const sendOrderEmail = () => {
  //   // Формуємо текст повідомлення з даними замовлення
  //   const message = `Дякуємо за замовлення!\n\nДоставка: ${selectedDeliveryOption}\nОплата: ${selectedPaymentOption}\nСума: ${summa}`;

  //   // Відправляємо лист на електронну адресу замовника
  //   fetch("/send-email", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email: customerEmail, message }),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log("Email sent successfully!");
  //       } else {
  //         console.error("Failed to send email.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // };

  //   const customerEmail = document.getElementById("customerEmail").value;
  // sendOrderEmail(customerEmail);

  // const sendOrderEmail = (email) => {
  //   // Формуємо текст повідомлення з даними замовлення
  //   const message = `Дякуємо за замовлення!\n\nДоставка: ${selectedDeliveryOption}\nОплата: ${selectedPaymentOption}\nСума: ${summa}`;

  //   // Відправляємо лист на електронну адресу замовника
  //   fetch("/send-email", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, message }),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log("Email sent successfully!");
  //       } else {
  //         console.error("Failed to send email.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // };

  const sendOrderEmail = (email) => {
    // Формуємо текст повідомлення з даними замовлення
    const message = `Дякуємо за замовлення!\n\nДоставка: ${selectedDeliveryOption}\nОплата: ${selectedPaymentOption}\nСума: ${summa}`;

    // Відправляємо лист на електронну адресу замовника
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Email sent successfully!");
        } else {
          console.error("Failed to send email.");
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="wrapper-yourOrder">
      <div className="yourOrder">
        <h1>Ваше замовлення</h1>
        <div className="yourOrder-basket">
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
          <CustomRadio
            id="option1"
            name="delivery-option"
            value="Pickup from the store"
            checked={selectedDeliveryOption === "Pickup from the store"}
            onChange={() => setSelectedDeliveryOption("Pickup from the store")}
            label="Самовивіз з магазину"
          />

          <CustomRadio
            id="option2"
            name="option"
            value="Київ"
            checked={selectedDeliveryOption === "Київ"}
            onChange={() => setSelectedDeliveryOption("Київ")}
            label="Київ"
          />
          <CustomRadio
            id="option3"
            name="option"
            value="Львів"
            checked={selectedDeliveryOption === "Львів"}
            onChange={() => setSelectedDeliveryOption("Львів")}
            label="Львів"
          />
        </ul>
      </div>

      <div>
        <div className="payment-header">
          <label htmlFor="payment">Оплата:</label>
        </div>
        <ul>
          <CustomRadio
            id="online-payment"
            name="payment-option"
            value="Online payment"
            checked={selectedPaymentOption === "Online payment"}
            onChange={() => setSelectedPaymentOption("Online payment")}
            label="Онлайн оплата"
          />
          <CustomRadio
            id="optionCard-upon-receipt"
            name="payment-option"
            value="Card upon receipt"
            checked={selectedPaymentOption === "Card upon receipt"}
            onChange={() => setSelectedPaymentOption("Card upon receipt")}
            label="Картою при отриманні"
          />
          <CustomRadio
            id="option-in-cash"
            name="payment-option"
            value="In cash"
            checked={selectedPaymentOption === "In cash"}
            onChange={() => setSelectedPaymentOption("In cash")}
            label="Готівкою"
          />
        </ul>
      </div>
      <div>
        <CustomCheckbox text="Я погоджуюсь на обробку персональних даних відповідно до політики конфіденційності" />
      </div>
      <div className="button-order">

        <ButtonBlackArrow
          text="Оформити замовлення"
          onClick={() => {
            const customerEmail =
              document.getElementById("customerEmail").value; // Отримуємо електронну адресу з форми
            sendOrderEmail(customerEmail);
            openModal();
            console.log("Модальне вікно відкрите");
          }}
        />
      </div>

      {modalIsOpen && (
        <div className="wrapper-item" onClick={handleOutsideClick}>
          <Modal
            header="Підтвердження замовлення"
            closeButton={true}
            text="Ваше замовлення успішно оформлено!"
            onClose={closeModal}
            show={modalIsOpen}
            actions={
              <ButtonModal
                onClick={closeModal}
                text="Закрити"
              />
            }
          />
        </div>
      )}
    </div>
  );
}

export default YourOrder;
