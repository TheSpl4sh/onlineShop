import React, { useState } from "react";


function Size() {
    const [activeId, setActiveId] = useState("");

    const handleButtonClick = (id) => {
        if (activeId) {
            const prevActiveButton = document.getElementById(activeId);
            prevActiveButton.classList.remove("active");
        }
        
        const currentButton = document.getElementById(id);
        currentButton.classList.add("active");
        
        setActiveId(id);
    };
    return(
        <div className="size-chart">
                        <div className="size-chart__container">
                            <h2>
                                Розмір (EU):
                            </h2>
                            <h3>
                                Розмірна таблиця
                            </h3>
                        </div>
                        <ul className="size">
                            <li id="passive" className={`all-size size-li ${activeId === "passive" && "active"}`} onClick={() => handleButtonClick("passive")}>
                                36
                            </li>
                            <li id="passive1" className={`half-size size-li ${activeId === "passive1" && "active"}`} onClick={() => handleButtonClick("passive1")}>
                                36,5
                            </li>
                            <li id="passive2" className={`all-size size-li ${activeId === "passive2" && "active"}`} onClick={() => handleButtonClick("passive2")}>
                                37
                            </li>
                            <li id="passive3" className={`half-size size-li ${activeId === "passive3" && "active"}`} onClick={() => handleButtonClick("passive3")}>
                                37,5
                            </li>
                            <li id="passive4" className={`all-size size-li ${activeId === "passive4" && "active"}`} onClick={() => handleButtonClick("passive4")}>
                                38
                            </li>
                            <li id="passive5" className={`half-size size-li ${activeId === "passive5" && "active"}`} onClick={() => handleButtonClick("passive5")}>
                                38,5
                            </li>
                            <li id="passive6" className={`all-size size-li ${activeId === "passive6" && "active"}`} onClick={() => handleButtonClick("passive6")}>
                                39
                            </li>
                             <li id="passive7" className={`half-size size-li ${activeId === "passive7" && "active"}`} onClick={() => handleButtonClick("passive7")}>
                                39,5
                            </li>
                            <li id="passive8" className={`all-size size-li ${activeId === "passive8" && "active"}`} onClick={() => handleButtonClick("passive8")}>
                                40
                            </li>
                            <li id="passive9" className={`half-size size-li ${activeId === "passive9" && "active"}`} onClick={() => handleButtonClick("passive9")}>
                                40,5
                            </li>
                            <li id="passive10" className={`all-size size-li ${activeId === "passive10" && "active"}`} onClick={() => handleButtonClick("passive10")}>
                                41
                            </li>
                            <li className="half-size size-li available">
                                41,5
                            </li>
                            <li className="all-size size-li available">
                                42
                            </li>
                            <li id="passive11" className={`half-size size-li ${activeId === "passive11" && "active"}`} onClick={() => handleButtonClick("passive11")}>
                                42,5
                            </li>
                            <li id="passive12" className={`all-size size-li ${activeId === "passive12" && "active"}`} onClick={() => handleButtonClick("passive12")}>
                                43
                            </li>
                            <li id="passive13" className={`half-size size-li ${activeId === "passive13" && "active"}`} onClick={() => handleButtonClick("passive13")}>
                                43,5
                            </li>
                            <li id="passive14" className={`half-size size-li ${activeId === "passive14" && "active"}`} onClick={() => handleButtonClick("passive14")}>
                                44,5
                            </li>
                        </ul>
                   </div>
    )
}

export default Size