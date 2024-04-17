import React, { useState } from 'react';
import '../style/product-options.scss'
// import ButtonResponseWhite from './ButtonResponse/White/ButtonResponseWhite'

const ProductOptions = ({ description, color, material }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div>
      <div className='card-page__options-container'>
        <h1 className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>Опис</h1>
        <h1 className={activeTab === 'characteristics' ? 'active' : ''} onClick={() => setActiveTab('characteristics')}>Характеристики</h1>
        <h1 className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>Відгуки</h1>
      </div>
      {activeTab === 'description' && (
        <div style={{marginTop: '35px'}}>
            <p style={{fontSize: '17px', lineHeight: '28px', color: '#4B4B4B'}}>
                {description}
            </p>
        </div>
      )}
      {activeTab === 'characteristics' && (
        <div style={{marginTop: '35px'}}>
          <p style={{fontSize: '17px', lineHeight: '28px', color: '#4B4B4B'}}>
                Кольори ............................................................... {color + " "} <br/>
                Матеріал .................................................................................. {material}
          </p>
        </div>
      )}
      {activeTab === 'reviews' && (
        <div style={{marginTop: '35px'}}>
            <p>
                Поки що відгуків нема
            </p> 
        </div>
      )}
    </div>
  );
};

export default ProductOptions;
