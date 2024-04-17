import React from "react";
import {BsHeart} from "react-icons/bs";
// import imgCros from '../iamges/img-cros.png'
// import imgCrosMd from '../iamges/img-cros-md.png'
// import imgCros1 from '../iamges/img-cros-1.png'
// import imgCros2 from '../iamges/img-cros-2.png'
// import imgCros3 from '../iamges/img-cros-3.png'
// import imgCros4 from '../iamges/img-cros-4.png'
// import imgCros1Md from '../iamges/img-cros-1-md.png'
// import imgCros2Md from '../iamges/img-cros-2-md.png'
// import imgCros3Md from '../iamges/img-cros-3-md.png'
// import imgCros4Md from '../iamges/img-cros-4-md.png'
// import imgCros1Lg from '../iamges/img-cros-1-lg.png'
// import imgCros2Lg from '../iamges/img-cros-2-lg.png'
// import imgCros3Lg from '../iamges/img-cros-3-lg.png'
// import imgCros4Lg from '../iamges/img-cros-4-lg.png'

function ImgContainer({ logo_img, chips }) {
    return(
        <div className="img-container">
        <img src={logo_img} alt="img" draggable="false" />
        <div className="card-page-chips">
                <div className="chips-card-page">{chips}</div>
        </div>
        <BsHeart className="card-page-heart-icon"/>
        {/* <div className="img-container-grid">
            <picture>
                <source srcSet={ imgCros1Lg} media="(min-width: 768px) and (max-width: 1420px)" draggable="false"  />
                <source srcSet={ imgCros1Md} media="(max-width: 767px)" draggable="false"  />
                <img src={imgCros1} alt="img" draggable="false" />
            </picture>
            <picture>
                <source srcSet={ imgCros2Lg} media="(min-width: 768px) and (max-width: 1420px)" draggable="false"  />
                <source srcSet={ imgCros2Md} media="(max-width: 767px)" draggable="false"  />
                <img src={imgCros2} alt="img" draggable="false" />
            </picture>
            <picture>
                <source srcSet={ imgCros3Lg} media="(min-width: 768px) and (max-width: 1420px)" draggable="false"  />
                <source srcSet={ imgCros3Md} media="(max-width: 767px)" draggable="false"  />
                <img src={imgCros3} alt="img" draggable="false" />
            </picture>
            <picture>
                <source srcSet={ imgCros4Lg} media="(min-width: 768px) and (max-width: 1420px)" draggable="false"  />
                <source srcSet={ imgCros4Md} media="(max-width: 767px)" draggable="false"  />
                <img src={imgCros4} alt="img" draggable="false" />
            </picture>
        </div> */}
        </div>
    )
}

export default ImgContainer