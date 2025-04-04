import React from "react";
import "../styling.css";

const Answers = ({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
  cssPrefix = "",
}) => {
  return (
    <ul id={`${cssPrefix}answers`} className="answers">
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
          <li key={answer} className={`${cssPrefix}answer answer`}>
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
