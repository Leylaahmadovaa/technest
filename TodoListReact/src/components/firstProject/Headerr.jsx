import { useContext, useState } from "react";
import { MyContext } from "../../store/MyContext";

function Headerr() {
  const [count, setCount] = useState(0);
  const {text,setText}=useContext(MyContext)//MyContext ona görə deyirik ki, FifthProject.jsx faylındakı "<MyContext.Provider value={{text,setText}}>" burdakı value-ləri götürmək üçün. Həm də bunu Question.jsx faylında da istifadə edə bilərik.
  const increment = () => {
    setCount((prev) => prev + 1);
    setText("count +")
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
    setText("count -")

  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 200px",
        backgroundColor: "#2F1893",
        color: "white",
      }}
    >
      <button
        onClick={() => {
          decrement();
        }}
        style={{ padding: "10px 20px", width: "10%" }}
      >
        -
      </button>
      <p
        style={{
          backgroundColor: "white",
          padding: "10px 20px",
          color: "black",
        }}
      >
        {count}
      </p>
      <button
        onClick={increment}
        style={{ padding: "10px 20px", width: "10%" }}
      >
        +
      </button>
    </div>
  );
}

export default Headerr;
