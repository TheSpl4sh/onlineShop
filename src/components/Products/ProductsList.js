import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatalog } from '../../redux/catalog/catalogSlice';

function ProductsList() {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog.items);
  const catalogStatus = useSelector((state) => state.catalog.status);
  const catalogError = useSelector((state) => state.catalog.error);

  useEffect(() => {
    if (catalogStatus === 'idle') {
      dispatch(fetchCatalog());
    }
  }, [catalogStatus, dispatch]);

  return (
    <div>
      {catalogStatus === 'loading' && <div>Loading...</div>}
      {catalogStatus === 'succeeded' && (
  <ul>
    {catalog.map((product) => (
      <li key={product.id}>
        Name: {product.name} <br />
        Price: {product.price} <br />
        Color: {product.color} <br />
        Gender: {product.gender} <br />
        Description: {product.description} <br />
        {/* Додайте інші поля тут */}
      </li>
    ))}
  </ul>
      )}
      {catalogStatus === 'failed' && <div>Error: {catalogError}</div>}
    </div>
  );
}

export { ProductsList } ;