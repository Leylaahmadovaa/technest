import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../../store/MyContext";
export default function Expenses(){
    const {expenses,setExpenses}=useContext(MyContext)  
    return(
    <div className="flex flex-col gap-[15px] mt-5">
    <h2 className="text-3xl font-extrabold">Expenses</h2>
    <input type="text" placeholder="Type to search..." className="border-2 border-solid flex items-center pl-7 h-10 rounded-sm"/>
    <div className="h-[280px] overflow-y-scroll">
     {expenses.map((item) => {
        return (
        <div className="border-2 border-solid rounded-sm h-14 flex px-7 items-center justify-between font-semibold" key={item.id}>
            <p>{item.title}</p>
            <div className="flex justify-around gap-5">
                <div className="bg-blue-500 text-white rounded-xl px-2">${item.cost}</div>
                <button
                onClick={()=>{
                    setExpenses(expenses.filter((element)=>{
                      return element.id!==item.id;
                    }))   
                  }}
                className="bg-black text-center text-white rounded-3xl px-2">x</button>
            </div>
        </div>
        )
  })
  }
    </div>
    </div>
    );
    }