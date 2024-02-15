import React, { useState, useEffect } from "react";
import "./httpstyle.css";

const Http = () => {
  const [httpData, setHttpData] = useState([]);
  const [error, setError] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState();
  const [showScore, setShowScore] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:4000/http");
        const data = await result.json();
        setHttpData(data);
      } catch (err) {
        setError("Oh no, something went wrong!");
      }
    };
    fetchData();
  }, []);

  //Randomize questions
  useEffect(() => {
    if (httpData.length > 0) {
      const shuffledQuestions = shuffle(httpData).slice(0, 10);
      console.log(shuffledQuestions);
      setQuestions(shuffledQuestions);
    }
  }, [httpData]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleNextQuestion = () => {
    const correctAnswer = parseInt(questions[questionIndex].code, 10); // Convert to number
    if (parseInt(userAnswer, 10) === correctAnswer) {
      // Convert to number before comparison
      setScore((prevScore) => prevScore + 1); // Update score using a callback function
    }
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
      setUserAnswer(""); // Reset user answer
    } else {
      setShowScore(true);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setQuestionIndex(0);
    setScore(0);
    setUserAnswer("");
    setShowScore(false);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuestionIndex(0);
    setScore(0);
    setUserAnswer("");
    setShowScore(false);
  };

  if (score === 10) {
    return (
      <>
        <div className="h-screen bg-black flex flex-col justify-center items-center">
          <h1 className="text-5xl font-semibold text-white">
            You're the HTTP Code Master! 🥳
          </h1>
          <div className="pt-5">
            <button
              className=" bg-gray-700 text-white p-2 rounded-md hover:bg-white hover:text-black  hover:border-black w-48"
              onClick={resetQuiz}
            >
              Try Again!
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="h-screen bg-white flex items-center justify-center flex-col text-white">
      {!quizStarted ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={startQuiz}
        >
          Click to start quiz
        </button>
      ) : (
        <>
          {error && <div>{error}</div>}
          {showScore ? (
            <div className="w-96 h-28 bg-white rounded-md flex flex-col items-center gap-8">
              <h3 className="text-black font-semibold text-3xl">
                Quiz Complete!
              </h3>
              <h3 className="text-black font-semibold text-3xl">
                Your Score: {score}
              </h3>
              <button
                className="mt-5 bg-gray-700 text-white p-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black"
                onClick={resetQuiz}
              >
                Try Again!
              </button>
            </div>
          ) : (
            <div className="w-1/2 h-1/2 bg-white rounded-md">
              <div className="sm:p-10 flex flex-col items-center font-bold">
                <h3 className="text-black text-4xl pb-5 text-center">{`Question ${
                  questionIndex + 1
                }/${questions.length}`}</h3>
                <p className="text-black font-bold text-3xl text-center">
                  What's the code for {questions[questionIndex]?.message}?
                </p>
                <div className="pt-10">
                  <input
                    className="border border-slate-950 rounded-md p-2 text-black remove-spin"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    required
                    type="number"
                  />
                </div>
                <button
                  className="mt-5 bg-gray-700 text-white p-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black"
                  onClick={handleNextQuestion}
                >
                  Next Question
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Http;
