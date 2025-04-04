import React from "react";
import "../styling.css";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  return (
    <ul id="answers">
      {answers.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (isSelected && answerState === "answered") {
          cssClass = "selected";
        }

        if (
          (isSelected && answerState === "Correct") ||
          (isSelected && answerState === "Wrong")
        ) {
          cssClass = answerState.toLowerCase();
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
