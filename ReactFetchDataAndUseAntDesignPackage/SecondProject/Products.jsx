import React from 'react'
import Product from './Product'

export default function Products({products}) {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
    {products.map((item)=>{
        return <Product key={item.id} item={item}></Product>
    })}
    </div>
  )
}
