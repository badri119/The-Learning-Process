import "./Main.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageError from "./components/PageError/PageError";
import Footer from "./components/Footer/Footer";
function Main() {
  return (
    <div className="movie-container">
      <Header />
      <div className="">
        <Routes>
          <Route exact path="/movie-db" element={<Home />}></Route>
          <Route path="/movie-db/:imdbID" element={<MovieDetail />}></Route>
          <Route element={<PageError />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
