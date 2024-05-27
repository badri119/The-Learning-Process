import React, { useState } from "react";
import "./MovieList.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMovies,
  fetchShows,
  getAllMovies,
  getAllShows,
} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  // console.log("All the movies are", movies);
  // console.log("All the shows are", shows);
  const movieData = movies && movies.Search ? movies.Search.slice(0, 8) : [];
  const showData = shows && shows.Search ? shows.Search.slice(0, 8) : [];

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(search));
    dispatch(fetchShows(search));
    setSearch("");
  };

  return (
    <div>
      <div>
        <form onSubmit={submitHandler} className="search-bar">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-bar"
            placeholder="Search for a movie or show.."
            type="text"
          ></input>
          <button type="submit" className="search-button" disabled={!search}>
            Search
          </button>
        </form>
      </div>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2 className="title-name">Movies</h2>
          <div className="movie-container">
            {movies.Response === "True" ? (
              movieData.map((movie, index) => (
                <MovieCard key={index} data={movie} />
              ))
            ) : (
              <div className="movies-error">
                <h3>{movies.Error}</h3>
              </div>
            )}
          </div>
        </div>
        <div className="space-between">
          <div className="movie-list">
            <h2 className="title-name">Series</h2>
            <div className="movie-container">
              {shows.Response === "True" ? (
                showData.map((show, index) => (
                  <MovieCard key={index} data={show} />
                ))
              ) : (
                <div className="movies-error">
                  <h1>{shows.Error}</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
