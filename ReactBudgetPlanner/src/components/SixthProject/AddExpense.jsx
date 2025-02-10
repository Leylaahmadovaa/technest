import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../../store/MyContext";
export default function AddExpense() {
    const {expenses,setExpenses}=useContext(MyContext)  
    const [newTitle, setNewTitle] = useState("");
    const [newCost, setNewCost] = useState(0);



    function Change(value) {
        setNewCost(Number(value));
      }
  return (
    <div className="flex flex-col gap-[20px]">
      <h2 className="text-3xl font-extrabold">Add Expense</h2>
      <div className="flex w-[830px] justify-between">
        <div>
          <p>Name</p>
          <input
            type="text"
            value={newTitle}
            className="w-[400px] border-2 border-solid rounded-sm h-11 flex px-7 items-center"
            onChange={({ target }) => {
                setNewTitle(target.value);
              }}
          />
        </div>
        <div>
          <p>Cost</p>
          <input
            type="number"
            value={newCost}
            className="w-[400px] border-2 border-solid rounded-sm h-11 flex px-7 items-center"
            onChange={(element) => Change(element.target.value)}
              
          />
        </div>
      </div>
      <button
      onClick={() =>{
        if (newTitle) {
          setExpenses((prev) => [
            ...prev,
            {
              id: Math.floor(Math.random() * 100000),
              cost:newCost,
              title: newTitle,
            },
          ]);
          setNewTitle("");
          setNewCost(0)
        }
      }}
      className="bg-blue-500 text-white rounded-md py-3 px-4 w-20">
        Save
      </button>
    </div>
  );
}
