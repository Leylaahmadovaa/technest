import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  const [product,setProduct]=useState()
  async function getProducts() {
    let data= await fetch(`https://dummyjson.com/products/${params.id}`).then(res=>res.json())
    setProduct(data)        
   }
useEffect(()=>{
    getProducts()
},[])

  return <div>   
      {product&&<div className="grid grid-cols-2 gap-2 w-[80%] mt-[6%] ml-[18%]">

        <Carousel className="w-[400px] border-2 border-solid rounded-md border-blue-200 p-[20px] " autoplay autoplaySpeed={2500} draggable={true} arrows={true} infinite={true}>
        {product.images.map((element)=>{
return(
    <div>
        <img src={element} className="rounded-lg w-[100%]" alt="productImage" />
    </div>)
        })}

    </Carousel>

        <div className="ml-[-130px] w-[90%] flex flex-col gap-[30px]">
          <p className="text-blue-600 font-medium">{product.category}</p>
          <h1 className="text-3xl font-extrabold">{product.title}</h1>
          <p className="w-[70%] text-gray-400">{product.description}</p>
          <div>
          <p className="text-2xl mr-[10px] inline-block">$ {(product.price*((100-product.discountPercentage)/100)).toFixed(2)}</p><span className="inline-block text-white bg-black rounded-md p-[5px] text-xs">{product.discountPercentage}%</span>
          </div>
          <p className="line-through text-gray-400">$ {product.price}</p>
          <button className="bg-blue-500 text-white w-[80%] rounded-md p-[10px]"><i class="fa-solid fa-cart-shopping"></i>Add to card</button>
        </div>

      </div>
}
    </div>
}
