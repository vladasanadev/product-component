import React from 'react'

interface Product {
    id:number;
    name: string;
    inStock?: boolean;
    price?: number;
}

export default function Product({product}:{product: Product}) {
 
  return (
    <div>
    <p>Product Item</p>
    <h3>
     {product.name} - {product.inStock? <p style ={{color:"green"}}>Available Now ${product.price}</p> : <p style ={{color:"red"}}>Out of stock</p>} 
</h3>

    </div>
  )
}
