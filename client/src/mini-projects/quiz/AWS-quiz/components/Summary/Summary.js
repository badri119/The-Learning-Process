import React from "react";
import { Link } from "react-router-dom";
import "../styling.css";

const Summary = ({ userAnswer, questionSet }) => {
  const skippedAnswers = userAnswer.filter((answer) => answer === null);
  const correctAnswers = userAnswer.filter(
    (answer, index) => answer === questionSet[index].correctAnswer
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
      <h2 className="text-center quiz-h2">Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === questionSet[index].correctAnswer) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3 className="text-white">{index + 1}</h3>
              <p className="question">{questionSet[index].text}</p>
              <p className={cssClass}>{answer === null ? "Skipped" : answer}</p>
              {answer !== questionSet[index].correctAnswer &&
                answer !== null && (
                  <p className="text-green-400 mt-2">
                    Correct answer: {questionSet[index].correctAnswer}
                  </p>
                )}
            </li>
          );
        })}
      </ol>
      <div className="flex justify-center">
        <Link
          className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
          to="/quiz"
        >
          Back to Quizzes
        </Link>
      </div>
    </div>
  );
};

export default Summary;
