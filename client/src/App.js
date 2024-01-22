import "./App.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import QuoteProvider from "./components/context/QuoteProvider";
import Quote from "./components/quoutes/Quote";
import QuoteList from "./components/quoutes/QuoteList";

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
      </Routes>
    </div>
  );
}

export default App;
