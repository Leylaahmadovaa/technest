import AddExpense from "./AddExpense";
import Expenses from "./Expenses";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../store/MyContext";
export default function SixthProject() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      cost: 100,
      title: "Shopping",
    },
    {
      id: 2,
      cost: 10,
      title: "Holiday",
    },
    {
      id: 3,
      cost: 1,
      title: "Transportation",
    },
    {
      id: 4,
      cost: 100,
      title: "Fuel",
    },
    {
      id: 5,
      cost: 100,
      title: "Child Care",
    },
  ]);
  const [isEditable, setIsEditable] = useState(false);
  const [changeInput, setChangeInput] = useState(2000);
  function handleChange(value) {
    setChangeInput(Number(value));
  }
  const [sumOfCosts, setSumOfCosts] = useState(0);
  useEffect(() => {
    let sum=0;
    expenses.forEach(element=>
      setSumOfCosts(sum += element.cost)
    );
  }, [expenses]);
  console.log(sumOfCosts);
  return (
    <div className="flex flex-col gap-[20px] px-8">
      <MyContext.Provider value={{ expenses, setExpenses }}>
        <h1 className="text-4xl font-extrabold">My Budget Planner</h1>
        <div className="flex justify-around items-center gap-[80px]">
          <div className="flex justify-between items-center h-16 px-7 w-1/3 rounded-sm bg-slate-200">
            <div>
              <span>Budget: $</span>
              <input
                className="bg-slate-200 w-[230px] outline-none cursor-default	"
                type="number"
                value={changeInput}
                readOnly={!isEditable}
                onChange={(element) => handleChange(element.target.value)}
              />
            </div>
            <button
              onClick={() => {
                setIsEditable((prev) => !prev);
              }}
              className="bg-blue-500 text-white rounded-md py-2 px-4"
            >
              Edit
            </button>
          </div>
          <div className="w-1/3 rounded-sm h-16 flex pl-7 items-center bg-green-200">
            Remaining: ${changeInput-sumOfCosts}
          </div>
          <div className="w-1/3 rounded-sm h-16 flex pl-7 items-center bg-blue-200">
            Spent so far: ${sumOfCosts}
          </div>
        </div>
        <Expenses />
        <AddExpense />
      </MyContext.Provider>
    </div>
  );
}
