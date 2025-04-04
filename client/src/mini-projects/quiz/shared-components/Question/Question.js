import React, { useState } from "react";
import "../styling.css";
import Timer from "../Timer/Timer";
import Answers from "../Answers/Answers";

const Question = ({
  index,
  onSelectAnswer,
  onSkipAnswer,
  questionSet,
  cssPrefix = "",
}) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: questionSet[index].correctAnswer === answer, // Compare with stored correct answer
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "Correct" : "Wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id={`${cssPrefix}question`} className="question">
      <Timer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
        cssPrefix={cssPrefix}
      />
      <h2 className={`${cssPrefix}quiz-h2 text-white`}>
        {questionSet[index].text}
      </h2>
      <Answers
        answers={questionSet[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
        cssPrefix={cssPrefix}
      />
    </div>
  );
};

export default Question;
