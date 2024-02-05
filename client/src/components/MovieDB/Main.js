import "./Main.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageError from "./components/PageError/PageError";
import Footer from "./components/Footer/Footer";
function Main() {
  return (
    <div className="app2">
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/:imdbID" element={<MovieDetail />}></Route>
          <Route element={<PageError />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
