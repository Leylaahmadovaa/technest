import { useEffect, useState } from "react";
import QuestionComponent from "./QuestionComponent";
import data from "./questions.json";
const questions = data.questions;
const answers = [];
export default function ForthProject() {
  const [selectedQuestion, setSelectedQuestion] = useState(questions);
  const [answer, setAnswer] = useState(questions[0].correctAnswer);
  const [count, setCount] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  useEffect(() => {
    setAnswer(questions[questionNumber].correctAnswer);
  }, [questionNumber]);
  function nextQuestion() {
    setQuestionNumber((prev) => prev + 1);
  }
  function previousQuestion() {
    setQuestionNumber((prev) => prev - 1);
  }
  console.log(answers);
  
  return (
    <div className="bg-gradient-to-bl from-lime-200 to-green-200 h-screen flex flex-col items-center justify-center">
      <div className="border-dotted bg-gradient-to-br from-lime-400 to-green-400 h-[300px] w-[500px] rounded-2xl  border-lime-700 border-4 flex flex-col items-center justify-center">
      <p className="bg-gradient-to-br from-lime-400 to-green-400 absolute right-44 top-36 text-3xl text-lime-700  p-[10px] rounded-2xl border-2 border-lime-700">
        Points: {count}
      </p>
      <header className="flex items-center justify-center gap-14">
        <span onClick={previousQuestion}>&larr;</span>
        <h1 className="text-4xl text-lime-700">
          Question {questionNumber + 1}
        </h1>
        <span onClick={nextQuestion}>&rarr;</span>
      </header>
      <main>
        <QuestionComponent
          setCount={setCount}
          setQuestionNumber={setQuestionNumber}
          answer={answer}
          question={selectedQuestion[questionNumber]}
          selectedAnswers={answers}
          questionNumber={questionNumber}
          />
      </main>
    </div>
    </div>
  );
}
