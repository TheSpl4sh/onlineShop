import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

const ProductsList = () => {
    const products = useSelector(state => state);


  return (
    <>
    {products.map((item) => (
                    //   <Card 
                    //     item={item} 
                    //     key={item.id} 
                    //   />
                    console.log(item.id)
                      
                  ))}
    </>
  )
}

export { ProductsList }