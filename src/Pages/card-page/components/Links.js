import React from "react";
import arrow from '../iamges/arrow.png'
import '../style/card-page.scss'

function Links() {
    return(
        <div>
            <div className="links">
                <p>
                    Swoosh Store 
                </p>
                <img src={arrow} alt="img"/>
                <p>
                    Чоловічі
                </p>
                <img src={arrow} alt="img"/>
                <p>
                     Коллекція Air Max
                </p>
                <img src={arrow} alt="img"/>
                <p className="links__here">
                     Nike Air VaporMax 2023 Flyknit
                </p>
            </div>
        </div>
    )
}

export default Links