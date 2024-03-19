import React from 'react'
import { useSelector } from 'react-redux'
// import Card from '../Card/Card'

const ProductsList = () => {
    const product = useSelector(state => state.products.products);

  return (
    <>
    {product.map((item) => (
                    //   <Card 
                    //     item={item} 
                    //     key={item.id} 
                    //   />
                    console.log(item)
                      
                  ))}
    </>
  )
}

export { ProductsList }