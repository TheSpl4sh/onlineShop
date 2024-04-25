import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function Size() {
    const { id } = useParams(); 
    const product = useSelector((state) => state.catalog.items.find((item) => item.id === id))
   
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const navigate = useNavigate();
 
    const [activeSize, setActiveSize] = useState(params.get('size') || "");

    const handleButtonClick = (size) => {
        setActiveSize(size === activeSize ? "" : size);
    };

    useEffect(() => {
        params.set('size', activeSize);
        navigate({ search: params.toString() });
    }, [activeSize]);

    console.log("Active Size:", activeSize);

    return(
        <div className="size-chart">
            <div className="size-chart__container">
                <h2>Розмір (EU):</h2>
                <h3>Розмірна таблиця</h3>
            </div>
            <ul className="size">
                {product.size.map((size, index) => (
                    <li
                        key={index} 
                        className={`all-size size-li ${size === activeSize && "active"}`} 
                        onClick={() => handleButtonClick(size)} 
                    >
                        {size}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Size;
