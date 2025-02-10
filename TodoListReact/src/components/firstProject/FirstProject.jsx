import { useEffect, useState } from "react";
import Header from "./Header";
import Todo from "./Todo";

function FirstProject() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      done: true,
      title: "Edit video",
    },
    {
      id: 2,
      done: false,
      title: "Organize Files",
    },
    {
      id: 3,
      done: true,
      title: "Write Blog Post",
    },
  ]);
  const [length,setLength]=useState(0)
  useEffect(()=>{
    let unDoneCount=0
    todos.map((element=>{
      if (!element.done) {
        unDoneCount++;
      }
    }))
    setLength(unDoneCount)
  },[todos])
  const [todoTitle, setTodoTitle] = useState("");
  const [status, setStatus] = useState("Active");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "darkcyan",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          backgroundColor: "#FAFAFA",
          width: "40%",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <input
            value={todoTitle}
            style={{
              outline: "none",
              border: "none",
              borderBottom: "1px solid black",
              width: "100%",
              backgroundColor: "#FAFAFA",
            }}
            onChange={({ target }) => {
              setTodoTitle(target.value);
            }}
            type="text"
          />
          <button
            style={{
              padding: "10px 25px",
              borderRadius: "10px",
              backgroundColor: "darkcyan",
              color: "white",
              border: "none",
            }}
            onClick={() => {
              if (todoTitle) {
                setTodos((prev) => [
                  ...prev,
                  {
                    id: Math.floor(Math.random() * 100000),
                    title: todoTitle,
                  },
                ]);
                setTodoTitle("");
              }
            }}
          >
            Add
          </button>
        </div>
        <h3>You have {length} task(s) to complete</h3>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            onClick={() => setStatus("Active")}
            style={{
              width: "20%",
              border: "1px solid darkcyan",
              backgroundColor: status == "Active" ? "darkcyan" : "white",
              color: status != "Active" ? "darkcyan" : "white",
              textAlign: "center",
              padding: "10px 20px",
              borderRadius: "20px",
              transition:"200ms all"
            }}
          >
            Active
          </div>
          <div
            onClick={() => setStatus("Done")}
            style={{
              width: "20%",
              border: "1px solid darkcyan",
              backgroundColor: status == "Done" ? "darkcyan" : "white",
              color: status != "Done" ? "darkcyan" : "white",
              textAlign: "center",
              padding: "10px 20px",
              borderRadius: "20px",
              transition:"200ms all",

            }}
          >
            Done
          </div>
        </div>
        {todos.map((item) => {
          if (status == "Active") {
            return (
              !item.done && (
                <Todo
                  key={item.id}
                  item={item}
                  todoList={todos}
                  setTodoList={setTodos}
                ></Todo>
              )
            );
          } else {
            return (
              item.done && (
                <Todo
                  key={item.id}
                  item={item}
                  todoList={todos}
                  setTodoList={setTodos}
                ></Todo>
              )
            );
          }
        })}
      </div>
    </div>
  );
}

export default FirstProject;

