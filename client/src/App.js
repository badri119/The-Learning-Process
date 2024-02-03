import "./App.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import QuoteProvider from "./components/context/ForQuotes/QuoteProvider";
import Quote from "./components/quotes/Quote";
import QuoteList from "./components/quotes/QuoteList";
import Http from "./components/HttpGame/Http";
import MovieDB from "./components/MovieDB/Main";

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
        <Route path="http-game" element={<Http />} />
        <Route path="movie-db" element={<MovieDB />} />
      </Routes>
    </div>
  );
}

export default App;
