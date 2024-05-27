import React from "react";
import "../styling.css";
import QuizComplete from "../../../../images/quiz-complete.png";
import { Questions } from "../Questions";

const Summary = ({ userAnswer }) => {
  const skippedAnswers = userAnswer.filter((answer) => answer === null);
  const correctAnswers = userAnswer.filter(
    (answer, index) => answer === Questions[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswer.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswer.length) * 100
  );

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img
        src={QuizComplete}
        alt="quiz-complete"
        className="quiz-complete"
      ></img>
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text text-center">skipped Questions</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text text-center">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text text-center">incorrect answers</span>
        </p>
      </div>
    </div>
  );
};

export default Summary;
