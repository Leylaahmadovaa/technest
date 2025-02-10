import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"

function App() {
  const [formData,setFormData]=useState({
    initialInvestment:10000,
    annualInvestment:1000,
    expectedReturn:8,
    duration:12,
  })
  function handleChange(fieldName,value){
  setFormData(prevData=>{
      return ({
          ...prevData,
          [fieldName]:Number(value) //type-ında asılı olmıyaraq, input-dan gələn dəyər həmişə string-dir
      })
  })
  }
  const isValid=formData.duration>0
  return (
    <>
    <Header></Header>
    <UserInput formData={formData} onchange={handleChange}></UserInput>
    {
    isValid?
      <Result data={formData}></Result>
      :
      <p className="center">Enter valid duration</p>
    }
    </>
  )
}

export default App
