import { useEffect, useState } from "react";

export default function Todo({ item,changeCount, todoList,setTodoList }) {
  const [selected, setSelected] = useState(item.done); //selected əvvəl false olsun
  const [title,setTitle]=useState(item.title)
  const handleChange=()=>{
    setTodoList(todoList.map((element)=>{
              if (item.id==element.id) {
                return{
                  ...element,
                  done:!selected?true:false
                }
              }
              else{
                return element
              }
            }))
    setSelected((prev)=>!prev)    
  }
  const [isEditable,setIsEditable]=useState(false)
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}> 
        <div onClick={isEditable?()=>{}:handleChange} style={{display:"flex",gap:"20px",width:"100%",cursor:"pointer"}}>
        <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "909px",
          border: selected ?"1px solid darkcyan": "1px solid black",
          backgroundColor: selected ? "darkcyan":"#FAFAFA",
        }}
        ></div>
      <input
        type="text"
        value={isEditable?title:item.title}
        readOnly={!isEditable}
        onChange={(event)=>setTitle(event.target.value)}
        style={{
          border: "none",
          textDecoration:selected?"line-through":"none",
          backgroundColor: "#FAFAFA",
          width: "100%",
          outline: "none",
          cursor:isEditable?"default":"pointer"
        }}
        />
        </div>
      <button
        style={{
          backgroundColor: "darkcyan",
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
        }}
        onClick={()=>{
          setIsEditable(prev=>!prev)
          if (isEditable==true) {
            setTodoList(todoList.map((element)=>{
              if (item.id==element.id) {
                return{
                  ...element,
                  title:title
                }
              }
              else{
                return element
              }
            }))
          }
        }}
      >
        Edit
      </button>
      <button
        style={{
          backgroundColor: "#ef4820",
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
        }}
        onClick={()=>{
          setTodoList(todoList.filter((element)=>{
            return element.id!==item.id // bərabərdirsə yeni bir array-a əlavə edir, deyilsə əlavə etmir.
          }))   
        }}
      >
        Delete
      </button>
    </div>
  );
}

