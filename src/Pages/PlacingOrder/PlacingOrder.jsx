import React, { useState } from "react";
import Forma from "../../Pages/PlacingOrder/components/Forma/Forma";
import YourOrder from "../../Pages/PlacingOrder/components/YourOrder/YourOrder";
import emailjs from '@emailjs/browser';


function PlacingOrder({ selectedDeliveryOption, selectedPaymentOption, summa }) {
  const [formCompleted, setFormCompleted] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");
  
  
  const sendEmails = async (e) => {

    e.preventDefault();
    
    try {
      const message = `Дякуємо за замовлення!\n\nДоставка: ${selectedDeliveryOption}\nОплата: ${selectedPaymentOption}\nСума: ${summa}`;
   
      // Send order confirmation email to the customer
      const response = await emailjs.send('service_6rnogqa', 'template_mumdbol', { to_email: customerEmail, message: message }, "9QcklSvU5rOzpDG9r");
      console.log('Email sent:', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const sendEmail = (е) => {
    sendEmails(е);
  };

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
      <div className="wrapper-placingOrder" onSubmit={sendEmails}>
        <Forma setCustomerEmail={setCustomerEmail} setFormCompleted={setFormCompleted} />
        <YourOrder  sendEmail={sendEmails} customerEmail={customerEmail}  formCompleted={formCompleted} />
      </div>
    </div>
  );
}

export { PlacingOrder };



