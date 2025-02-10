import { useDispatch, useSelector } from "react-redux";
import { CounterActions } from "../store/counterStore";

export default function Counter() {
  const counter = useSelector(state=>state.counter.counter)
  const toggle = useSelector(state=>state.counter.isActive)
  const dispatch=useDispatch()
  const increment=()=>{
    dispatch(CounterActions.increment())
  }
  const decrement=()=>{
    dispatch(CounterActions.decrement())
  }
  return (
    <div>
      <h1 className="text-center mb-3">Counter</h1>
      <div className="flex flex-col items-center gap-3">
        {toggle&&<h1>{counter}</h1>}
        <div className=" flex justify-center gap-3">
          <button onClick={decrement} className="border-[1px] border-lime-600 bg-lime-400 ">decrement</button>
          <button onClick={()=>{dispatch(CounterActions.toggle())}} 
          className="border-[1px] border-lime-600 bg-lime-400 ">Toggle</button>
          <button onClick={increment} className="border-[1px] border-lime-600 bg-lime-400 ">increment</button>
        </div>
      </div>
    </div>
  );
}
