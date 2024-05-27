import { React, useState, useCallback } from "react";
import { Questions } from "../Questions";
import "../styling.css";
import Question from "../Question/Question";
import Summary from "../Summary/Summary";

const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);

  // current question the user is at:
  const activeQuestion = userAnswer.length;

  //to check if quiz is complete
  const quizComplete = activeQuestion === Questions.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      // need to do this to make sure we don't lose he old state
      setUserAnswer((prevUserAnswers) => {
        // appending new selected answer to the old state (latest state)
        return [...prevUserAnswers, selectedAnswer];
      });
    },

    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  // if all questions are complete:
  if (quizComplete) {
    return <Summary userAnswer={userAnswer} />;
  }

  return (
    <div className="quiz">
      <Question
        key={activeQuestion}
        index={activeQuestion}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
