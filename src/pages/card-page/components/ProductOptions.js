import React, { useState } from 'react';
import '../style/product-options.scss'
import ButtonResponseWhite from './ButtonResponse/White/ButtonResponseWhite'

const ProductOptions = () => {
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
                Кросівки Nike Air VaporMax 2023 Flyknit з підтримуючою амортизацією, створеною для плавного бігу, є абсолютно новим поглядом на знайому колекцію.
                <br/>
                Модель VaporMax названа на честь команди "Portland Trail Blazers". Вперше модель з'явилася на майданчиках 1972 року. Зараз це вже класика lifestyle від Nike. 
                <br/>
                — натуральна шкіра для верху кросівок
                <br/>
                — зміцнювальні вставки з натуральної замші
                <br/>
                — контрастний swoosh
                <br/>
                — пряма шнурівка
                <br/>
                — нейлоновий язичок з необробленим краєм
            </p>
        </div>
      )}
      {activeTab === 'characteristics' && (
        <div style={{marginTop: '35px'}}>
          <p style={{fontSize: '17px', lineHeight: '28px', color: '#4B4B4B'}}>
                Кольори ............................................................... Червоний, Сірий, Чорний <br/>
                Матеріал .................................................................................. Дерматин, Замш
          </p>
        </div>
      )}
      {activeTab === 'reviews' && (
        <div style={{marginTop: '35px'}}>
            <p>
                Поки що відгуків нема
            </p> 
            <ButtonResponseWhite/>
        </div>
      )}
    </div>
  );
};

export default ProductOptions;
