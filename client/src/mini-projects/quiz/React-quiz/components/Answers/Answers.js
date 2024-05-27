import { React, useRef } from "react";
import "../styling.css";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();
  //if it is not undefined, questions will get shuffled, if it already shuffled, it won't run
  if (!shuffledAnswers.current) {
    //shuffle options:
    shuffledAnswers.current = [...answers];
    //   console.log(shuffleOptions);
    // Math.random gives a value between 0 and 1 (excluding 1)
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <div>
      <ul className="answers">
        {shuffledAnswers.current.map((answer) => {
          const isSelected = selectedAnswer === answer;
          let cssClasses = " ";

          if (answerState === "answered" && isSelected) {
            cssClasses = "selected";
          }
          if (
            (answerState === "Correct" || answerState === "Wrong") &&
            isSelected
          ) {
            cssClasses = answerState;
          }

          return (
            <li key={answer} className="answer">
              <button
                onClick={() => onSelect(answer)}
                className={cssClasses}
                disabled={answerState !== ""}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Answers;
