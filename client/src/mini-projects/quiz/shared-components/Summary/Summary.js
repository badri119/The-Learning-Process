import React from "react";
import { Link } from "react-router-dom";
import "../styling.css";

const Summary = ({ userAnswer, questionSet, cssPrefix = "" }) => {
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
    <div id={`${cssPrefix}summary`} className="summary quiz">
      <h2 className={`text-center ${cssPrefix}quiz-h2`}>Quiz Completed!</h2>
      <div id={`${cssPrefix}summary-stats`} className="summary-stats">
        <p>
          <span className={`${cssPrefix}number number`}>
            {skippedAnswersShare}%
          </span>
          <span className={`${cssPrefix}text text`}>skipped</span>
        </p>
        <p>
          <span className={`${cssPrefix}number number`}>
            {correctAnswersShare}%
          </span>
          <span className={`${cssPrefix}text text`}>answered correctly</span>
        </p>
        <p>
          <span className={`${cssPrefix}number number`}>
            {wrongAnswersShare}%
          </span>
          <span className={`${cssPrefix}text text`}>answered incorrectly</span>
        </p>
      </div>
      <ol className="results-list">
        {userAnswer.map((answer, index) => {
          let cssClass = `${cssPrefix}user-answer user-answer`;

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
              <p className={`${cssPrefix}question question`}>
                {questionSet[index].text}
              </p>
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
