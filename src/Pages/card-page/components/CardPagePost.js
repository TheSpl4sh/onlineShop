import React, { useState } from "react";
import ColorList from "./ColorList";
import Size from "./Size";

function CardPage() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const sendDataToServer = () => {
    // Відправити дані на сервер
    fetch("http://localhost:4000/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        size: selectedSize,
        color: selectedColor,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data saved successfully");
        } else {
          console.error("Failed to save data");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container card-page">
      {/* Решта вашого коду */}
      <button onClick={sendDataToServer}>Відправити дані на сервер</button>
    </div>
  );
}

export default CardPage;
