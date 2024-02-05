import React, { useEffect, useState } from "react";
import "./Home.scss";
import MovieList from "../MovieList/MovieList";
import axios from "axios";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const movieData = async () => {
      try {
        const response = await axios.get(api);
        dispatch(addMovies(response.data));
      } catch {
        console.error("Oops something went wrong!");
      }
    };
    movieData();
  }, []);
  return (
    <div>
      <div className="img"></div>
      <MovieList />
    </div>
  );
};

export default Home;
