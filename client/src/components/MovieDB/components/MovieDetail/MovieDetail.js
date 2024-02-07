import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  showDetails,
  getSelectedMovieorShow,
  removeSelectedMovieorShow,
} from "../../features/movies/movieSlice";
import Header2 from "../Header2/Header2";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieorShow);
  console.log(data);

  useEffect(() => {
    dispatch(showDetails(imdbID));
    return () => {
      dispatch(removeSelectedMovieorShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div>
      <Header2 />
      <div className="movie-section">
        {Object.keys(data).length === 0 ? (
          <div>
            <h1>...Loading Movie Details</h1>
          </div>
        ) : (
          <>
            <div className="section-left">
              <div className="movie-title">{data.Title}</div>
              <div className="movie-rating">
                <span>
                  IMDB Rating <i></i> : {data.imdbRating}
                </span>
                <span>
                  IMDB Votes <i></i> : {data.imdbVotes}
                </span>
                <span>
                  Runtime <i></i> : {data.Runtime}
                </span>
                <span>
                  Year <i></i> : {data.Year}
                </span>
              </div>
              <div className="plot">{data.Plot}</div>
              <div className="movie-info">
                <div>
                  <span>Director:</span>
                  <span>{data.Director}</span>
                </div>
                <div>
                  <span>Stars:</span>
                  <span>{data.Actors}</span>
                </div>
                <div>
                  <span>Generes:</span>
                  <span>{data.Genre}</span>
                </div>
                <div>
                  <span>Languages:</span>
                  <span>{data.Language}</span>
                </div>
                <div>
                  <span>Awards:</span>
                  <span>{data.Awards}</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img
                className="image-poster"
                src={data.Poster}
                alt={data.Title}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
