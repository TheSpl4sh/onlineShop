import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function Size() {
    const { id } = useParams(); 
    const product = useSelector((state) => state.catalog.items.find((item) => item.id === id))
   
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const navigate = useNavigate();
 
  const [activeId, setActiveId] = useState(params.get('size') || "");

  const handleButtonClick = (id) => {
    setActiveId(id === activeId ? "" : id);
  };

  useEffect(() => {
    params.set('size', activeId);
    navigate({ search: params.toString() });
  }, [activeId]);

  console.log("Active ID:", activeId);
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
                            {product.size.map((size, index) => (
                                <li
                                    key={index} 
                                    className={`all-size size-li ${activeId === index.toString() && "active"}`} 
                                    onClick={() => handleButtonClick(index.toString())} 
                                >
                                    {size}
                                </li>
                            ))}
                            {/* <li id="36,5" className={`half-size size-li ${activeId === "36,5" && "active"}`} onClick={() => handleButtonClick("36,5")}>
                                36,5
                            </li>
                            <li id="37"  className={`all-size size-li ${activeId ==="37" && "active"}`} onClick={() => handleButtonClick("37")}>
                                37
                            </li>
                            <li id="37,5" className={`half-size size-li ${activeId === "37,5" && "active"}`} onClick={() => handleButtonClick("37,5")}>
                                37,5
                            </li>
                            <li id="38" className={`all-size size-li ${activeId === "38" && "active"}`} onClick={() => handleButtonClick("38")}>
                                38
                            </li>
                            <li id="38,5" className={`half-size size-li ${activeId === "38,5" && "active"}`} onClick={() => handleButtonClick("38,5")}>
                                38,5
                            </li>
                            <li id="39" className={`all-size size-li ${activeId === "39" && "active"}`} onClick={() => handleButtonClick("39")}>
                                39
                            </li>
                             <li id="39,5" className={`half-size size-li ${activeId === "39,5" && "active"}`} onClick={() => handleButtonClick("39,5")}>
                                39,5
                            </li>
                            <li id="40" className={`all-size size-li ${activeId === "40" && "active"}`} onClick={() => handleButtonClick("40")}>
                                40
                            </li>
                            <li id="40,5" className={`half-size size-li ${activeId === "40,5" && "active"}`} onClick={() => handleButtonClick("40,5")}>
                                40,5
                            </li>
                            <li id="41" className={`all-size size-li ${activeId === "41" && "active"}`} onClick={() => handleButtonClick("41")}>
                                41
                            </li>
                            <li className="half-size size-li available">
                                41,5
                            </li>
                            <li className="all-size size-li available">
                                42
                            </li>
                            <li id="42,5" className={`half-size size-li ${activeId === "42,5" && "active"}`} onClick={() => handleButtonClick("42,5")}>
                                42,5
                            </li>
                            <li id="43" className={`all-size size-li ${activeId === "43" && "active"}`} onClick={() => handleButtonClick("43")}>
                                43
                            </li>
                            <li id="43,5" className={`half-size size-li ${activeId === "43,5" && "active"}`} onClick={() => handleButtonClick("43,5")}>
                                43,5
                            </li>
                            <li id="44,5" className={`half-size size-li ${activeId === "44,5" && "active"}`} onClick={() => handleButtonClick("44,5")}>
                                44,5
                            </li> */}
                        </ul>
                   </div>
    )
}

export default Size