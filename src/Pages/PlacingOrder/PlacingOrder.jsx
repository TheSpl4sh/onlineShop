import React from "react";

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

import Forma from "../../Pages/PlacingOrder/components/Forma/Forma";
import YourOrder from "../../Pages/PlacingOrder/components/YourOrder/YourOrder";
// import ButtonBlackArrow from "../../components/Button/ButtonBlackArrow/ButtonBlackArrow";
// import lineSum from "./img/Line-sum.png";
// import "./PlacingOrder.scss";

// import Modal from "./components/Modal/Modal";
// import "./components/Modal/Modal.scss";

function PlacingOrder() {
  // const validationSchema = Yup.object().shape({
  //   firstName: Yup.string().required("Це поле є обов'язковим"),
  //   lastName: Yup.string().required("Це поле є обов'язковим"),
  //   email: Yup.string()
  //     .email("Невірна адреса електронної пошти")
  //     .required("Це поле є обов'язковим"),
  //   password: Yup.string()
  //     .required("Це поле є обов'язковим")
  //     .matches(
  //       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  //       "Пароль має містити щонайменше 8 символів, включаючи одну велику літеру, одну малу літеру та одну цифру"
  //     ),
  //   phoneNumber: Yup.string().required("Це поле є обов'язковим"),
  //   region: Yup.string().required("Це поле є обов'язковим"),
  //   city: Yup.string().required("Це поле є обов'язковим"),
  //   street: Yup.string().required("Це поле є обов'язковим"),
  //   postalCode: Yup.string().required("Це поле є обов'язковим"),
  //   houseNumber: Yup.string().required("Це поле є обов'язковим"),
  //   apartment: Yup.string().required("Це поле є обов'язковим"),
  // });

  // const initialValues = {
  //   firstName: "",
  //   lastName: "",
  //   company: "",
  //   region: "",
  //   city: "",
  //   street: "",
  //   postalCode: "",
  //   houseNumber: "",
  //   email: "",
  //   password: "",
  //   phoneNumber: "",
  // };

  // const handleSubmit = async (values) => {
  //   await new Promise((resolve) => setTimeout(resolve, 500));
  //   alert(JSON.stringify(values, null, 2));
  // };

  // let summa = 0;

  // orders.forEach(el => (summa += Number.parseFloat(el.price)));

  // useSelector з корзини редакс

  // const togglePromoCoupon = () => {
  //   setShowPromoCoupon(!showPromoCoupon);
  // };

  // const [showPromoCoupon, setShowPromoCoupon] = useState(false);

  // const [summa] = useState(0);
  // // const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("");
  // // const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  // // const [agreeToPrivacyPolicy, setAgreeToPrivacyPolicy] = useState(false);

  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const [selectedModal, setSelectedModal] = useState(null);

  // const openModal = (modal) => {
  //   setSelectedModal(modal);
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  //   setSelectedModal(null);
  // };

  // const handleOutsideClick = (e) => {
  //   if (modalIsOpen && e.target === e.currentTarget) {
  //     closeModal();
  //   }
  // };

  //  const handleMakeOrder = () => {
  //    if (agreeToPrivacyPolicy && selectedDeliveryOption && selectedPaymentOption) {
  //      setShowModal(true);
  //      alert('Please fill all required fields');
  //    }
  //  };

  return (
    <div className="container">
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Swoosh Store</a>
          <svg
            className="breadcrumb-separator"
            width="17"
            height="9"
            viewBox="0 0 17 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3536 4.85355C16.5488 4.65829 16.5488 4.34171 16.3536 4.14645L13.1716 0.964465C12.9763 0.769203 12.6597 0.769203 12.4645 0.964465C12.2692 1.15973 12.2692 1.47631 12.4645 1.67157L15.2929 4.5L12.4645 7.32843C12.2692 7.52369 12.2692 7.84027 12.4645 8.03553C12.6597 8.23079 12.9763 8.23079 13.1716 8.03553L16.3536 4.85355ZM4.37114e-08 5L16 5L16 4L-4.37114e-08 4L4.37114e-08 5Z"
              fill="#DADADA"
            ></path>
          </svg>
        </li>
      </ul>
      <div className="placingOrder-header">Оформлення замовлення</div>
      <div className="wrapper-placingOrder">
        <Forma />
        <YourOrder />
      </div>
    </div>
  );
}

export { PlacingOrder };
