import "./Main.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageError from "./components/PageError/PageError";
function Main() {
  return (
    <div className="app2">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/details/:imdbID" element={<MovieDetail />}></Route>
        <Route element={<PageError />}></Route>
      </Routes>
    </div>
  );
}

export default Main;
