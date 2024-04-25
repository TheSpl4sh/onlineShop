import { React, useState } from "react";
import "./subscribe.scss";
import * as Sentry from "@sentry/react";

const Subscribe = () => {
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
      {successMessage && <div className="subscribe-success-box"><p className="subscribe-success-message">{successMessage}</p></div>}
      {errorMessage && (
          <div className="subscribe-success-box">
            <p className="subscribe-success-message">{errorMessage}</p>
            <p className="subscribe-success-message">
              Будь ласка,{" "}
              <button onClick={() => setErrorMessage("")}>спробуйте знову.</button>
            </p>
          </div>
      )}
      {!successMessage && !errorMessage && (
          <form onSubmit={handleSubmit} className="subscribe-form">
            <input className="subscribe-input"
              aria-label="Your email address"
              name="email_address"
              placeholder="Email"
              required
              type="email"
              onChange={handleEmailChange}
              value={email}
            />
            <button className="subscribe-button">Підписатися</button>
          </form>
      )}
    </div>
  );
};

export default Subscribe;

