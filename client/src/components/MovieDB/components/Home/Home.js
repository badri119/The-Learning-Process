import React, { useEffect, useState } from "react";
import "./Home.scss";
import MovieList from "../MovieList/MovieList";
import { useDispatch } from "react-redux";
import { fetchMovies, fetchShows } from "../../features/movies/movieSlice";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "John";
  const showText = "Breaking";

  useEffect(() => {
    dispatch(fetchMovies(movieText));
    dispatch(fetchShows(showText));
  }, [dispatch]);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="img"></div>
        <MovieList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
