import React from 'react'
import ProductList from './productList'

const ProductItem = () => {
    const products=['product1','product2','product3'];
    const showproduct=true;
  return (
    <div>E-commerce website
       { showproduct ?<ul>
            {
                products.map((item,key)=>(
                        <ol key={key}><ProductList Name={item}></ProductList></ol>
                        
                    ))
            }
        </ul>:
        <p>Don't show products</p>
        }

        { showproduct &&<ul>
            {
                products.map((item,key)=>(
                        <ol key={key}><ProductList Name={item}></ProductList></ol>
                        
                    ))
            }
        </ul>
        }
    </div>
  )
}

export default ProductItem