import React from "react";
import "./subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe-form">
      <input
        className="subscribe-input"
        type="email"
        placeholder="Email"
        required
      />
      <button type="submit" className="subscribe-button">
        Підписатись
      </button>
    </div>
  );
};

export default Subscribe;
