import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatalog } from '../../redux/catalog/catalogSlice';
import Card from '../Card/Card';

function ProductsList({ productType }) {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog.items);
  const catalogStatus = useSelector((state) => state.catalog.status);
  const catalogError = useSelector((state) => state.catalog.error);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (catalogStatus === 'idle') {
      dispatch(fetchCatalog());
    }
  }, [catalogStatus, dispatch]);

  // Фільтруємо каталог за обраним типом продукту
  const filteredProducts = catalog.filter(product => {
    switch (productType) {
      case "НОВИНКА":
        return product.new && product.chips === "НОВИНКА";
      case "ХІТ":
        return product.hit && product.chips === "ХІТ";
      case "ЗНИЖКА":
        return product.discount && product.chips === "- 20%";
      default:
        return true;
    }
  });

  // Оновлюємо індекси при натисканні на стрілки
  const nextSlide = () => {
    if (currentIndex < filteredProducts.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <>
      <button 
        onClick={prevSlide} 
        className={`arrivals-section__arrow-button arrivals-section__arrow-button--active ${currentIndex === 0 ? 'disabled' : ''}`}
      >
      </button>
      <button 
        onClick={nextSlide} 
        className={`arrivals-section__arrow-button arrivals-section__arrow-button--nonactive ${currentIndex >= filteredProducts.length - 3 ? 'disabled' : ''}`}
      >
      </button>
      {catalogStatus === 'loading' && <div>Loading...</div>}
      {catalogStatus === 'succeeded' && (
        <>
          <div className="slider">
            {filteredProducts.slice(currentIndex, currentIndex + 3).map((product) => (
              <Card 
                item={product}
                key={product.id}
              />
            ))}
          </div>
        </>
      )}
      {catalogStatus === 'failed' && <div>Error: {catalogError}</div>}
    </>
  );
}

export default ProductsList;
