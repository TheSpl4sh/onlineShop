import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatalog } from '../../redux/catalog/catalogSlice';
import Card from '../Card'

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
        <>
          {catalog.map((product) => (
            <Card 
              key={product.id}
              
            />
          ))}
        </>
      )}
      {catalogStatus === 'failed' && <div>Error: {catalogError}</div>}
    </div>
  );
}

export { ProductsList } ;