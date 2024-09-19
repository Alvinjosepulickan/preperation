import React from 'react'
import ButtonComponent from './button'

const ProductList = ({Name}) => {
  return (
    <div>
        <p>{Name}</p> 
        <ButtonComponent />
    </div>
    
  )
}

export default ProductList