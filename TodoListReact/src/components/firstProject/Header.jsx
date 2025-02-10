import { useState } from "react";

function Header() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount(count+1) belə də yaza bilərik. Amma düzgün variant aşağıdakı kimidir:
    //eyni zamanda işləməsi üçün bu cür yazırıq:
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
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

export default Header;
