import { React, useState, useCallback, useEffect } from "react";
import "../styling.css";
import Question from "../Question/Question";
import Summary from "../Summary/Summary";

const Quiz = ({ questions, questionCount, cssPrefix = "" }) => {
  const [userAnswer, setUserAnswer] = useState([]);
  const [randomQuestions, setRandomQuestions] = useState([]);

  useEffect(() => {
    // Randomly select specified number of questions and randomize their order
    const shuffledQuestions = [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, questionCount || questions.length);

    // For each question, jumble the answers and track the correct answer
    const questionsWithJumbledAnswers = shuffledQuestions.map((question) => {
      // Store the correct answer (first option)
      const correctAnswer = question.answers[0];

      // Jumble all answers including the correct one
      const jumbledAnswers = [...question.answers].sort(
        () => Math.random() - 0.5
      );

      return {
        ...question,
        answers: jumbledAnswers,
        correctAnswer: correctAnswer, // Store the correct answer separately
      };
    });

    setRandomQuestions(questionsWithJumbledAnswers);
  }, [questions, questionCount]);

  // current question the user is at:
  const activeQuestion = userAnswer.length;

  //to check if quiz is complete
  const quizComplete =
    randomQuestions.length > 0 && activeQuestion === randomQuestions.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    // need to do this to make sure we don't lose the old state
    setUserAnswer((prevUserAnswers) => {
      // appending new selected answer to the old state (latest state)
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  // if all questions are complete:
  if (quizComplete) {
    return (
      <Summary
        userAnswer={userAnswer}
        questionSet={randomQuestions}
        cssPrefix={cssPrefix}
      />
    );
  }

  // Show loading while questions are being randomized
  if (randomQuestions.length === 0) {
    return <div className={`${cssPrefix}quiz quiz`}>Loading questions...</div>;
  }

  return (
    <div className={`${cssPrefix}quiz quiz`}>
      <Question
        key={activeQuestion}
        index={activeQuestion}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        questionSet={randomQuestions}
        cssPrefix={cssPrefix}
      />
    </div>
  );
};

export default Quiz;
