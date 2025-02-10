import { useEffect, useState } from "react";


export default function QuestionComponent({setCount, answer, setQuestionNumber, question, selectedAnswers, questionNumber}){
    const [selectedAnswer,setSelectedAnswer]=useState("")
    function handleClick(answer){
        setSelectedAnswer(answer)
    }
    function handleSubmit(){
        if(answer==selectedAnswer){
            setCount(prev=>prev+1)
        }
        selectedAnswers[questionNumber]=selectedAnswer
        setQuestionNumber(prev=>prev+1)
        setSelectedAnswer("")
    }
    useEffect(()=>{
        if(selectedAnswers[questionNumber]){
            setSelectedAnswer(selectedAnswers[questionNumber])
        }
        else{
            setSelectedAnswer("")
        }
    },[questionNumber])
    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <h2 className="text-lime-800 font-semibold	">{question.question}</h2>
            <div className="grid grid-cols-2 gap-4">
                <p onClick={()=>handleClick("A")} className={`bg-gradient-to-tr from-lime-400 to-lime-300  w-full border-2 px-6 py-4 rounded-xl text-center font-extrabold ${selectedAnswer=="A"?"border-gray-700 text-gray-700 ":"border-lime-700 border-2 text-lime-700"}`}>{question.options.A}</p>
                <p onClick={()=>handleClick("B")} className={`bg-gradient-to-tr from-lime-400 to-lime-300  w-full border-2 px-6 py-4 rounded-xl text-center font-extrabold ${selectedAnswer=="B"?"border-gray-700 text-gray-700 ":"border-lime-700 border-2 text-lime-700"}`}>{question.options.B}</p>
                <p onClick={()=>handleClick("C")} className={`bg-gradient-to-tr from-lime-400 to-lime-300  w-full border-2 px-6 py-4 rounded-xl text-center font-extrabold ${selectedAnswer=="C"?"border-gray-700 text-gray-700 ":"border-lime-700 border-2 text-lime-700"}`}>{question.options.C}</p>
                <p onClick={()=>handleClick("D")} className={`bg-gradient-to-tr from-lime-400 to-lime-300  w-full border-2 px-6 py-4 rounded-xl text-center font-extrabold ${selectedAnswer=="D"?"border-gray-700 text-gray-700 ":"border-lime-700 border-2 text-lime-700"}`}>{question.options.D}</p>
            </div>
            <button onClick={handleSubmit} className="border-lime-700 border-2 py-[5px] placeholder-sky-400 bg-gradient-to-r from-lime-400 to-lime-300 w-[300px] rounded-xl text-lime-900">Submit</button> {/*əgər funksiyanın içinə parametr ötürməmişiksə onClick-in içində arrow function açmağa ehtiyac yodur*/}
        </div>
    );
}