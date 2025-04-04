import React from "react";
import QuizHeader from "../components/QuizHeader";
import Quiz from "../shared-components/Quiz/Quiz";
import { Questions } from "./components/Questions";
import "./components/styling.css";
import "../shared-components/styling.css";

const Main4 = () => {
  return (
    <div
      className="quiz-container"
      style={{ position: "relative", height: "100vh" }}
    >
      <QuizHeader />
      <main>
        <Quiz questions={Questions} questionCount={15} cssPrefix="aws-" />
      </main>
    </div>
  );
};

export default Main4;
