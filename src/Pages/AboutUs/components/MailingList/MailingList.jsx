import { React, useState } from "react";
import "./MailingList.scss";
import * as Sentry from "@sentry/react";

const MailingList = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const SUBSCRIBE_URL = `https://api.convertkit.com/v3/forms/6451826/subscribe`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = JSON.stringify({
      api_key: "d_g0h2rS6_bprHlSNF1OGw",
      email: email,
    });

    try {
      const response = await fetch(SUBSCRIBE_URL, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json; charset=utf-8",
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (json?.subscription?.id) {
        setSuccessMessage("Ви успішно підписалися!");
        setErrorMessage("");
        return;
      }

      setErrorMessage("Ой, щось пішло не так...");
      Sentry.captureMessage("Error subscribing to newsletter", {
        extra: json,
      });
    } catch (err) {
      setErrorMessage("Ой, щось пішло не так...");
      console.error(err);
      Sentry.captureException(err);
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  return (
    <div>
      {successMessage && <div className="mailing-success-box"><p className="mailing-success-message">{successMessage}</p></div>}
      {errorMessage && (
          <div className="mailing-success-box">
            <p className="mailing-success-message">{errorMessage}</p>
            <p className="mailing-success-message">
              Будь ласка,{" "}
              <button onClick={() => setErrorMessage("")}>спробуйте знову.</button>
            </p>
          </div>
      )}
      {!successMessage && !errorMessage && (
        <div className="mailing-list">
          <p className="mailing-subscribe-text">Підпишіться на розсилку</p>
          <p className="mailing-text">Регулярні знижки та спецпропозиції, а також новини компанії.</p>
        <form onSubmit={handleSubmit}>
          <input className="mailing-list-input"
            aria-label="Your email address"
            name="email_address"
            placeholder="Ваш Email"
            required
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
          <button className="mailing-list-button">Підписатися</button>
        </form>
        <p className="mailing-policy">Погоджуюсь із <a href="#">політикою кофіденційності</a></p>
        </div>
      )}
    </div>
  );
};

export default MailingList;
