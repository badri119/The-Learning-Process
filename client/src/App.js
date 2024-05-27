import "./App.css";
import React from "react";
import LandingPage from "./mini-projects/LandingPage";
import QuoteProvider from "./mini-projects/context/ForQuotes/QuoteProvider";
import Quote from "./mini-projects/quotes/Quote";
import QuoteList from "./mini-projects/quotes/QuoteList";
import Http from "./mini-projects/quiz/HttpGame/Http";
import MovieDB from "./mini-projects/MovieDB/Main";
import Management from "./mini-projects/project-management/management/Main";
import Cart from "./mini-projects/cart/Main2";
import ReactQuiz from "./mini-projects/quiz/React-quiz/Main3";
import Quiz from "./mini-projects/quiz/QuizLanding";
import { Provider } from "react-redux";
import { store } from "./mini-projects/MovieDB/features/store";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          path="/quote-generator"
          element={
            <React.Fragment>
              <QuoteProvider>
                <Quote />
              </QuoteProvider>
            </React.Fragment>
          }
        />
        <Route
          path="/quotes-list"
          element={
            <React.Fragment>
              <QuoteProvider>
                <QuoteList />
              </QuoteProvider>
            </React.Fragment>
          }
        />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/http-quiz" element={<Http />} />
        <Route path="/quiz/react-quiz" element={<ReactQuiz />} />
        <Route
          path="/movie-db/*"
          element={
            <React.Fragment>
              <Provider store={store}>
                <MovieDB />
              </Provider>
            </React.Fragment>
          }
        />
        <Route path="/management" element={<Management />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/quiz/http-game" element={<Http />} />
      </Routes>
    </div>
  );
}

export default App;
