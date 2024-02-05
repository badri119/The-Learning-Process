import React from "react";
import "./MovieList.scss";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  // console.log("All the movies are", movies);
  let dataMovies = "";

  dataMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{dataMovies}</div>
      </div>
    </div>
  );
};

export default MovieList;
