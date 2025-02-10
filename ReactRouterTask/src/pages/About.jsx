import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function About(){
    const [products,setProducts]=useState([])

    async function getProducts() {
        let data= await fetch('https://dummyjson.com/products').then(res=>res.json()).then(res=>res.products)
        setProducts(data)        
    }
    useEffect(()=>{
        getProducts() 
    },[])

    return (
    <div>
        <div className="grid grid-cols-6 m-[20px] place-content-center gap-3">
        {products.length>0&&
        products.map((element)=>{
                  return (
                    <NavLink
                      key={element.id}
                      to={`${element.id}`}
                      className=" shadow-3xl h-[420px] p-3 flex flex-col items-center border-l-2 "
                    >
                      <img
                        src={element.images[0]}
                        className="rounded-lg w-40 h-40"
                        alt="product"
                      />
                      <h1 className="font-bold text-center h-[70px] flex items-center justify-center text-[15px]">{element.title}</h1>
                      <p className="text-gray-400 text-center text-xs h-[60px]">
                        {element.description.slice(0, 35)}...
                      </p>
                      <p className="text-center font-bold text-lg">
                        ${element.price}
                      </p>
                      <p className="flex gap-2 justify-center mt-[10px]">
                        {Array.from(
                          { length: Math.round(element.rating) },
                          (_, index) => (
                            <img
                              key={index}
                              className="w-5 h-5" 
                              src="https://www.svgrepo.com/show/13695/star.svg"
                              alt="star"
                            />
                          )
                        )}
                      </p>
                      <button className="bg-blue-400 text-white text- rounded-md w-full mt-[10px] p-[5px]">Buy Now</button>
                    </NavLink>
                  );
            
        })
    }
    </div>
    </div>
    )
}
